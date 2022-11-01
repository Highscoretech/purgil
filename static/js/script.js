let loading = document.getElementById("loading");

let mainPage = document.querySelector(".main-page");

let proceed = document.getElementById("load");


let liveChat = document.querySelector(".liveChat-display");

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



function openLiveChat(){
  // mainPage.style.display = "none"

  liveChat.style.display ="block"
 
 
}

function closeLiveChat() {
  liveChat.style.display ="none"
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

// ease in show

gsap.registerPlugin(ScrollTrigger);
// REVEAL //
gsap.utils.toArray(".show-item").forEach(function (elem) {
  ScrollTrigger.create({
    trigger: elem,
    start: "top 80%",
    end: "bottom 20%",
    markers: false,
    onEnter: function () {
      gsap.fromTo(
        elem,
        { y: 100, autoAlpha: 0 },
        {
          duration: 1.45,
          y: 1,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto",
        }
      );
    },
    onLeave: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    },
    onEnterBack: function () {
      gsap.fromTo(
        elem,
        { y: -100, autoAlpha: 1 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto",
        }
      );
    },
    onLeaveBack: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    },
  });
});
