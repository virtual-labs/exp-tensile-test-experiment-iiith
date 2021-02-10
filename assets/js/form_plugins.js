"use strict";
var app = {
    main         : function () {
        "use strict";
        app.execute();
        app.color_picker();
        app.mased_input();
        app.auto_complete();
        app.clip_board();
        app.ion_range();
        app.range_slider();
        app.tag_input();
    },
    execute      : function () {
        $.fn._datepicker = function () {
            $('.date_picker').datepicker({
                autoclose     : !0,
                todayBtn      : true,
                todayHighlight: true,
            });
        };
        $.fn._daterange_picker = function () {
            $(".daterange_picker").datepicker({
                autoclose     : !0,
                todayBtn      : true,
                todayHighlight: true,
            })
        };
        $.fn._format_date_picker = function () {
            $(".format_date_picker").datepicker({
                autoclose     : !0,
                todayBtn      : true,
                todayHighlight: true,
                format        : "dd/mm/yyyy"
            })
        };
        $.fn._date_picker_disable_future = function () {
            var EndDate = new Date();
            $('.date_picker_disable_future').datepicker({
                endDate       : EndDate,
                autoclose     : !0,
                todayBtn      : true,
                todayHighlight: true,
            });
        };
        $.fn._date_picker_disable_past = function () {
            var StartDate = new Date();
            $('.date_picker_disable_past').datepicker({
                startDate     : StartDate,
                autoclose     : !0,
                todayBtn      : true,
                todayHighlight: true,
            });
        };
        $.fn._date_picker_start_view = function () {
            $('.date_picker_start_view').datepicker({
                startView     : 2,
                autoclose     : !0,
                todayBtn      : true,
                todayHighlight: true,
            });
        };
        $.fn._date_picker_clear = function () {
            $('.date_picker_clear').datepicker({
                clearBtn      : true,
                autoclose     : !0,
                todayBtn      : true,
                todayHighlight: true,
            });
        };
        $.fn._date_picker_multidate = function () {
            $('.date_picker_multidate').datepicker({
                multidate     : true,
                todayBtn      : true,
                todayHighlight: true,
            });
        };
        $.fn._date_picker_calendarweeks = function () {
            $('.date_picker_calendarweeks').datepicker({
                calendarWeeks : true,
                autoclose     : !0,
                todayBtn      : true,
                todayHighlight: true,
            });
        };
        $.fn._date_inline = function () {
            $('.date_inline').datepicker({
                calendarWeeks : true,
                autoclose     : !0,
                todayBtn      : true,
                todayHighlight: true,
            });
        };
        $.fn._date_time_picker = function () {
            $('.date_time_picker').datetimepicker({
                autoclose: !0,
            });
        };
        $.fn._time_picker = function () {
            $('.time_picker').datetimepicker({
                format      : "HH:ii P",
                showMeridian: true,
                autoclose   : true,
                startView   : 1
            });
        };
        $.fn._positioning_time_picker = function () {
            $('.positioning_time_picker').datetimepicker({
                pickerPosition: "top-left"
            });
        };
        $.fn._date_time_mirror_field = function () {
            $('.date_time_mirror_field').datetimepicker({
                format    : "dd MM yyyy - hh:ii",
                linkField : "mirror_field",
                linkFormat: "yyyy-mm-dd hh:ii",
                autoclose : true
            });
        };
        $.fn._date_time_inline = function () {
            $('.date_time_inline').datetimepicker({
                format    : "dd MM yyyy - hh:ii",
                linkFormat: "yyyy-mm-dd hh:ii",
            });
        };
        $.fn._date_range_picker = function () {
            $(".date_range_picker").daterangepicker({
                opens         : "right",
                format        : "MM/DD/YYYY",
                pickerPosition: "top-left",
                separator     : " to ",
                startDate     : moment().subtract("days", 29),
                endDate       : moment(),
                minDate       : "01/01/2012",
                maxDate       : "12/31/2018"
            }, function (e, t) {
                $(".date_range_picker input").val(e.format("MMMM D, YYYY") + " - " + t.format("MMMM D, YYYY"))
            });
        };
        $.fn._advance_daterange = function () {
            $(".advance_daterange span").html(moment().subtract("days", 29).format("MMMM D, YYYY") + " - " + moment().format("MMMM D, YYYY")),
                $(".advance_daterange").daterangepicker({
                    format             : "MM/DD/YYYY",
                    startDate          : moment().subtract(29, "days"),
                    endDate            : moment(),
                    dateLimit          : {
                        days: 60
                    },
                    showDropdowns      : !0,
                    showWeekNumbers    : !0,
                    timePicker         : !1,
                    timePickerIncrement: 1,
                    timePicker12Hour   : !0,
                    ranges             : {
                        Today         : [ moment(), moment() ],
                        Yesterday     : [ moment().subtract(1, "days"), moment().subtract(1, "days") ],
                        "Last 7 Days" : [ moment().subtract(6, "days"), moment() ],
                        "Last 30 Days": [ moment().subtract(29, "days"), moment() ],
                        "This Month"  : [ moment().startOf("month"), moment().endOf("month") ],
                        "Last Month"  : [ moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month") ]
                    },
                    opens              : "right",
                    drops              : "down",
                    buttonClasses      : [ "btn", "btn-sm" ],
                    applyClass         : "btn-primary",
                    cancelClass        : "btn-default",
                    separator          : " to ",
                    locale             : {
                        applyLabel      : "Submit",
                        cancelLabel     : "Cancel",
                        fromLabel       : "From",
                        toLabel         : "To",
                        customRangeLabel: "Custom",
                        daysOfWeek      : [ "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa" ],
                        monthNames      : [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
                        firstDay        : 1
                    }
                }, function (e, t, a) {
                    $(".advance_daterange span").html(e.format("MMMM D, YYYY") + " - " + t.format("MMMM D, YYYY"))
                });
        };
        $.fn._select2 = function () {
            $(".select_2").select2();
        };
        $.fn._select_2_multiple = function () {
            $(".select_2_multiple").select2({
                placeholder: "Multiple Select"
            });
        };
        $.fn._select_2_search_starts = function () {
            $(".select_2_search_starts").select2({
                placeholder: "Search from Starting letter",
                matcher    : function (params, data) {
                    if ($.trim(params.term) === '') {
                        return data;
                    }
                    if (data.text.toLowerCase().startsWith(params.term.toLowerCase())) {
                        var modifiedData = $.extend({}, data, true);
                        return modifiedData;
                    }
                    return null;
                }
            });
        };
        $.fn._select_2_limit = function () {
            $(".select_2_limit").select2({
                placeholder           : "Limit Selection",
                maximumSelectionLength: 2
            });
        };
        $.fn._select_2_clear = function () {
            $(".select_2_clear").select2({
                placeholder: 'Clearable Select',
                allowClear : true
            });
        };
        $.fn._select_2_hide_search = function () {
            $(".select_2_hide_search").select2({
                minimumResultsForSearch: Infinity
            });
        };
        $.fn._duallistbox = function () {
            $(".duallistbox").bootstrapDualListbox();
            $("#duallistbox").submit(function () {
                alert($('[name="duallistbox_demo1[]"]').val());
                return false;
            });
        };
        if ($(".date_picker").length > 0) {
            $()._datepicker();
        }
        if ($(".daterange_picker").length > 0) {
            $()._daterange_picker();
        }
        if ($(".format_date_picker").length > 0) {
            $()._format_date_picker();
        }
        if ($(".date_picker_disable_future").length > 0) {
            $()._date_picker_disable_future();
        }
        if ($(".date_picker_disable_past").length > 0) {
            $()._date_picker_disable_past();
        }
        if ($(".date_picker_start_view").length > 0) {
            $()._date_picker_start_view();
        }
        if ($(".date_picker_clear").length > 0) {
            $()._date_picker_clear();
        }
        if ($(".date_picker_multidate").length > 0) {
            $()._date_picker_multidate();
        }
        if ($(".date_picker_calendarweeks").length > 0) {
            $()._date_picker_calendarweeks();
        }
        if ($(".date_inline").length > 0) {
            $()._date_inline();
        }
        if ($(".date_time_picker").length > 0) {
            $()._date_time_picker();
        }
        if ($(".time_picker").length > 0) {
            $()._time_picker();
        }
        if ($(".positioning_time_picker").length > 0) {
            $()._positioning_time_picker();
        }
        if ($(".date_time_mirror_field").length > 0) {
            $()._date_time_mirror_field();
        }
        if ($(".date_time_inline").length > 0) {
            $()._date_time_inline();
        }
        if ($(".date_range_picker").length > 0) {
            $()._date_range_picker();
        }
        if ($(".advance_daterange").length > 0) {
            $()._advance_daterange();
        }
        if ($(".select_2").length > 0) {
            $()._select2();
        }
        if ($(".select_2_multiple").length > 0) {
            $()._select_2_multiple();
        }
        if ($(".select_2_search_starts").length > 0) {
            $()._select_2_search_starts();
        }
        if ($(".select_2_limit").length > 0) {
            $()._select_2_limit();
        }
        if ($(".select_2_clear").length > 0) {
            $()._select_2_clear();
        }
        if ($(".select_2_hide_search").length > 0) {
            $()._select_2_hide_search();
        }
        if ($(".duallistbox").length > 0) {
            $()._duallistbox();
        }
    },
    color_picker : function () {
        $("#default").colorpicker();
        $('#cp2').colorpicker();
        $('#format').colorpicker({format: "rgba"});
        $('#horizontal').colorpicker({horizontal: true});
        $('#alpha').colorpicker({useAlpha: false});
        $('#hash').colorpicker({useHashPrefix: false});
    },
    mased_input  : function () {
        $("#masked-input-date").mask("99/99/9999");
        $("#masked-input-time").mask("99:99:99");
        $("#masked-input-datetime").mask("99/99/9999 99:99:99");
        $("#masked-input-phone").mask("(999) 999-9999");
        $("#masked-input-tid").mask("99-9999999");
        $("#masked-input-ssn").mask("999-99-9999");
        $("#masked-input-pno").mask("aaa-9999-a");
        $("#masked-input-pkey").mask("a*-999-a999");
        $("#masked-input-card").mask("9999-9999-9999-9999");
        $("#masked-input-ip").mask("999.999.999.999");
    },
    auto_complete: function () {
        var availableTags = [
            'ActionScript',
            'AppleScript',
            'Asp',
            'BASIC',
            'C',
            'C++',
            'Clojure',
            'COBOL',
            'ColdFusion',
            'Erlang',
            'Fortran',
            'Groovy',
            'Haskell',
            'Java',
            'JavaScript',
            'Lisp',
            'Perl',
            'PHP',
            'Python',
            'Ruby',
            'Scala',
            'Scheme'
        ];
        $('#jquery-autocomplete').autocomplete({
            source: availableTags
        });
    },
    clip_board   : function () {
        var clipboard = new Clipboard('.btn');

        clipboard.on('success', function (e) {
            $(e.trigger).tooltip({
                title    : 'Copied',
                placement: 'top'
            });
            $(e.trigger).tooltip('show');
            setTimeout(function () {
                $(e.trigger).tooltip('dispose');
            }, 500);
        });
    },
    ion_range    : function () {
        $('#default_rangeSlider').ionRangeSlider({
            min       : 0,
            max       : 2845,
            type      : 'double',
            prefix    : "$",
            maxPostfix: "+",
            prettify  : false,
            hasGrid   : true
        });
        $('#customRange_rangeSlider').ionRangeSlider({
            min    : 1000,
            max    : 100000,
            from   : 45800,
            to     : 89546,
            type   : 'double',
            step   : 500,
            postfix: " $",
            hasGrid: true
        });
        $('#customValue_rangeSlider').ionRangeSlider({
            values : [
                'Jan', 'Feb', 'Mar',
                'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep',
                'Oct', 'Nov', 'Dec'
            ],
            type   : 'single',
            hasGrid: true
        });
    },
    range_slider : function () {
        if ($(".input-slider-container")[ 0 ]) {
            $('.input-slider-container').each(function () {

                var slider = $(this).find('.input-slider');
                var sliderId = slider.attr('id');
                var minValue = slider.data('range-value-min');
                var maxValue = slider.data('range-value-max');

                var sliderValue = $(this).find('.range-slider-value');
                var sliderValueId = sliderValue.attr('id');
                var startValue = sliderValue.data('range-value-low');

                var c = document.getElementById(sliderId),
                    d = document.getElementById(sliderValueId);

                noUiSlider.create(c, {
                    start: [ parseInt(startValue) ],
                    //step: 1000,
                    range: {
                        'min': [ parseInt(minValue) ],
                        'max': [ parseInt(maxValue) ]
                    }
                });

                c.noUiSlider.on('update', function (a, b) {
                    //alert(b)
                    d.textContent = a[ b ];
                });
            })
        }
        if ($("#input-slider-range")[ 0 ]) {
            var c = document.getElementById("input-slider-range"),
                d = document.getElementById("input-slider-range-value-low"),
                e = document.getElementById("input-slider-range-value-high"),
                f = [ d, e ];

            noUiSlider.create(c, {
                start  : [ parseInt(d.getAttribute('data-range-value-low')), parseInt(e.getAttribute('data-range-value-high')) ],
                connect: !0,
                range  : {
                    min: parseInt(c.getAttribute('data-range-value-min')),
                    max: parseInt(c.getAttribute('data-range-value-max'))
                }
            }), c.noUiSlider.on("update", function (a, b) {
                f[ b ].textContent = a[ b ]
            })
        }
    },
    tag_input    : function () {
        var cities = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            prefetch      : 'assets/plugins/bootstrap-tagsinput/cities.json'
        });
        cities.initialize();
        var citynames = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            prefetch      : {
                url   : 'assets/plugins/bootstrap-tagsinput/citynames.json',
                filter: function (list) {
                    return $.map(list, function (cityname) {
                        return {name: cityname};
                    });
                }
            }
        });
        citynames.initialize();
        $('.typeaheadjs').tagsinput({
            typeaheadjs: {
                name      : 'citynames',
                displayKey: 'name',
                valueKey  : 'name',
                source    : citynames.ttAdapter()
            }
        });
        var elt = $('.example_objects_as_tags');
        elt.tagsinput({
            itemValue  : 'value',
            itemText   : 'text',
            typeaheadjs: {name: 'cities', displayKey: 'text', source: cities.ttAdapter()}
        });
        elt.tagsinput('add', {"value": 1, "text": "Amsterdam", "continent": "Europe"});
        elt.tagsinput('add', {"value": 4, "text": "Washington", "continent": "America"});
        elt.tagsinput('add', {"value": 7, "text": "Sydney", "continent": "Australia"});
        elt.tagsinput('add', {"value": 10, "text": "Beijing", "continent": "Asia"});
        elt.tagsinput('add', {"value": 13, "text": "Cairo", "continent": "Africa"});
        /** Categorizing tags */ var elt = $('.example_tagclass');
        elt.tagsinput({
            tagClass   : function (item) {
                switch (item.continent) {
                    case 'Europe':
                        return 'badge badge-primary';
                    case 'America':
                        return 'badge badge-danger badge-important';
                    case 'Australia':
                        return 'badge badge-primary';
                    case 'Africa':
                        return 'badge badge-purple';
                    case 'Asia':
                        return 'badge badge-warning';
                }
            },
            itemValue  : 'value',
            itemText   : 'text',
            typeaheadjs: [ {hint: true, highlight: true, minLength: 2}, {
                name      : 'cities',
                displayKey: 'text',
                source    : cities.ttAdapter()
            } ]
        });
        elt.tagsinput('add', {"value": 1, "text": "Amsterdam", "continent": "Europe"});
        elt.tagsinput('add', {"value": 4, "text": "Washington", "continent": "America"});
        elt.tagsinput('add', {"value": 7, "text": "Sydney", "continent": "Australia"});
        elt.tagsinput('add', {"value": 10, "text": "Beijing", "continent": "Asia"});
        elt.tagsinput('add', {"value": 13, "text": "Cairo", "continent": "Africa"});
        $(".twitter-typeahead").css('display', 'inline');
    }
};
window.addEventListener('load', function () {
    app.main();
});