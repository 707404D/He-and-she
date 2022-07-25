//  smooth scroll  links
$(document).ready(function () {
  $("#featurescat__links").on("click", "a", function (event) {
    var id = $(this).attr("href");

    $("body,html").animate({ scrollTop: 0 }, 100);
  });

  $("#header__nav-links").on("click", "a", function (event) {
    var id = $(this).attr("href"),
      top = $(id).position().top;
    $("body,html").animate({ scrollTop: top }, 1000);
  });

  $(".footer__links").on("click", "a", function (event) {
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1000);
  });
});

// tabs features

$(".featurescat__inner").each(function () {
  let ths = $(this);
  ths.find(".featurescat__items").not(":first").hide();
  ths
    .find(".featurescat__link")
    .click(function () {
      ths
        .find(".featurescat__link")
        .removeClass("activefeatures")
        .eq($(this).index())
        .addClass("activefeatures");
      ths.find(".featurescat__items").hide().eq($(this).index()).fadeIn();
    })
    .eq(0)
    .addClass("");
});

// tabs catalog

$(".catalog__inner").each(function () {
  let ths = $(this);
  ths.find(".catalog__items").not(":first").hide();
  ths
    .find(".catalog__link")
    .click(function () {
      ths.find(".catalog__items").hide().eq($(this).index()).fadeIn();
    })
    .eq(0)
    .addClass("");
});

// choice brand in catalog
if (document.querySelector(".main").classList.contains("main-catalog")) {
  var catalogLinks = document.querySelector(".catalog__links");
  catalogLinks.addEventListener("click", function (event) {
    event.preventDefault();
    catalogLinks.classList.toggle("activelinksbtn");
    var catalogLink = document.getElementsByClassName("catalog__link");
    var i;

    for (i = 0; i < catalogLink.length; i++) {
      catalogLink[i].addEventListener("click", function () {
        let navlastlink = document.querySelector(".featurescat__lastlink");

        Array.from(catalogLink).forEach((item) => {
          item.classList.remove("activelink");
        });
        navlastlink.innerHTML = this.innerHTML;
        this.classList.add("activelink");
      });
    }
  });
}

//  modal calendar

// change month

let monthsSlider = $("#monthsSlider");

monthsSlider.slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  prevArrow: $(".modal__changemonthbtn-prev"),
  nextArrow: $(".modal__changemonthbtn-next"),
});

// modal choice day

var modaldays = document.querySelectorAll(".modal__days > ul > li");
var i;

for (i = 0; i < modaldays.length; i++) {
  modaldays[i].addEventListener("click", function () {
    Array.from(modaldays).forEach((item) => {
      item.classList.remove("choiceday");
    });
    if (this.classList.contains("freeday")) {
      this.classList.add("choiceday");
    } else {
      this.classList.remove("choiceday");
    }
  });
}

//  modal choice time

var modaltimesbtn = document.querySelectorAll(".modal__time-btn");

for (i = 0; i < modaltimesbtn.length; i++) {
  modaltimesbtn[i].addEventListener("click", function (event) {
    event.preventDefault();
    this.classList.toggle("activetimebtn");

    var childs = $(this).find(".modal__worktime");

    for (i = 0; i < childs.length; i++) {
      childs[i].addEventListener("click", function () {
        Array.from(childs).forEach((item) => {
          item.classList.remove("activetimework");
        });
        this.classList.add("activetimework");
      });
    }
  });
}

// === modal choice worker
var modalworkersbtn = document.querySelector(".modal__worker-selector");
modalworkersbtn.addEventListener("click", function (event) {
  event.preventDefault();
  modalworkersbtn.classList.toggle("activeworkerbtn");
});

var modalworkers = document.getElementsByClassName("modal__worker");
var i;

for (i = 0; i < modalworkers.length; i++) {
  modalworkers[i].addEventListener("click", function () {
    Array.from(modalworkers).forEach((item) => {
      item.classList.remove("activeworker");
    });
    this.classList.add("activeworker");
  });
}

