"use strict";
var app = {
    main   : function () {
        "use strict";
        app.execute();
    },
    execute: function () {
        $("#data-table").DataTable({
            responsive: true,
            rowReorder: true
        });
    },
};
window.addEventListener('load', function () {
    app.main();
});