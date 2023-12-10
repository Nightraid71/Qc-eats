const open_btn = document.querySelector(".open-btn")
const close_btn = document.querySelector(".close-btn")
const nav = document.querySelectorAll('.nav')

open_btn.addEventListener("click", () => {
    nav.forEach(nav_el => nav_el.classList.add("visible"))
})

close_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove("visible"))
})
/*Lightbox*/
function openLightbox() { //opens lightbox
  document.getElementById("lightbox").style.display = "block";
}

function closeLightbox() { //closes lightbox
  document.getElementById("lightbox").style.display = "none";
}

var slideIndex = 1;
 slideShow(slideIndex);

function prevNext(n) { //shows next or previous image
   slideShow(slideIndex += n);
}

function Image(n) { //shows images in lightbox
   slideShow(slideIndex = n);
}

function slideShow(n) { //displays the images to display one after another
  var i;
  var slides = document.getElementsByClassName("slidesImage");
  var photo = document.getElementsByClassName("column1");
  var captionText = document.getElementById("caption");
  if (n > slides.length){
     slideIndex = 1
  }
  if (n < 1){
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < photo.length; i++) {
     photo[i].className = photo[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";
  photo[slideIndex-1].className += "active";
  captionText.innerHTML = photo[slideIndex-1].alt;
}

let index = 0;
displaySlides();
function displaySlides() {
  let i;
  const images = document.getElementsByClassName("slidesImage");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index-1].style.display = "block";
  setTimeout(displaySlides, 1000); 
}


