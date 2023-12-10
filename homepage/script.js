/* side nav bar */
const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')

open_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'))
})

close_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
})
// Search Bar: Asynch and Wait

async function fetchRestaurantData(address) {
  try {
    return await new Promise((resolve) => {
      setTimeout(() => {
        const restaurants = [
          { name: 'Zyara Restaurant', address: '733 Main St' },
          { name: 'Marthas Bakery', address: '246 Melbourne Ave' },
        ];
        resolve(restaurants);
      }, 2000); 
    });
  } catch (error) {
    throw new Error('Error fetching restaurant data');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const deliverNowButton = document.getElementById('deliverNow');
  const addressInput = document.getElementById('deliveryAddress');

  async function handleButtonClick(event) {
    const address = addressInput.value;

    try {
      console.log('Typed Address:', address);
      const restaurants = await fetchRestaurantData(address);
      console.log('Fetched Restaurants:', restaurants);
    } catch (error) {
      console.error(error.message);
    }
  }
  deliverNowButton.addEventListener('click', handleButtonClick);
});

//testimonials
const testimonials = [
    {
        name: 'Miyah Myles',
        position: 'Marketing',
        photo:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
        text:
          "This food delivery service consistently wows me with its exceptional customer support. The user-friendly interface makes ordering a breeze, and their attention to detail, from order accuracy to careful packaging, ensures that every meal arrives fresh and delicious. With prompt and reliable deliveries, they've become my go-to choice for hassle-free dining at home.",
      },
      {
        name: 'June Cha',
        position: 'Software Engineer',
        photo: 'https://randomuser.me/api/portraits/women/44.jpg',
        text:
          'I am continually impressed by QC Eats commitment to excellence. Their diverse range of restaurant options caters to every craving, and their lightning-fast deliveries always arrive right on time.',
      },
      {
        name: 'Iida Niskanen',
        position: 'Data Entry',
        photo: 'https://randomuser.me/api/portraits/women/68.jpg',
        text:
          "QC Eats has truly redefined convenience and reliability for me. Their seamless interface makes ordering an absolute pleasure, and their wide selection of restaurants caters to all tastes. What sets them apart is their exceptional communication and proactive customer service, resolving any issues swiftly and professionally. With consistently accurate orders and prompt deliveries, they've become an indispensable part of my dining routine.",
      },
      {
        name: 'Renee Sims',
        position: 'Receptionist',
        photo: 'https://randomuser.me/api/portraits/women/65.jpg',
        text:
          "QC Eats excels in maintaining high standards of food quality and delivery reliability. What truly stands out is their seamless coordination between restaurants and delivery personnel, resulting in consistently swift and accurate deliveries. Their dedication to ensuring meals arrive as delicious as they would in a restaurant, along with their commitment to customer satisfaction, makes them a top-tier choice for at-home dining convenience.",
      },
      {
        name: 'Jonathan Nunfiez',
        position: 'Graphic Designer',
        photo: 'https://randomuser.me/api/portraits/men/43.jpg',
        text:
          "Their commitment to ensuring meals arrive piping hot and in pristine condition is unmatched. Coupled with their extensive restaurant options, their reliability and dedication to quality make them my preferred choice for convenient dining at home.",
      },
  ];

  let idx = 0;

  function updateTestimonial() {
    const testimonialElement = document.querySelector('.testimonial');
    const userImageElement = document.querySelector('.user-image');
    const usernameElement = document.querySelector('.username');
    const roleElement = document.querySelector('.role');

    const { name, position, photo, text } = testimonials[idx];

    testimonialElement.textContent = text;
    userImageElement.src = photo;
    usernameElement.textContent = name;
    roleElement.textContent = position;

    idx++;

    if (idx >= testimonials.length) {
      idx = 0; 
    }
  }

  updateTestimonial();

  setInterval(updateTestimonial, 5000);
