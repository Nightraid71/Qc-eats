require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
const { body, validationResult } = require('express-validator');

const app = express();
const port = process.env.PORT || 3000;

app.use(helmet());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
});

const formDataSchema = new mongoose.Schema({
  emailPhoneInput: String,
});

const FormData = mongoose.model('FormData', formDataSchema);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/process', [
  body('emailPhoneInput')
    .isEmail().withMessage('Please enter a valid email address.')
    .isMobilePhone('any', { strictMode: false }).withMessage('Please enter a valid phone number.')
    .normalizeEmail(),
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { emailPhoneInput } = req.body;
    const formData = new FormData({ emailPhoneInput });
    await formData.save();

    res.status(200).json({ success: true, message: 'Form data saved successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

