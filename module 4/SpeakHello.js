(function (window) {                            //step 2
    var helloSpeaker = {};                      //step 3
    var speakWord = "Hello";
    helloSpeaker.speak = function(name) {       //step 4
        console.log(speakWord + " "+ name);
    };
    
    window.helloSpeaker = helloSpeaker;         //step 5

})(window);