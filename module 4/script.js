(function (window) {                                            //step 1
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    for (var i in names) {                                      //step 10
        var firstletter = ((names[i]).charAt(0)).toLowerCase(); //step 11

        if (firstletter === 'j') {                              //step 12
            window.byeSpeaker.speak(names[i]);
        } else {
            window.helloSpeaker.speak(names[i]);
        }
    }
})(window);