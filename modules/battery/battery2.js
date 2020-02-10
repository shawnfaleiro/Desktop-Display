navigator.getBattery().then(function (battery) {
  
    const status = document.getElementById('status');  
  
    function updateAllBatteryInfo() {
        
       
        


    }
    updateAllBatteryInfo();

    battery.addEventListener('chargingchange', () => {
        updateChargeInfo();
    });



    
    var batterystat =  + battery.level * 100;
    console.log(batterystat);
    
    if (batterystat > 99) {
        status.innerHTML += "<img src=\"modules/battery/full-battery.svg\" width=\"100px\" height=\"50px\">" ;
    }
    
    else if (batterystat > 70) {
        status.innerHTML += "<img src=\"modules/battery/80-battery.svg\" width=\"100px\" height=\"50px\">" ;  
    }
    
    else if (batterystat > 50){
        status.innerHTML += "<img src=\"modules/battery/60-battery.svg\" width=\"100px\" height=\"50px\">" ;
    }
    
     else if (batterystat > 20){
        status.innerHTML += "<img src=\"modules/battery/40-battery.svg\" width=\"100px\" height=\"50px\">" ;
    }
         else if (batterystat > 10){
        status.innerHTML += "<img src=\"modules/battery/20-battery.svg\" width=\"100px\" height=\"50px\">" ;
    }
    
    else{
        
        status.innerHTML += "Battery dying: " +  "<br />";
    }
    

    

    battery.addEventListener('chargingtimechange', () => {
        updatebatterystat();
    });


});

$('head').append('<link rel="stylesheet" type="text/css" href="modules/news/style.css">');
