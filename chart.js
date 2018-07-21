let lineY = 0;
let lineX = 1;
let adver = 0;
let count = 1;
let countBuzzer = 0;
let startBuzzer = [];
let responseBuzzer = '0';

var i;


window.onload = function () {

    var seconds = 00;
    var tens = 00;
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval;

    buttonStart.onclick = function() {
    
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
       
     }

    buttonStop.onclick = function () {
        
        clearInterval(Interval);
    }


    buttonReset.onclick = function () {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        startBuzzer = [];

    }



    function startTimer() {
        tens++;

        if (tens < 9) {
            appendTens.innerHTML = "0" + tens;
        }

        if (tens > 9) {
            appendTens.innerHTML = tens;

        }

        if (tens > 99) {
            console.log('second');
            countBuzzer+=1;
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }

    }


}

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        axisY: {
            title: "Units Sound",
            valueFormatString: "#,,.",
        },
        data: [{
            yValueFormatString: "#,###",
            xValueFormatString: "YYYY",
            type: "spline",
            dataPoints: [
                {x: 1, y: 1}

            ]
        }]
    });

    setInterval(function () {
        // count += 1
        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th/exceed/api/wongpalm-Sound_level/view",
            data: "data",
            dataType: "text",
            success: function (response) {
                
                let a = parseInt(response)
                // console.log(response);
                if(response !== '0' ){
                    chart.options.data[0].dataPoints.push({ x: countBuzzer, y: a });
                    // console.log(response);
                    chart.render();
                }
            },
            fall: function(response){
                console.log(response)
            }
        });


        

        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th/exceed/api/wongpalm-Sound_status/view",
            data: "data",
            dataType: "text",
            success: function (response) {
                
                if(response !== responseBuzzer){
                    startBuzzer.push(countBuzzer);
                    console.log(startBuzzer);
                    responseBuzzer = response;
                }
                
            }
        });

    }, 1000);





function onoff(){
    currentvalue = document.getElementById('onoff').value;
    
    if(currentvalue == "Off"){
      document.getElementById("onoff").value="On";
    }else{
      document.getElementById("onoff").value="Off";
    }

    
  
}
