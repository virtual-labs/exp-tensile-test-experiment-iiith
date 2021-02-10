"use strict";
var app = {
    main   : function () {
        "use strict";
        app.execute();
    },
    execute: function () {

        if ($('.scrumboard').length) {
            var dragulaObj = dragula($('.scrumboard-body').toArray(), {}).on('drag', function () {
            }).on('drop', function (el) {
            }).on('over', function (el, container) {
                $(container).closest('.scrumboard-body').addClass('over');
            }).on('out', function (el, container, source) {

                var new_pipeline_body = $(container).closest('.scrumboard-body');
                new_pipeline_body.removeClass('over');
                var old_pipeline_body = $(source).closest('.scrumboard-body');
            });
        }

        var e = $(".sm_scrumboard .col-md-3");
        $(e).sortable({
            handle     : ".scrumboard-header",
            connectWith: ".sm_scrumboard .col-md-3",
            update     : function (event, ui) {
                $(event.target).append($(ui.item[ 0 ]).next()[ 0 ]);
                $($(ui.item[ 0 ]).next()[ 0 ]).remove();

            },
        })

    },
};
window.addEventListener('load', function () {
    app.main();
});