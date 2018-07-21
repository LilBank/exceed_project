
$(function () {
    var recognition = new webkitSpeechRecognition()

    $("#start").on('click', function () {

        if (window.hasOwnProperty('webkitSpeechRecognition')) {

            recognition.continuous = true;
            recognition.interimResults = false;

            recognition.lang = "en-US";
            recognition.lang = "th-TH"
            recognition.start();

            recognition.onresult = function (e) {
                console.log(e)
                $("#transcript").val(e.results[0][0].transcript)
                //  recognition.stop();
            };

            recognition.onerror = function (e) {
                console.log(e)
                //  recognition.stop();
            }

        }
    })

    $("#stop").on('click', function () {
        recognition.stop();
    })

})