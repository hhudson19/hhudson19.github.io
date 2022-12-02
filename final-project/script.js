// get switching on selected drop down option working
// get a random quote to be added to the footer
// those two things fulfill the javascript necessities

// do these things on loading the dom
window.addEventListener('DOMContentLoaded', function() {
  let movieinfo = document.getElementById("section4");
  let xhr = new XMLHttpRequest();
  xhr.addEventListener("load", function() {
    movieinfo.innerHTML = xhr.response;
  });
  xhr.open("GET", "featured.html");
  xhr.send();

  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((quote) => embedQuote(quote.content));
});




function embedQuote(quote) {
  document.getElementById("quote").innerHTML = quote;
}

document.getElementById("pressme").addEventListener("click", function() {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((quote) => embedQuote(quote.content));
});


function updateList(obj) {
  let listSpace = document.getElementById("section4");
  let xhr = new XMLHttpRequest();
  xhr.addEventListener("load", function() {
    listSpace.innerHTML = xhr.response;
  });
  xhr.open("GET", obj.value);
  xhr.send();
}




// below code from: https://tobiasahlin.com/moving-letters/#11
// it is slightly edited to only do once and stay solid at the end
// instead of disappearing
// Wrap every letter in a span
var textWrapper = document.querySelector('.page_title .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|[\w\x27])/g, "<span class='letter'>$&</span>");

anime.timeline(true)
  .add({
    targets: '.page_title .line',
    scaleY: [0, 1],
    opacity: [0.5, 1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.page_title .line',
    translateX: [0, document.querySelector('.page_title .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.page_title .letter',
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i + 1)
  }).add({
    targets: '.page_title',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });