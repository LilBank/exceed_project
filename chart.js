let lineY = 0;
let lineX = 1;
let adver = 0;
let count = 1;
var i;


window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        axisY: {
            title: "Units Sound",
            valueFormatString: "#0,,.",
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

        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th/exceed/api/wongpalm-Sound_level/view",
            data: "data",
            dataType: "text",
            success: function (response) {
                let a = parseInt(response)
                console.log(response);
                if(response !== '0' ){
                    count = count +1;
                    chart.options.data[0].dataPoints.push({ x: count, y: a });
                    console.log(response);
                    chart.render();
                }
            },
            fall: function(response){
                console.log(response)
            }
        });

    }, 1000);




}