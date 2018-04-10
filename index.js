(function() {

  'use strict';

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

})();

var countDownDate = new Date("Apr 22, 2018 12:00:00").getTime();

  var countDownFunction = setInterval(function() {
      var now = new Date().getTime();


      var distance = countDownDate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("timer").innerHTML = "Time Left\n" + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
      if(distance > (1000 * 60 * 60 * 24)) {
        document.getElementById("timer").innerHTML = "Countdown Till Hackathon!" + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
      }
      if(distance < 0) {
        clearInterval(countDownFunction);
        document.getElementById("demo").innerHTML = "HACKING OVER";
      }

  },1000);