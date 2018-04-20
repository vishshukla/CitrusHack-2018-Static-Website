/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'JS/particles/particles.json', function() {
  console.log('callback - particles.js config loaded');
});



// TIMER

var hackingStarts = new Date("Apr 21, 2018 09:00:00").getTime();

  setInterval(function() {
    var fireFrame = document.getElementById("fire").getAttribute("frame");

    var now = new Date().getTime();

    var distance = hackingStarts - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if(days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
      var hackingEnds = new Date("Apr 22, 2018 09:00:00").getTime();

      now = new Date().getTime();

      distance = hackingEnds - now;
      days = Math.floor(distance / (1000 * 60 * 60 * 24));
      hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if(days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
        document.getElementById("timer").innerHTML = "0" + " HOURS - " + "0" + " MIN - " + "0" + " SEC";
      }
      else {
        document.getElementById("timer").innerHTML =  hours + " HOURS - " + minutes + " MIN - " + seconds + " SEC";
      }
    }
    else {
      document.getElementById("timer").innerHTML = hours + " HOURS - " + minutes + " MIN - " + seconds + " SEC";
    }

    if (fireFrame == 1) {
      document.getElementById("fire").src = "assets/fire2.png";
      document.getElementById("fire").setAttribute("frame", 2);
    }
    else if (fireFrame == 2) {
      document.getElementById("fire").src = "assets/fire3.png";
      document.getElementById("fire").setAttribute("frame", 3);
    }
    else if (fireFrame == 3) {
      document.getElementById("fire").src = "assets/fire.png";
      document.getElementById("fire").setAttribute("frame", 1);
    }
  },500);
