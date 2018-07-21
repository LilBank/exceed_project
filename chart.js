let lineY = 0;
let lineX = 1;

var i;


window.onload = function () {
    
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: {
            text: "Sound Chart"
        },
        axisY: {
            title: "Units Sound",
            // valueFormatString: "#0.",
                                    
            suffix: "dB",
            stripLines: [{
                value: 436,
                label: "Average"
            }]
        },
        data: [{
            yValueFormatString: "#,### dB",
            xValueFormatString: "YYYY",
            type: "spline",
            dataPoints: [
                {x: lineX, y: lineY},

            ]
        }]
    });
    for (i = 0; i < 4; i++) { 
        lineY = i
        lineX = i
        chart.options.data[0].dataPoints.push({x: lineX, y: lineY});
        // chart.options.data[0].dataPoints.push({y: lineX});    
    }

    

    chart.render();
    }