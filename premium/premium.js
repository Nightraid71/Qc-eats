const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});

//MOBILE NAV
const contents = document.querySelectorAll(".content");
const listItems = document.querySelectorAll("nav ul li");

listItems.forEach((item, idx) => {
  item.addEventListener("click", () => {
    hideAllContents();
    hideAllItems();

    item.classList.add("active");
    contents[idx].classList.add("show");
  });
});

function hideAllContents() {
  contents.forEach((content) => content.classList.remove("show"));
}

function hideAllItems() {
  listItems.forEach((item) => item.classList.remove("active"));
}


//Side navigation
const toggle_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav2 = document.querySelectorAll('.nav2')

toggle_btn.addEventListener('click', () => {
    nav2.forEach(nav2_el => nav2_el.classList.toggle('visible'));
});

close_btn.addEventListener('click', () => {
    nav2.forEach(nav2_el => nav2_el.classList.remove('visible'))
})
