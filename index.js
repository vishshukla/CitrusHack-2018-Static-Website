console.log("IN JS");
var countDownDate = new Date("Apr 22, 2018 12:00:00").getTime();

  var countDownFunction = setInterval(function() {
      var now = new Date().getTime();

      var distance = countDownDate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

      if(distance < 0) {
        clearInterval(countDownFunction);
        document.getElementById("demo").innerHTML = "Time to Choose Your Representatives!";
      }
      


  },1000);