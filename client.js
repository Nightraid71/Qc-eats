document.getElementById('signInForm').addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent the default form submission

  const formData = new FormData(event.target);
  const response = await fetch('/process', {
    method: 'POST',
    body: formData,
  });

  try {
    const result = await response.json();
    if (result.success) {
      alert(result.message);
    } else {
      alert(result.message);
    }
  } catch (error) {
    console.error('Error parsing JSON:', error);
    alert('Error processing the request. Please try again.');
  }
});
