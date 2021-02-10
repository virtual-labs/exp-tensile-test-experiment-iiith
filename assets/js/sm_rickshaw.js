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
    var rs1 = new Rickshaw.Graph({
        element: document.querySelector('#rs4'),
        renderer: 'area',
        series: [{
            data: [
                { x: 0, y: 13 },
                { x: 1, y: 12 },
                { x: 2, y: 10 },
                { x: 3, y: 11 },
                { x: 4, y: 12 },
                { x: 5, y: 10 },
                { x: 6, y: 12 },
                { x: 7, y: 10 },
                { x: 8, y: 12 },
                { x: 9, y: 14 },
                { x: 10, y: 8 },
                { x: 11, y: 15 },
                { x: 12, y: 7 },
                { x: 13, y: 10 }
            ],
            color: dark
        }]
    });
    rs1.render();
    // Responsive Mode
    new ResizeSensor($('#page-container'), function(){
        rs1.configure({
            width: $('#rs4').width(),
            height: $('#rs4').height()
        });
        rs1.render();
    });

    var seriesData = [ [], [] ];
    var random = new Rickshaw.Fixtures.RandomData(50);
    for (var i = 0; i < 50; i++) {
        random.addData(seriesData);
    }
    var graph = new Rickshaw.Graph({
        element : document.querySelector("#rs1"),
        height  : 70,
        renderer: 'area',
        series  : [
            {
                data : seriesData[ 0 ],
                color: blue,
                name : 'DB Server'
            }, {
                data : seriesData[ 1 ],
                color: grey,
                name : 'Web Server'
            }
        ]
    });
    var hoverDetail = new Rickshaw.Graph.HoverDetail({
        graph: graph
    });
    random.removeData(seriesData);
    random.addData(seriesData);
    graph.update();
    setInterval(function () {
        random.removeData(seriesData);
        random.addData(seriesData);
        graph.update();
        $("#change_random").text(Math.floor(Math.random() * 100));
        $("#change_random_per").text(Math.floor(Math.random() * 10)+"%");
    }, 1000);
    new ResizeSensor($('#page-container'), function () {
        graph.configure({
            width : $('#rs1').width(),
            height: $('#rs1').height()
        });
        graph.render();
    });

    var rs2 = new Rickshaw.Graph({
        element : document.querySelector('#rs2'),
        renderer: 'bar',
        series  : [ {
            data : [
                {x: 0, y: 5},
                {x: 1, y: 7},
                {x: 2, y: 10},
                {x: 3, y: 11},
                {x: 4, y: 12},
                {x: 5, y: 10},
                {x: 6, y: 9},
                {x: 7, y: 7},
                {x: 8, y: 6},
                {x: 9, y: 8},
                {x: 10, y: 9},
                {x: 11, y: 10},
                {x: 12, y: 7},
                {x: 13, y: 10}
            ],
            color: blue,
        } ]
    });
    rs2.render();
    // Responsive Mode
    new ResizeSensor($('#page-container'), function () {
        rs2.configure({
            width : $('#rs2').width(),
            height: $('#rs2').height()
        });
        rs2.render();
    });

    var rs3 = new Rickshaw.Graph({
        element : document.querySelector('#rs3'),
        renderer: 'line',
        series  : [ {
            data : [
                {x: 0, y: 5},
                {x: 1, y: 7},
                {x: 2, y: 10},
                {x: 3, y: 11},
                {x: 4, y: 12},
                {x: 5, y: 10},
                {x: 6, y: 9},
                {x: 7, y: 7},
                {x: 8, y: 6},
                {x: 9, y: 8},
                {x: 10, y: 9},
                {x: 11, y: 10},
                {x: 12, y: 7},
                {x: 13, y: 10}
            ],
            color: red
        } ]
    });
    rs3.render();
    // Responsive Mode
    new ResizeSensor($('#page-container'), function () {
        rs3.configure({
            width : $('#rs3').width(),
            height: $('#rs3').height()
        });
        rs3.render();
    });

    $(window).on("load", function(){
        var seriesData = [
            [],
            [],
            []
        ];
        var random = new Rickshaw.Fixtures.RandomData(150);
        for (var i = 0; i < 150; i++) {
            random.addData(seriesData);
        }
        var $element = $('#line-chart');
        var graph = new Rickshaw.Graph({
            element: $element.get(0),
            width: $element.width(),
            height: 300,
            renderer: 'line',
            series: [{
                color: green,
                data: seriesData[0],
                name: 'New York'
            }, {
                color: grey,
                data: seriesData[2],
                name: 'Tokyo'
            }]
        });
        graph.render();
        setInterval(function() {
            random.removeData(seriesData);
            random.addData(seriesData);
            graph.update();
        }, 2000);
        var hoverDetail = new Rickshaw.Graph.HoverDetail({
            graph: graph
        });
        var axes = new Rickshaw.Graph.Axis.Time({
            graph: graph
        });
        axes.render();
        $(window).on('resize', function() {
            graph.configure({
                width: $element.width()
            });
            graph.render();
        });
    });

    $(window).on("load", function(){
        var seriesData = [
            [],
            [],
            [],
            []
        ];
        var random = new Rickshaw.Fixtures.RandomData(150);
        for (var i = 0; i < 150; i++) {
            random.addData(seriesData);
        }
        var $element = $('#area-chart');
        var graph = new Rickshaw.Graph({
            element: $element.get(0),
            width: $element.width(),
            height: 300,
            renderer: 'area',
            stroke: true,
            series: [{
                color: '#3360ff',
                data: seriesData[0],
                name: 'New York'
            }, {
                color: '#5c79ff',
                data: seriesData[1],
                name: 'London'
            }, {
                color: '#9ec9ff',
                data: seriesData[2],
                name: 'Tokyo'
            }, {
                color: '#ccdeff',
                data: seriesData[3],
                name: 'Paris'
            }]
        });
        graph.render();
        setInterval(function() {
            random.removeData(seriesData);
            random.addData(seriesData);
            graph.update();
        }, 2000);
        var hoverDetail = new Rickshaw.Graph.HoverDetail({
            graph: graph
        });
        $(window).on('resize', function() {
            graph.configure({
                width: $element.width()
            });
            graph.render();
        });
    });

    $(window).on("load", function(){
        var seriesData = [
            [],
            [],
            [],
            []
        ];
        var random = new Rickshaw.Fixtures.RandomData(150);
        for (var i = 0; i < 150; i++) {
            random.addData(seriesData);
        }
        var $element = $('#scatter-chart');
        var graph = new Rickshaw.Graph({
            element: $element.get(0),
            width: $element.width(),
            height: 300,
            renderer: 'scatterplot',
            series: [{
                color: '#99B898',
                data: seriesData[0],
                name: 'New York'
            }, {
                color: '#FECEA8',
                data: seriesData[1],
                name: 'London'
            }, {
                color: '#9ec9ff',
                data: seriesData[2],
                name: 'Tokyo'
            }, {
                color: '#ccdeff',
                data: seriesData[3],
                name: 'Paris'
            }]
        });
        graph.render();
        var hoverDetail = new Rickshaw.Graph.HoverDetail({
            graph: graph
        });
        $(window).on('resize', function() {
            graph.configure({
                width: $element.width()
            });
            graph.render();
        });
    });
}
var rickChart = function () {
    "use strict";
    return {
        init: function () {
            lineChart();
        }
    }
}();
$(function () {
    rickChart.init();
});