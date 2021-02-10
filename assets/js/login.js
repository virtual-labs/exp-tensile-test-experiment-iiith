"use strict";
var app = {
    main   : function () {
        "use strict";
        app.execute();
    },
    execute: function () {
        $.backstretch([
            "https://via.placeholder.com/1920x1080.png?text=http://perfectin.co/",
            "https://via.placeholder.com/1920x1080.png?text=http://perfectin.co/",
            "https://via.placeholder.com/1920x1080.png?text=http://perfectin.co/",
            "https://via.placeholder.com/1920x1080.png?text=http://perfectin.co/",
        ], {duration: 1000, fade: 900});
    },
};
window.addEventListener('load', function () {
    app.main();
});