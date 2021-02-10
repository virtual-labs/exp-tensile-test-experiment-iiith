"use strict";
var app = {
    main   : function () {
        "use strict";
        app.execute();
    },
    execute: function () {
        $('.summernote').summernote({
            placeholder: 'Hi, this is summernote. Please, write text here! Super simple WYSIWYG editor on Bootstrap',
            height: 250
        });
    },
};
window.addEventListener('load', function () {
    app.main();
});