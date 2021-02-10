"use strict";
var app = {
    main   : function () {
        "use strict";
        app.execute();
    },
    execute: function () {

        var table = "";
        table = $('.data_table').DataTable({
            "ajax"          : "assets/php/data.php",
            "fnDrawCallback": function () {

            },
            "initComplete"  : function (settings, json) {
                $($(".details-control")[ 1 ]).trigger("click");
                $($(".details-control")[ 2 ]).trigger("click");
            },
            "columns"       : [ {
                "className"     : 'details-control',
                "orderable"     : false,
                "data"          : null,
                "defaultContent": ''
            },
                {"data": "PNR"},
                {"data": "PNR"},
                {"data": "Name"},
                {"data": "From"}, {"data": "To"}, {"data": "Booktime"}, {"data": "Exp Drop"}, {"data": "Taxi Num"}, {"data": "Action"} ],
            "order"         : [ [ 1, 'asc' ] ]
        });
        table.on('order.dt search.dt', function () {
            table.column(1, {search: 'applied', order: 'applied'}).nodes().each(function (cell, i) {
                cell.innerHTML = i + 1;
            });
        }).draw();
        $('.data_table').on('click', 'td.details-control', function () {
            var tr = $(this).closest('tr');
            var row = table.row(tr);
            if (row.child.isShown()) {
                row.child.hide();
                tr.removeClass('shown');
            } else {
                row.child(app.format(row.data())).show();
                tr.addClass('shown');
            }
        });
    },
    format : function (d) {
        var opt = "";
        opt += '<div class="table-responsive">\n' + '<table class="table table-separate table-extended m-b-0">\n' + '<tbody>\n' + '<tr>\n' + '<td class="text-center">\n' + '<div class="form-check">\n' + '<label class="form-check-label">\n' + '<input class="form-check-input" style="margin-top:  -10px;margin-left: -10px;" type="checkbox">\n' + '<span class="form-check-sign"></span>\n' + '\n' + '</label>\n' + '</div>\n' + '</td>\n' + '<td>\n' + '<div class="user_box">\n' + '<div class="user-with-avatar">\n' + '<img alt="" src="http://via.placeholder.com/128x128">\n' + '</div>\n' + '<div class="user_email">\n' + '<span>\n' + 'Andrew Heston\n' + '</span>\n' + '<span class="f-s-11">\n' + 'andrew.heston@gmail.com\n' + '</span>\n' + '</div>\n' + '</div>\n' + '</td>\n' + '<td>\n' + 'Cool Company\n' + '</td>\n' + '<td>\n' + '201\n' + '</td>\n' + '<td>\n' + '022-1254-5215\n' + '</td>\n' + '<td>\n' + '<span class="badge-danger badge">test tag</span>\n' + '<span class="badge-info badge">another tag</span>\n' + '<span class="badge-success badge">active</span>\n' + '</td>\n' + '<td>\n' + '22-Oct-2017\n' + '</td>\n' + '<td class="text-center">\n' + '<i class="fa fa-ellipsis-h"></i>\n' + '</td>\n' + '</tr>\n' + '<tr>\n' + '<td class="text-center">\n' + '<div class="form-check">\n' + '<label class="form-check-label">\n' + '<input style="margin-top:  -10px;margin-left: -10px;" class="form-check-input" type="checkbox">\n' + '<span class="form-check-sign"></span>\n' + '\n' + '</label>\n' + '</div>\n' + '</td>\n' + '<td>\n' + '<div class="user_box">\n' + '<div class="user-with-avatar">\n' + '<img alt="" src="http://via.placeholder.com/128x128">\n' + '</div>\n' + '<div class="user_email">\n' + '<span>\n' + 'Michel Newton\n' + '</span>\n' + '<span class="f-s-11">\n' + 'michel.newton@gmail.com\n' + '</span>\n' + '</div>\n' + '</div>\n' + '</td>\n' + '<td>\n' + 'Company ABC\n' + '</td>\n' + '<td>\n' + '99\n' + '</td>\n' + '<td>\n' + '1254-022-5215\n' + '</td>\n' + '<td>\n' + '<span class="badge-warning badge">test tag</span>\n' + '<span class="badge-danger badge">in-active</span>\n' + '</td>\n' + '<td>\n' + '05-Dec-2017\n' + '</td>\n' + '<td class="text-center">\n' + '<i class="fa fa-ellipsis-h"></i>\n' + '</td>\n' + '</tr>\n' + '</tbody>\n' + '</table>\n' + '</div>';
        return opt;
    }
};
window.addEventListener('load', function () {
    app.main();
});