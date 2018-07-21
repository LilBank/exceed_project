
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