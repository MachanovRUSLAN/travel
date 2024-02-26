const Navbar = document.querySelector(".navbar-link");
const Bar = document.querySelector(".bar-menu");
const SearchBar = document.querySelector(".search-bar")
const InputValue = document.querySelector(".search-input")

Bar.addEventListener("click", function(){
    if( Navbar.style.opacity ==="0"){
         Navbar.style.opacity = "1"
    }else {
        Navbar.style.opacity = "0"
    }
   
})

SearchBar.addEventListener("click", function(e){
  if(  InputValue.style.opacity === "0"){
    InputValue.style.opacity= "1"
  }else{
    InputValue.style.opacity = "0"
  }

})
var swiper = new Swiper(".mySwiper", {
    watchSlidesProgress: true,
    slidesPerView: 3,
  });

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });