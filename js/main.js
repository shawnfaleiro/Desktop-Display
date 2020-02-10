setTimeout(function(){
   window.location.reload(1);
}, 500000);



var counter = 1;
var auto_refresh = setInterval(
function () {
   
    $('#mydiv2').html;
  
}, 1000);

var counter = 1;
var auto_refresh = setInterval(
function () {
   
    $('#mydiv3').html;
    
}, 1000);

// Source For drag and drop https://www.w3schools.com/html/html5_draganddrop.asp

dragElement(document.getElementById("mydiv"));
dragElement(document.getElementById("mydiv2"));
dragElement(document.getElementById("mydiv3"));
dragElement(document.getElementById("mydiv4"));
dragElement(document.getElementById("mydiv5"));
dragElement(document.getElementById("mydiv6"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}



function myFunction() {
  var x = document.getElementById("show");
  if (x.style.display === "none") {
    x.style.display = "block";
      document.getElementById("timestatus").innerHTML ="Hide";
  } else {
    x.style.display = "none";
      document.getElementById("timestatus").innerHTML ="Show";
  }
}


function showHideEvents() {
  var x = document.getElementById("showHideEvents");
  if (x.style.display === "none") {
    x.style.display = "block";
      
      document.getElementById("eventsStatus").innerHTML ="Hide";

  } else {
    x.style.display = "none";
      document.getElementById("eventsStatus").innerHTML ="Show";
  }
}

function showHidePicture() {
  var x = document.getElementById("showHidePicture");
  if (x.style.display === "none") {
    x.style.display = "block";
      document.getElementById("picturestatus").innerHTML ="Hide";
  } else {
    x.style.display = "none";
      document.getElementById("picturestatus").innerHTML ="Show";
  }
}

function showHideBattery() {
  var x = document.getElementById("showHideBattery");
  if (x.style.display === "none") {
    x.style.display = "block";
      document.getElementById("batteryStatus").innerHTML ="Hide" ;
  } else {
    x.style.display = "none";
      document.getElementById("batteryStatus").innerHTML ="Show";
  }
}

function showHideWeather() {
  var x = document.getElementById("showHideWeather");
  if (x.style.display === "none") {
    x.style.display = "block";
      document.getElementById("weatherStatus").innerHTML ="Hide";
  } else {
    x.style.display = "none";
      document.getElementById("weatherStatus").innerHTML ="Show";
  }
}

function showHideShoppingList() {
  var x = document.getElementById("showHideShoppingList");
  if (x.style.display === "none") {
    x.style.display = "block";
      document.getElementById("ShoppingStatus").innerHTML ="Hide";
  } else {
    x.style.display = "none";
      document.getElementById("ShoppingStatus").innerHTML ="Show";
  }
}

function showHideNews() {
  var x = document.getElementById("showHideNews");
  if (x.style.display === "none") {
    x.style.display = "block";
      document.getElementById("newsStatus").innerHTML ="Hide";
  } else {
    x.style.display = "none";
      document.getElementById("newsStatus").innerHTML ="Show";
  }
}



$('#showHideNews').click(
function hidediv() {
  var x = document.getElementById("hiddenDiv");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
    );
$("button").click(function(){
    var color = clicked ? 'red' : 'blue';
    $(this).css('background-color', color);
    clicked = !clicked;
});
