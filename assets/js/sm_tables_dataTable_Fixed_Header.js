"use strict";
var app = {
    main   : function () {
        "use strict";
        app.execute();
    },
    execute: function () {
        $("#data-table").DataTable({
            lengthMenu : [ 40, 60, 80 ],
            fixedHeader: {
                header      : !0
            },
            responsive : !0
        });
    },
};
window.addEventListener('load', function () {
    app.main();
});