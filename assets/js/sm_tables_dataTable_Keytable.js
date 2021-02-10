"use strict";
var app = {
    main   : function () {
        "use strict";
        app.execute();
    },
    execute: function () {
        $("#data-table").DataTable({
            scrollY   : 500,
            paging    : false,
            autoWidth : true,
            keys      : true,
            responsive: true
        });
    },
};
window.addEventListener('load', function () {
    app.main();
});