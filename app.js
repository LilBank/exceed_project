$(function () {
    var recognition = new webkitSpeechRecognition()
    let speech = ""
    var forcestop = false

    $("#start").on('click', function () {

        if (window.hasOwnProperty('webkitSpeechRecognition')) {

            recognition.continuous = true;
            recognition.interimResults = false;

            recognition.lang = "en-US";
            recognition.lang = "th-TH"
            recognition.start();

            recognition.onresult = function (e) {
                console.log("onresult")
                console.log(e)
                speech = speech + e.results[0][0].transcript
                console.log(speech)

            };

            recognition.onend = function (e) {
                console.log("onend")
                console.log(e)
                if (forcestop) {
                    forcestop = false
                    $("#transcript").val(speech);
                } else {
                    recognition.start();
                }
            }

            recognition.onerror = function (e) {
                console.log("on error")
                console.log(e)
            }

        } else {
            alert("Must upgrade browser.")
        }
    })

    $("#stop").on('click', function () {
        console.log("stop")
        forcestop = true
        recognition.stop();
    })

})
/*function onoff(){
    currentvalue = document.getElementById('onoff').value;
    if(currentvalue == "Off"){
      document.getElementById("onoff").value="On";
    }else{
      document.getElementById("onoff").value="Off";
    }
  }
let light=0;

  $(function(){
    $.ajax({
        type: "GET",
        url: "http://ecourse.cpe.ku.ac.th/exceed/api/.../view",
        data: "data",
        dataType: "text",
        success: function (response) {
            if (response==='0'){
                light='1'
                }
            
        }
    });



  })
let light=0
if(light==1){
    $("#onoff").html('On')
}
else{
    $("#onoff").html('Off')


}

$(function () {
    $.ajax({
        type: "POST",
        url: "http://ecourse.cpe.ku.ac.th/exceed/api/.../view",
        data: "data",
        dataType: "dataType",
        success: function (response) {
            
        }
    });








})*/

//FinishingPopup
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
    






