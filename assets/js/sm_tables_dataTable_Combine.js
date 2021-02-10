"use strict";
var app = {
    main   : function () {
        "use strict";
        app.execute();
    },
    execute: function () {
        $("#data-table").DataTable({
            dom       : "lBfrtip",
            buttons   : [ {
                extend   : "copy",
                className: "btn-sm btn-primary"
            }, {
                extend   : "csv",
                className: "btn-sm btn-primary"
            }, {
                extend   : "excel",
                className: "btn-sm btn-primary"
            }, {
                extend   : "pdf",
                className: "btn-sm btn-primary"
            }, {
                extend   : "print",
                className: "btn-sm btn-primary"
            } ],
            responsive: true,
            autoFill  : true,
            colReorder: true,
            keys      : true,
            rowReorder: true,
            select    : true
        });
    },
};
window.addEventListener('load', function () {
    app.main();
});