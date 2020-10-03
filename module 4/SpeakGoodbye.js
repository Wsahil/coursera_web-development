(function (window) {                                //step 6
    var byeSpeaker = {};                            //step 7
    var speakWord = "Goodbye"
    byeSpeaker.speak = function (name) {            //step 8
        console.log(speakWord +" " + name);
    }
    
    window.byeSpeaker = byeSpeaker;                 //step 9
})(window);