// modal choice type of features

var modaltypeoffeaturesbtn = document.querySelector(
  ".modal__typeoffeatures-btn"
);
modaltypeoffeaturesbtn.addEventListener("click", function (event) {
  event.preventDefault();
  modaltypeoffeaturesbtn.classList.toggle("activetyoffeaturesbtn");
});

var modaltypeoffeature = document.querySelectorAll(".modal__features-feature");
var i;

for (i = 0; i < modaltypeoffeature.length; i++) {
  modaltypeoffeature[i].addEventListener("click", function () {
    Array.from(modaltypeoffeature).forEach((item) => {
      item.classList.remove("activefeature");
    });
    this.classList.add("activefeature");
  });
}

// global sigh

var sighbtns = document.querySelectorAll(".btn-sigh");
var i;

for (i = 0; i < sighbtns.length; i++) {
  sighbtns[i].addEventListener("click", function () {
    let bodyblock = document.querySelector(".mainbody");
    bodyblock.classList.add("noscroll");
    let modal = document.querySelector(".modal");
    modal.classList.add("activemodal");
    let btnsuccesssigh = document.querySelector(".btn-successsigh");

    let modalclose = document.querySelectorAll(".modal__close");
    var i;
    for (i = 0; i < modalclose.length; i++) {
      modalclose[i].addEventListener("click", function () {
        modal.classList.remove("activemodal");
        bodyblock.classList.remove("noscroll");
      });
    }

    btnsuccesssigh.addEventListener("click", function () {
      let modalsuccess = document.querySelector(".modal__successsigh");
      modalsuccess.classList.add("activesuccess");

      setTimeout(function () {
        modalsuccess.classList.remove("activesuccess");
        modal.classList.remove("activemodal");
        bodyblock.classList.remove("noscroll");
      }, 2500);
    });
  });
}

// modal reviews
if (document.querySelector(".main").classList.contains("mainreview")) {
  let bntreview = document.querySelector(".newsigh");

  bntreview.addEventListener("click", function (event) {
    let bodyblock = document.querySelector(".mainbody");
    bodyblock.classList.add("noscroll");
    let modalreview = document.querySelector(".modal__review");
    event.preventDefault();
    modalreview.classList.add("activemodal");
    let modalreviewclose = document.querySelector(".closereview");
    modalreviewclose.addEventListener("click", function () {
      modalreview.classList.remove("activemodal");
      bodyblock.classList.remove("noscroll");
    });
    let btnsellreview = document.querySelector(".btnsellreview");
    btnsellreview.addEventListener("click", function () {
      modalreview.classList.remove("activemodal");
      bodyblock.classList.remove("noscroll");
    });
  });
}

//  slider team

let teamSlider = $("#teamSlider");

teamSlider.slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
});

// reviews slider

let reviewsSlider = $("#reviewsSlider");

reviewsSlider.slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 989,
      settings: {
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: 575,
      settings: {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      },
    },
  ],
});

// featurecat links

var featurecatLinks = document.querySelectorAll(".featurescat__link");
var i;

for (i = 0; i < featurecatLinks.length; i++) {
  featurecatLinks[i].addEventListener("click", function () {
    let navlastlink = document.querySelector(".featurescat__lastlink");
    navlastlink.innerHTML = this.innerHTML;

    Array.from(featurecatLinks).forEach((item) => {
      item.classList.remove("activefeature");
    });

    navlastlink.innerHTML = this.innerHTML;
    this.classList.add("activefeature");
  });
}

// burger

let header = document.querySelector(".header");
let burger = document.querySelector(".burger");

burger.addEventListener("click", function () {
  header.classList.toggle("activenav");
  burger.classList.toggle("activeburger");
});

// features links for mobile

if (document.querySelector(".main").classList.contains("mainfeatures")) {
  var featuresLinks = document.querySelector(".featurescat__links");
  featuresLinks.addEventListener("click", function (event) {
    event.preventDefault();
    featuresLinks.classList.toggle("activelinks");
  });
}
