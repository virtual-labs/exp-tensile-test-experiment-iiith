"use strict";
var blue = "#007bff",
    aqua = "#49b6d6",
    green = "#28a745",
    orange = "#ffc107",
    dark = "#2d353c",
    grey = "#b6c2c9",
    purple = "#5856d6",
    red = "#dc3545";
var morrisLineChart = function () {
        "use strict";
        $(window).on("load", function () {
            var options = {
                legend: {
                    show: true
                },
                grid  : {
                    borderWidth    : 1,
                    borderColor    : {
                        top   : "#e9e9e9",
                        right : "transparent",
                        bottom: "transparent",
                        left  : "transparent",
                    },
                    color          : '#999',
                    hoverable      : true,
                    minBorderMargin: 20,
                    labelMargin    : 10,
                    margin         : {
                        top   : 0,
                        bottom: 0,
                        left  : 0
                    },
                },
                series: {
                    lines : {
                        show     : true,
                        lineWidth: 0,
                        fill     : true,
                        fillColor: {colors: [ {opacity: 0.8}, {opacity: 0.9} ]}
                    },
                    points: {
                        show: true
                    },
                },
                xaxis : {
                    tickLength  : 0,
                    tickDecimals: 0,
                },
                yaxis : {
                    tickSize: 50
                },
                colors: [ dark ]
            };
            var data = [ {
                "label": "Europe (EU27)",
                "data" : [ [ 2011, 0 ], [ 2012, 100 ], [ 2013, 75 ], [ 2014, 175 ], [ 2015, 125 ], [ 2016, 150 ] ]
            } ];
            $.plot("#line-chart", data, options);
        });
    },
    realTimeChart = function () {
        $(window).on("load", function () {
            // We use an inline data source in the example, usually data would
            // be fetched from a server
            var data = [],
                totalPoints = 300;

            function getRandomData() {
                if (data.length > 0)
                    data = data.slice(1);
                // Do a random walk
                while (data.length < totalPoints) {
                    var prev = data.length > 0 ? data[ data.length - 1 ] : 50,
                        y = prev + Math.random() * 10 - 5;
                    if (y < 0) {
                        y = 0;
                    } else if (y > 100) {
                        y = 100;
                    }
                    data.push(y);
                }
                // Zip the generated y values with the x values
                var res = [];
                for (var i = 0; i < data.length; ++i) {
                    res.push([ i, data[ i ] ])
                }
                return res;
            }

            // Set up the control widget
            var updateInterval = 30;
            $("#updateInterval").val(updateInterval).change(function () {
                var v = $(this).val();
                if (v && !isNaN(+v)) {
                    updateInterval = +v;
                    if (updateInterval < 1) {
                        updateInterval = 1;
                    } else if (updateInterval > 2000) {
                        updateInterval = 2000;
                    }
                    $(this).val("" + updateInterval);
                }
            });
            var plot = $.plot("#realtime", [ getRandomData() ], {
                grid  : {
                    borderWidth    : 1,
                    borderColor    : "transparent",
                    color          : '#999',
                    minBorderMargin: 20,
                    labelMargin    : 10,
                    margin         : {
                        top   : 0,
                        bottom: 0,
                        left  : 0
                    },
                },
                series: {
                    shadowSize: 0,   // Drawing is faster without shadows
                    lines     : {
                        fill     : true,
                        fillColor: {colors: [ {opacity: 0.8}, {opacity: 0.1} ]}
                    }
                },
                yaxis : {
                    min: 0,
                    max: 100
                },
                xaxis : {
                    show: false
                },
                colors: [ blue ]
            });

            function update() {
                plot.setData([ getRandomData() ]);
                // Since the axes don't change, we don't need to call plot.setupGrid()
                plot.draw();
                setTimeout(update, updateInterval);
            }

            update();
        });
    },
    barChart = function () {
        $(window).on("load", function () {
            var data = [ [ "January", 10 ], [ "February", 8 ], [ "March", 4 ], [ "April", 13 ], [ "May", 17 ], [ "June", 9 ] ];
            $.plot("#bar-chart", [ data ], {
                series: {
                    bars: {
                        show     : true,
                        barWidth : 0.6,
                        align    : "center",
                        lineWidth: 0,
                        fill     : true,
                        fillColor: {colors: [ {opacity: 1}, {opacity: 1} ]}
                    }
                },
                xaxis : {
                    mode      : "categories",
                    tickLength: 0
                },
                yaxis : {
                    tickSize: 4
                },
                grid  : {
                    borderWidth    : 1,
                    borderColor    : "transparent",
                    color          : '#999',
                    minBorderMargin: 20,
                    labelMargin    : 10,
                    margin         : {
                        top   : 0,
                        bottom: 0,
                        left  : 0
                    },
                },
                colors: [ dark ]
            });
        });
    },
    stackedBar = function () {
        $(window).on("load", function () {
            var d1 = [];
            for (var i = 0; i <= 10; i += 1) {
                d1.push([ i, parseInt(Math.random() * 30) ]);
            }
            var d2 = [];
            for (var i = 0; i <= 10; i += 1) {
                d2.push([ i, parseInt(Math.random() * 30) ]);
            }
            var d3 = [];
            for (var i = 0; i <= 10; i += 1) {
                d3.push([ i, parseInt(Math.random() * 30) ]);
            }
            var stack = 0,
                bars = true,
                lines = false,
                steps = false;

            function plotWithOptions() {
                $.plot("#stacked-bar", [ d1, d2, d3 ], {
                    series: {
                        stack: stack,
                        lines: {
                            show     : lines,
                            fill     : true,
                            steps    : steps,
                            lineWidth: 0,
                        },
                        bars : {
                            show     : bars,
                            barWidth : 0.6,
                            lineWidth: 0,
                            fill     : 1
                        }
                    },
                    grid  : {
                        borderWidth    : 1,
                        borderColor    : "#e9e9e9",
                        color          : '#999',
                        minBorderMargin: 20,
                        labelMargin    : 10,
                        margin         : {
                            top   : 0,
                            bottom: 0,
                            left  : 0
                        },
                    },
                    colors: [ dark, green, red ]
                });
            }

            plotWithOptions();
        });
    },
    donetHole = function () {
        $(window).on("load", function () {
            var options = {
                series: {
                    pie: {
                        innerRadius: 0.8,
                        show       : true
                    }
                },
                colors: [ dark, blue, orange, red, aqua, purple ]
            };
            var data = [
                {label: "Series1", data: 50},
                {label: "Series2", data: 70},
                {label: "Series3", data: 60},
                {label: "Series4", data: 90},
                {label: "Series5", data: 80},
                {label: "Series6", data: 110}
            ];
            $.plot("#donut-hole-chart", data, options);
        });
    },
    interActiveChart = function () {
        $(window).on("load", function () {
            var options = {
                series: {
                    pie: {
                        show: true
                    }
                },
                grid  : {
                    hoverable: true,
                    clickable: true
                },
                colors: [ dark, blue, purple, aqua, orange, red ]
            };
            var data = [
                {label: "Series1", data: 50},
                {label: "Series2", data: 70},
                {label: "Series3", data: 60},
                {label: "Series4", data: 90},
                {label: "Series5", data: 80},
                {label: "Series6", data: 110}
            ];
            var placeholder = $("#interactive-pie-chart");
            $.plot(placeholder, data, options);
            $(placeholder).on("bind", "plothover", function (event, pos, obj) {
                if (!obj) {
                    return;
                }
                var percent = parseFloat(obj.series.percent).toFixed(2);
                $("#hover").html("<span style='font-weight:bold; color:" + obj.series.color + "'>" + obj.series.label + " (" + percent + "%)</span>");
            });
            $(placeholder).on("bind", "plotclick", function (event, pos, obj) {
                if (!obj) {
                    return;
                }
                var percent = parseFloat(obj.series.percent).toFixed(2);
                toastr.success(" " + obj.series.label + " : " + percent + "%", "Notification")
            });
        });
    };
var FlotChart = function () {
    "use strict";
    return {
        init: function () {
            morrisLineChart();
            realTimeChart();
            barChart();
            stackedBar();
            donetHole();
            interActiveChart();
        }
    }
}();
$(function () {
    FlotChart.init();
});