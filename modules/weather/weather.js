
if(weather) {
    let bing = "https://www.bing.com/api/maps/mapcontrol?key=Aqg4J-70UeQyreMvepCegFytoz02AKE8pqabmjHhLFVWUl0Anandhe6c0Q_GS7Dr&callback=loadMapScenario";
    const script = document.createElement('script');
    script.src = bing;
    script.setAttribute('async', true);
    script.setAttribute('defer', true);
    document.body.appendChild(script);
}

function loadMapScenario() {
    if (!navigator.geolocation) {
        console.log('Geolocation is not supported by your browser');
        } else {
        console.log('Locating…');
        navigator.geolocation.getCurrentPosition(success, error);
        }
}


function success(position) {
    myLat = position.coords.latitude;
    myLong = position.coords.longitude  ;
    
    
    	fetch ("https://api.openweathermap.org/data/2.5/weather?lat="+myLat+"&lon="+myLong+"&appid=886705b4c1182eb1c69f28eb8c520e20")
	.then(function(file) { return file.json(); })  
    // Convert data to json
	.then(function(now) {
		nowWeather(now);} );

    
    }

function error() {
    console.log('Unable to retrieve your location');
    }

function nowWeather( d ) {
    
    // Convert to celcius
    var celcius = Math.round(parseFloat(d.main.temp)-273.15 );
    var description = d.weather[0].description;
    
    // Calculation for unixcode from system to match with json
    var dawn = new Date(parseFloat(d.sys.sunset)*1000);
    
    var sunrise = new Date(parseFloat(d.sys.sunrise)*1000);
    
    
    // Get time and convert it to unix
    var nowdate = new Date();
    var nowtime = Math.round( (nowdate.getTime())/1000) /1.0 ;
    
    // Display Dawn time
    var dawnHours =  + dawn.getHours();   
    var dawnMinutes = "0" + dawn.getMinutes();
    
    // Display sunrise time
    var sunriseHours =  + sunrise.getHours();   
    var sunriseMinutes = "0" + sunrise.getMinutes();
    
    
    if (d.sys.sunrise > d.sys.sunset ){
        


        
        document.getElementById('suntime').innerHTML =  "<img src=\"modules/weather/images/sunrise.svg\" width=\"50px\" height=\"50px\">" + sunriseHours + ':' + sunriseMinutes.substr(-2) ;
    }
    
    else {
document.getElementById('suntime').innerHTML =  "<img src=\"modules/weather/images/sunset.svg\" width=\"100px\" height=\"50px\">" + dawnHours + ':' + dawnMinutes.substr(-2) ;
    }
    
    
    document.getElementById('description').innerHTML = description;
    
	document.getElementById('temp').innerHTML = celcius + '&deg;'+'c';
    
	document.getElementById('location').innerHTML = d.name;
}
$('head').append('<link rel="stylesheet" type="text/css" href="modules/weather/style.css">');


