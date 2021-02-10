var app = {
    main   : function () {
        "use strict";
        app.execute();
    },
    execute: function () {
        var _container = jQuery("#rs1");
        if (_container.length > 0) {
            var blue = "#007bff",
                dark = "#2d353c",
                grey = "#b6c2c9",
                red = "#dc3545";
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
                $("#change_random_per").text(Math.floor(Math.random() * 10) + "%");
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
        }

        var _container = jQuery("#dynamic_chart");
        if (_container.length > 0) {
            var barChartData = {
                labels  : [ "January", "February", "March", "April" ],
                datasets: [ {
                    type                : 'line',
                    label               : "",
                    data                : [ 2, 1, 5, 6 ],
                    fill                : false,
                    backgroundColor     : '#4076e0',
                    borderColor         : '#4076e0',
                    borderWidth         : 3,
                    pointRadius         : 0,
                    hoverBackgroundColor: '#4076e0',
                    hoverBorderColor    : '#4076e0',
                    yAxisID             : 'y-axis-1',
                    animateScale        : true,
                    easing              : "none",
                    duration            : 0,
                } ]
            };
            var length = barChartData.datasets[ 0 ].data.length;
            var ctx = document.getElementById("dynamic_chart").getContext("2d");
            myBar = new Chart(ctx, {
                animation: {
                    animateScale: true,
                    easing      : "none",
                    duration    : 0,
                },
                type     : 'bar',
                data     : barChartData,
                options  : {
                    responsive: true,
                    tooltips  : {
                        mode: 'label'
                    },
                    legend    : {
                        display: false,
                        labels : {
                            fontColor: 'rgb(255, 99, 132)'
                        }
                    },
                    elements  : {
                        line: {
                            fill: true
                        }
                    },
                    scales    : {
                        xAxes: [ {
                            display  : false,
                            gridLines: {
                                display: false
                            },
                            labels   : {
                                show: true,
                            }
                        } ],
                        yAxes: [ {
                            type     : "linear",
                            display  : false,
                            position : "left",
                            id       : "y-axis-1",
                            gridLines: {
                                display: false
                            },
                            labels   : {
                                show: false,

                            }
                        } ]
                    }
                }
            });
            var lcount = 0;
            setInterval(function () {
                var count = 10;
                lcount++;
                var data = myBar.data.datasets[ 0 ].data;
                var labels = myBar.data.labels;
                data.push(Math.floor(Math.random() * 10));
                count++;
                labels.push(count.toString());
                if (lcount == 25) {
                    if (myBar.data.datasets[ 0 ].data.length > 25) myBar.data.datasets[ 0 ].data.splice(0, 25);
                    if (myBar.data.labels.length > 25) myBar.data.labels.splice(0, 25);
                    lcount = 0;
                }
                myBar.update();
            }, 570);
        }

        if ($("#users_online").length) {
            $("#users_online").sparkline([ 102, 109, 120, 99, 110, 80, 87, 114, 102, 109, 120, 99, 110, 80, 87, 74 ], {
                type      : 'bar',
                height    : '100',
                barWidth  : 9,
                barSpacing: 10,
                barColor  : 'rgba(255,255,255,.3)'
            });
        }

        function drawLineGraph(graph, points, container, id) {
            var graph = Snap(graph);
            /*END DRAW GRID*/

            /* PARSE POINTS */
            var myPoints = [];
            var shadowPoints = [];

            function parseData(points) {
                for (i = 0; i < points.length; i++) {
                    var p = new point();
                    var pv = points[ i ] / 100 * 40;
                    p.x = 83.7 / points.length * i + 1;
                    p.y = 40 - pv;
                    if (p.x > 78) {
                        p.x = 78;
                    }
                    myPoints.push(p);
                }
            }

            var segments = [];

            function createSegments(p_array) {
                for (i = 0; i < p_array.length; i++) {
                    var seg = "L" + p_array[ i ].x + "," + p_array[ i ].y;
                    if (i === 0) {
                        seg = "M" + p_array[ i ].x + "," + p_array[ i ].y;
                    }
                    segments.push(seg);
                }
            }

            function joinLine(segments_array, id) {
                var line = segments_array.join(" ");
                var line = graph.path(line);
                line.attr('id', 'graph-' + id);
                var lineLength = line.getTotalLength();

                line.attr({
                    'stroke-dasharray' : lineLength,
                    'stroke-dashoffset': lineLength
                });
            }

            function calculatePercentage(points, graph) {
                var initValue = points[ 0 ];
                var endValue = points[ points.length - 1 ];
                var sum = endValue - initValue;
                var prefix;
                var percentageGain;
                var stepCount = 1300 / sum;

                function findPrefix() {
                    if (sum > 0) {
                        prefix = "+";
                    } else {
                        prefix = "";
                    }
                }

                var percentagePrefix = "";

                function percentageChange() {
                    percentageGain = initValue / endValue * 100;

                    if (percentageGain > 100) {
                        percentageGain = Math.round(percentageGain * 100 * 10) / 100;
                    } else if (percentageGain < 100) {
                        percentageGain = Math.round(percentageGain * 10) / 10;
                    }
                    if (initValue > endValue) {

                        percentageGain = endValue / initValue * 100 - 100;
                        percentageGain = percentageGain.toFixed(2);

                        percentagePrefix = "";
                        $(graph).find('.percentage-value').addClass('negative');
                    } else {
                        percentagePrefix = "+";
                    }
                    if (endValue > initValue) {
                        percentageGain = endValue / initValue * 100;
                        percentageGain = Math.round(percentageGain);
                    }
                };
                percentageChange();
                findPrefix();

                var percentage = $(graph).find('.percentage-value');
                var totalGain = $(graph).find('.total-gain');
                var hVal = $(graph).find('.h-value');

                function count(graph, sum) {
                    var totalGain = $(graph).find('.total-gain');
                    var i = 0;
                    var time = 1300;
                    var intervalTime = Math.abs(time / sum);
                    var timerID = 0;
                    if (sum > 0) {
                        var timerID = setInterval(function () {
                            i++;
                            totalGain.text(percentagePrefix + i);
                            if (i === sum) clearInterval(timerID);
                        }, intervalTime);
                    } else if (sum < 0) {
                        var timerID = setInterval(function () {
                            i--;
                            totalGain.text(percentagePrefix + i);
                            if (i === sum) clearInterval(timerID);
                        }, intervalTime);
                    }
                }

                count(graph, sum);

                percentage.text(percentagePrefix + percentageGain + "%");
                totalGain.text("0%");
                setTimeout(function () {
                    percentage.addClass('visible');
                    hVal.addClass('visible');
                }, 1300);

            }


            function showValues() {
                var val1 = $(graph).find('.h-value');
                var val2 = $(graph).find('.percentage-value');
                val1.addClass('visible');
                val2.addClass('visible');
            }

            function drawPolygon(segments, id) {
                var lastel = segments[ segments.length - 1 ];
                var polySeg = segments.slice();
                polySeg.push([ 78, 38.4 ], [ 1, 38.4 ]);
                var polyLine = polySeg.join(' ').toString();
                var replacedString = polyLine.replace(/L/g, '').replace(/M/g, "");

                var poly = graph.polygon(replacedString);
                var clip = graph.rect(-80, 0, 80, 40);
                poly.attr({
                    'id'      : 'poly-' + id,
                    /*'clipPath':'url(#clip)'*/
                    'clipPath': clip
                });
                clip.animate({
                    transform: 't80,0'
                }, 1300, mina.linear);
            }

            parseData(points);

            createSegments(myPoints);
            calculatePercentage(points, container);
            joinLine(segments, id);

            drawPolygon(segments, id);
        }

        var chart_1_y = [
            15, 25, 40, 30, 45, 40, 35, 55, 37, 50, 60, 45, 70, 78
        ];
        var chart_2_y = [
            80, 65, 65, 40, 55, 34, 54, 50, 60, 64, 55, 27, 24, 30
        ];

        function point(x, y) {
            x: 0;
            y: 0;
        }

        drawLineGraph('#chart-1', chart_1_y, '#graph-1-container', 1);
    },
};
window.addEventListener('load', function () {
    app.main();
});