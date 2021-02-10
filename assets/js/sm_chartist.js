"use strict";
var blue = "#007bff",
    aqua = "#49b6d6",
    green = "#28a745",
    orange = "#ffc107",
    dark = "#2d353c",
    grey = "#b6c2c9",
    purple = "#5856d6",
    red = "#dc3545";
var lineChart = function () {
    var line1 = new Chartist.Line('#chartLine1', {
        labels: [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri' ],
        series: [
            [ 12, 9, 7, 8, 5 ]
        ]
    }, {
        high        : 30,
        axisY       : {
            onlyInteger: true
        },
        fullWidth   : true,
        chartPadding: {
            bottom: 0,
            left  : 0
        }
    });

    // resize chart when container changest it's width
    new ResizeSensor($('#page-container'), function () {
        line1.update();
    });

    var area2 = new Chartist.Line('#chartArea2', {
        labels: [ 1, 2, 3, 4, 5, 6, 7, 8 ],
        series: [
            [ 5, 9, 7, 8, 5, 3, 5, 4 ],
            [ 7, 11, 9, 10, 7, 9, 7, 6 ]
        ]
    }, {
        high        : 30,
        low         : 0,
        axisY       : {
            onlyInteger: true
        },
        showArea    : true,
        fullWidth   : true,
        chartPadding: {
            bottom: 0,
            left  : 0
        }
    });

    // resize chart when container changest it's width
    new ResizeSensor($('#page-container'), function () {
        area2.update();
    });

    var bar2 = new Chartist.Bar('#chartBar2', {
        labels: [ 1, 2, 3, 4, 5, 6, 7, 8 ],
        series: [
            [ 5, 9, 7, 8, 5, 3, 5, 4 ],
            [ 10, 15, 10, 10, 18, 11, 16, 18 ]
        ]
    }, {
        high        : 30,
        low         : 0,
        axisY       : {
            onlyInteger: true
        },
        showArea    : true,
        fullWidth   : true,
        chartPadding: {
            bottom: 0,
            left  : 0
        }
    });


    // resize chart when container changest it's width
    new ResizeSensor($('#page-container'), function () {
        bar2.update();
    });

    var bar6 = new Chartist.Bar('#chartBar6', {
        labels: [ 'Q1', 'Q2', 'Q3', 'Q4' ],
        series: [
            [ 800000, 1200000, 1400000, 1300000 ],
            [ 200000, 400000, 500000, 300000 ],
            [ 100000, 200000, 400000, 600000 ]
        ]
    }, {
        stackBars     : true,
        horizontalBars: true,
        axisX         : {
            labelInterpolationFnc: function (value) {
                return (value / 1000) + 'k';
            }
        },
        chartPadding  : {
            bottom: 0,
            left  : 0,
            right : 40
        }
    }).on('draw', function (data) {
        if (data.type === 'bar') {
            data.element.attr({
                style: 'stroke-width: 30px'
            });
        }
    });

    // resize chart when container changest it's width
    new ResizeSensor($('#page-container'), function () {
        bar6.update();
    });

    var donut2 = new Chartist.Pie('#chartDonut2', {
        series: [ 20, 10, 30, 40, 25 ]
    }, {
        donut     : true,
        donutWidth: 60,
        donutSolid: true,
        startAngle: 270,
        showLabel : true
    });

    // resize chart when container changest it's width
    new ResizeSensor($('#page-container'), function () {
        donut2.update();
    });

    var sum = function (a, b) {
        return a + b
    };
    var data2 = {
        series: [ 5, 3, 4, 6, 2 ]
    };

    var pie2 = new Chartist.Pie('#chartPie2', data2, {
        labelInterpolationFnc: function (value) {
            return Math.round(value / data2.series.reduce(sum) * 100) + '%';
        }
    });


    // resize chart when container changest it's width
    new ResizeSensor($('#page-container'), function () {
        pie2.update();
    });
}


var chartistChart = function () {
    "use strict";
    return {
        init: function () {
            lineChart();
        }
    }
}();
$(function () {
    chartistChart.init();
});