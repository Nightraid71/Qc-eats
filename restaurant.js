//Udemy double heart-------------------------
const heart_btn = document.querySelectorAll('.fa-heart#grey');
heart_btn.forEach(heart_btn => {
   heart_btn.addEventListener('click', (e) => {
       if (heart_btn.classList.contains('clicked')) {
           changeHeartColor(heart_btn, 'lightgrey');
       } else {
           createHeart(e);
           changeHeartColor(heart_btn, 'red');
       }
       heart_btn.classList.toggle('clicked');
   });
});
//—-------------------------------
const createHeart = (e) => {
   const heart = document.createElement('i');
   heart.classList.add('fas');
   heart.classList.add('fa-heart');


   e.target.appendChild(heart);


   setTimeout(() => heart.remove(), 1000);
};
//—-------------------------------
const changeHeartColor = (heart_btn, color) => {
   heart_btn.style.color = color;
};



//Udemy Netflix Navigation------------------------
const toggle_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav2 = document.querySelectorAll('.nav2')

toggle_btn.addEventListener('click', () => {
    nav2.forEach(nav2_el => nav2_el.classList.toggle('visible'));
});

close_btn.addEventListener('click', () => {
    nav2.forEach(nav2_el => nav2_el.classList.remove('visible'))
})


//Udemy Progress Steps---------------------------
const fee = document.getElementById('fee')
const prevbtn = document.getElementById('prev-btn')
const nextbtn = document.getElementById('next-btn')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

nextbtn.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})

prevbtn.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    fee.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if(currentActive === 1) {
        prevbtn.disabled = true
    } else if(currentActive === circles.length) {
        nextbtn.disabled = true
    } else {
        prevbtn.disabled = false
        nextbtn.disabled = false
    }
}

//Asynch and wait------------------------

async function fetchRestaurantData(name) {
  try {
    return await new Promise((resolve) => {
      setTimeout(() => {
        const restaurants = [
          { food: 'Cake', name: "Martha's Bakery" },
          { food: 'Sushi', name: 'Umi Sushi' },
        ];
        resolve(restaurants);
      }, 1000); 
    });
  } catch (error) {
    throw new Error('Error fetching restaurant data');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('sea');

  async function handleKeydown(event) {
    const name = searchInput.value;

    try {
      console.log('Typed food:', name);
      const restaurants = await fetchRestaurantData(name);
      console.log('Fetched Restaurants:', restaurants);
    } catch (error) {
      console.error(error.message);
    }
  }

  searchInput.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
      handleKeydown(e);
    }
  });
});