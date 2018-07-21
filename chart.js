let lineY = 0;
let lineX = 1;
let adver = 0;
let count = 1;
let countBuzzer = 0;
let startTime = 0;
let timer = false;
let startBuzzer = [];
let responseBuzzer = '0';
var chart;
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
    createChart();

    buttonStart.onclick = function() {
    
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
        timer = true;

     }

    buttonStop.onclick = function () {
        
        clearInterval(Interval);
        timer = false;
    }


    buttonReset.onclick = function () {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        startBuzzer = [];
        countBuzzer = 0;
        createChart();
        timer = false;
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

    function createChart() {
        chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            axisY: {
                title: "Units Sound",
                valueFormatString: "#,,.",
            },
            data: [{
                yValueFormatString: "#,###",
                xValueFormatString: "YYYY",
                type: "spline",
                dataPoints: []
            }]
        });
    }

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
                if(response !== '0' && countBuzzer !== 0){
                    chart.options.data[0].dataPoints.push({ x: countBuzzer, y: a });
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
                
                if(response !== responseBuzzer && timer === true){
                    startBuzzer.push({ x: startTime, y: countBuzzer+2});
                    startTime = countBuzzer+2;
                    console.log(startBuzzer);
                    responseBuzzer = response;
                }
                
            }
        });

    }, 1000);

