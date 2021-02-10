"use strict";
var app = {
    main   : function () {
        "use strict";
        app.execute();
    },
    execute: function () {
        $("#data-table").DataTable({
            ajax          : "assets/plugins/DataTables/json/scroller-demo.json",
            deferRender   : true,
            scrollY       : 700,
            scrollCollapse: true,
            scroller      : true,
            responsive    : true
        });
    },
};
window.addEventListener('load', function () {
    app.main();
});