"use strict";
var app = {
    main   : function () {
        "use strict";
        app.execute();
    },
    execute: function () {
        $("#data-table").DataTable({
            scrollY       : 300,
            scrollX       : true,
            scrollCollapse: true,
            paging        : false,
            fixedColumns  : true
        });
    },
};
window.addEventListener('load', function () {
    app.main();
});