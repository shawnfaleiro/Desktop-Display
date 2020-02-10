var today = new Date();
var formatOptions = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

document.getElementById("date").innerHTML = (today.toLocaleDateString('en-US', formatOptions));


   
  // add a zero in front of numbers<10
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
 
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML = h + ":" + m + "<sup>" + s + "</sup>" ;
    
  t = setTimeout(function() {
    startTime()
  }, 500);
}
startTime();



$('head').append('<link rel="stylesheet" type="text/css" href="modules/time/style.css">');