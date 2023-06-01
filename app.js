// const swiper = new Swiper('.main-swiper', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,
//     spaceBetween: 20,
//     autoplay: {
//       delay: 3000,
//       disableOnInteraction: true,
//     },
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
// });

// const projectsSwiper = new Swiper('.projects-swiper', {
//     loop: true,
//     slidesPerView: "auto",
//     centeredSlides: true,
//     spaceBetween: 20,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: false,
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     }
// });

var lastScrollTop = 0;


// window.addEventListener("scroll", function(){

//   var st = window.pageYOffset || document.documentElement.scrollTop;

//   if (screen.width >= 575){
//     if (window.pageYOffset >= 300 || document.documentElement.scrollTop >= 300) {
//       document.querySelector(".underline").classList.add("underline-reveal");
//     } else if (window.pageYOffset <= 400 || document.documentElement.scrollTop <= 400) {
//       document.querySelector(".underline").classList.remove("underline-reveal");
//     }
//     if (window.pageYOffset >= 900 || document.documentElement.scrollTop >= 900) {
//       document.querySelectorAll(".underline-points").forEach((e) => e.classList.add("underline-reveal"));
//     } else if (window.pageYOffset <= 700 || document.documentElement.scrollTop <= 700) {
//       document.querySelectorAll(".underline-points").forEach((e) => e.classList.remove("underline-reveal"));
//     }
//   }else{
//     document.querySelector(".underline").classList.add("underline-reveal");
//     document.querySelectorAll(".underline-points").forEach((e) => e.classList.add("underline-reveal"));
//   }

//   if (st > lastScrollTop) {
//     document.querySelector(".nav-main").classList.add("nav-main-hide");
//   } else if (st < lastScrollTop) {
//     document.querySelector(".nav-main").classList.remove("nav-main-hide");
//   } // else was horizontal scroll
//   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
// }, false);


document.querySelectorAll('a[href^="#"]').forEach(currElem => {
      currElem.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
      });
  });
});

const nav = document.querySelector(".nav-main-mobile");
function menuToggle(){
  nav.classList.toggle("nav-main-hide-mobile");
  let hamburger = document.querySelector(".hamburger");
  hamburger.children[0].classList.toggle("x");
  hamburger.children[2].classList.toggle("y");
  hamburger.children[1].classList.toggle("x-fade");
}




const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});