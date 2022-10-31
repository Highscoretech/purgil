let loading = document.getElementById("loading");
console.log(loading);
let mainPage = document.querySelector(".main-page");
console.log(mainPage);
let proceed = document.getElementById("load");
console.log(loading);
console.log(proceed);

setTimeout(() => {
  loading.style.display = "block";
  //   setTimeout(() => {
  //     loading.textContent = "starting app...";
  //     setTimeout(() => {
  //       location.href = "/login";
  //     }, 3000);
  //   }, 3000);
}, 8000);
{
  /* <div class="progress">
  <div
    class="progress-bar progress-bar-striped progress-bar-animated"
    role="progressbar"
    aria-label="Animated striped example"
    aria-valuenow="75"
    aria-valuemin="0"
    aria-valuemax="100"
    style="width: 75%"
  ></div>
</div>; */
}

const openMainPage = function () {
  mainPage.style.display = "block";
};

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "1",
  spaceBetween: -30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // renderBullet: function (_, className) {
    //   return '<span class="' + className + '">' + "</span>";
    // },
  },
});
