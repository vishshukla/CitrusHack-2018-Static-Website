/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'JS/particles.js/particles.json', function() {
  console.log('callback - particles.js config loaded');
});



// TIMER 

var countDownDate = new Date("Apr 21, 2018 12:00:00").getTime();

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