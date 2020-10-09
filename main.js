const countDownDate = new Date("May 13, 2023 24:00:00").getTime();
let x = setInterval(function() {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  if(hours<10){
      hours = '0' + hours
  }
  if(minutes<10){
      minutes = '0' + minutes
  }
  if(seconds<10){
      seconds = '0' + seconds
  }
  if(hours==0){
      hours = '00'
  }
  if(minutes==0){
    minutes = '00'
  }
  if(seconds==0){
    seconds = '00'
  }

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
     
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "1000 Days Challange Passed!";
  }
}, 1000);