
"use strict";
var app = {
    main   : function () {
        "use strict";
        app.execute();
    },
    execute: function () {
        $("#data-table").DataTable({
            responsive: true
        });
    },
};
window.addEventListener('load', function () {
    app.main();
});