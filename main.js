$(window).scroll(function() {
    if ($(window).scrollTop() >= 100) {
        $("#navbarSection").css("opacity", "10");
        $("#navbarSection").css("transition", "all 1s");
            }
    });
var linkOne = document.getElementById("navbarLinkOne");
var linkTwo = document.getElementById("navbarLinkTwo");
var linkThree = document.getElementById("navbarLinkThree");
var linkFour = document.getElementById("navbarLinkFour");





function rainbow() {
    linkOne.classList.add("rainbow-text");
};

function rainNo() {
    linkOne.classList.remove("rainbow-text");
};

function rainbow2() {
    linkTwo.classList.add("rainbow-text");
};

function rainNo2() {
    linkTwo.classList.remove("rainbow-text");
};


function rainbow3() {
    linkThree.classList.add("rainbow-text");
};

function rainNo3() {
    linkThree.classList.remove("rainbow-text");
};



function rainbow4() {
    linkFour.classList.add("rainbow-text");
};

function rainNo4() {
    linkFour.classList.remove("rainbow-text");
};

var heroLogo = document.getElementById("heroLogo");
var heroText = document.getElementById("heroText");

var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml2 .letter',
    scale: [6,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 3950,
    delay: (el, i) => 70*i
  });

  anime.timeline({loop: false})
  .add({
    targets: '.ml5 .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 1700
  }).add({
    targets: '.ml5 .line',
    duration: 700,
    easing: "easeOutExpo",
    translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
  }).add({
    targets: '.ml5 .ampersand',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5 .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 800,
    offset: '-=300'
  }).add({
    targets: '.ml5 .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 800,
    offset: '-=600'
  });