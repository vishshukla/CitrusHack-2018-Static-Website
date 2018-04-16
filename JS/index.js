/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'JS/particles.js/particles.json', function() {
  console.log('callback - particles.js config loaded');
});



// TIMER 

var countDownDate = new Date("Apr 22, 2018 12:00:00").getTime();
  var countDownFunction = setInterval(function() {
      var now = new Date().getTime();

      var distance = countDownDate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("timer").innerHTML = hours + " HOURS - " + minutes + " MIN - " + seconds + " SEC";

  },1000);