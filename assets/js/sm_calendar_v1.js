"use strict";
var app = {
    main   : function () {
        "use strict";
        app.execute();
    },
    execute: function () {
        $('#external-events .fc-event').each(function () {
            $(this).data('event', {
                title: $.trim($(this).text()), // use the element's text as the event title
                stick: true, // maintain when user navigates (see docs on the renderEvent method)
                color: ($(this).attr('data-color')) ? $(this).attr('data-color') : ''
            });
            $(this).draggable({
                zIndex        : 999,
                revert        : true,      // will cause the event to go back to its
                revertDuration: 0  //  original position after the drag
            });
        });

        var date = new Date();
        var currentYear = date.getFullYear();
        var currentMonth = date.getMonth() + 1;
        currentMonth = (currentMonth < 10) ? '0' + currentMonth : currentMonth;

        $('#calendar').fullCalendar({
            header      : {
                left  : 'month,agendaWeek,agendaDay',
                center: 'title',
                right : 'prev,today,next '
            },
            droppable   : true, // this allows things to be dropped onto the calendar
            drop        : function () {
                //$(this).remove();
            },
            selectable  : true,
            selectHelper: true,
            select      : function (t, e) {
                var a, r = swal({
                    title           : "Title for " + moment(t._d).format('DD-MM-YYYY'),
                    text            : "Write something interesting...",
                    type            : "input",
                    showCancelButton: true,
                    closeOnConfirm  : false,
                    inputPlaceholder: "Write something..."
                }, function (inputValue) {
                    if (inputValue === false) return false;
                    if (inputValue === "") {
                        swal.showInputError("You need to write something!");
                        return false
                    }
                    (a = {
                        title: inputValue,
                        start: t,
                        end  : e,
                        color: "#9368E9"
                    });
                    swal("Nice!", "You wrote: " + inputValue, "success");
                    $("#calendar").fullCalendar("renderEvent", a, 1);
                    $("#calendar").fullCalendar("unselect");
                });
            },
            editable    : true,
            eventLimit  : true, // allow "more" link when too many events
            events      : [ {
                title: "Event 1",
                start: currentYear + "-" + currentMonth + "-01",
                color: "#797979"
            }, {
                title: "Event 2",
                start: currentYear + "-" + currentMonth + "-07",
                end  : currentYear + "-" + currentMonth + "-07",
                color: "#447DF7"
            }, {
                id   : 999,
                title: "Event 3",
                start: currentYear + "-" + currentMonth + "-09T16:00:00",
                color: "#23CCEF"
            }, {
                id   : 999,
                title: "Event 4",
                start: currentYear + "-" + currentMonth + "-16T16:00:00",
                color: "#87CB16"
            }, {
                title: "Event 5",
                start: currentYear + "-" + currentMonth + "-11",
                end  : currentYear + "-" + currentMonth + "-11",
                color: "#9368E9"
            }, {
                title: "Event 6",
                start: currentYear + "-" + currentMonth + "-12T10:30:00",
                color: "#FFA534"
            }, {
                title: "Event 7",
                start: currentYear + "-" + currentMonth + "-25T12:00:00",
                color: "#FF5221"
            }, {
                title: "Event 8",
                start: currentYear + "-" + currentMonth + "-05T14:30:00",
                color: "#23CCEF"
            }, {
                title: "Event 9",
                start: currentYear + "-" + currentMonth + "-22T17:30:00",
                color: "#9368E9"
            }, {
                title: "Event 10",
                start: currentYear + "-" + currentMonth + "-19T20:00:00",
                color: "#FF5221"
            }, {
                title: "Event 11",
                start: currentYear + "-" + currentMonth + "-13T07:00:00",
                color: "#9368E9"
            }, {
                title: "Event 12 with URL",
                url  : "http://google.com/",
                start: currentYear + "-" + currentMonth + "-03",
                color: "#FF5221"
            } ]
        });
    },
};
window.addEventListener('load', function () {
    app.main();
});