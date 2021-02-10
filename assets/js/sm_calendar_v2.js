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

        $('#calendar').fullCalendar({
            header              : {
                left  : 'month,agendaWeek,agendaDay',
                center: 'title',
                right : 'prev,today,next '
            },
            droppable           : true,
            googleCalendarApiKey: 'AIzaSyCUG2sZcTPj1Q1T5N7xVseqRnCgaOx7uu4',
            events              : {
                googleCalendarId: 'palanivelayudam@gmail.com'
            }
        });
    },
};
window.addEventListener('load', function () {
    app.main();
});