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
      }

  });

const buttons = document.querySelectorAll('.ripple, .social-button');

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const x = e.clientX;
        const y = e.clientY;

        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;

        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';

        this.appendChild(circle);

        setTimeout(() => circle.remove(), 500);
    });
});

// Function to open the popup
function openPopup() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
}

// Function to close the popup
function closePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
}

const toggle_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav2 = document.querySelectorAll('.nav2')

toggle_btn.addEventListener('click', () => {
    nav2.forEach(nav2_el => nav2_el.classList.toggle('visible'));
});

close_btn.addEventListener('click', () => {
    nav2.forEach(nav2_el => nav2_el.classList.remove('visible'))
})