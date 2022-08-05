// show and hide navbar
const menu = document.getElementById("menu");
const menuShow = function () {
  menu.classList.toggle("fa-times");
  document.querySelector(".navbar").classList.toggle("active");
};
const hideMenuOnScroll = function () {
  menu.classList.remove("fa-times");
  document.querySelector(".navbar").classList.remove("active");
};
menu.onclick = menuShow;

//show on scroll
let elToShow = document.querySelectorAll("section");
let navItem = document.querySelectorAll(".navbar li a");

let isElInViewPort = (el) => {
  let rect = el.getBoundingClientRect();
  let viewHeight = window.innerHeight || document.documentElement.clientHeight;
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >= viewHeight && rect.top <= viewHeight) ||
    (rect.top >= 0 && rect.bottom <= viewHeight)
  );
};

function showOnScroll() {
  elToShow.forEach((item) => {
    if (isElInViewPort(item)) {
      item.classList.add("show");
      activeNavItem(item.classList[0]);
    } else {
      item.classList.remove("show");
    }
  });
}
function activeNavItem(className) {
  navItem.forEach((item) => {
    if (item.textContent == className) item.classList.add("active");
    else item.classList.remove("active");
  });
}

// show and hide scroll-top-btn
const scrollTopBtn = document.querySelector(".scroll-top");
function handleScrollTopBtn() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > 1000) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
}

window.onscroll = () => {
  showOnScroll();
  handleScrollTopBtn();
  hideMenuOnScroll();
};
showOnScroll();
handleScrollTopBtn();
