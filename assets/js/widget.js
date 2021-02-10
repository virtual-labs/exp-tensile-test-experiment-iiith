var app = {
    main   : function () {
        "use strict";
        app.execute();
    },
    execute: function () {
        var icons = new Skycons(),
            list = [
                "clear-day", "clear-night", "partly-cloudy-day",
                "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
                "fog"
            ],
            i;
        for (i = list.length; i--;) {
            var weatherType = list[ i ],
                elements = document.getElementsByClassName(weatherType);
            for (var e = elements.length; e--;) {
                icons.set(elements[ e ], weatherType);
            }
        }
        icons.play();

        var _container = jQuery("#demo-sparkline-area");
        if (_container.length > 0) {
            $("#demo-sparkline-area").sparkline([ 57, 69, 70, 62, 73, 79, 76, 77, 73, 52, 57, 50, 60, 55, 70, 68, 57, 62, 53, 69, 59, 67, 69, 58, 50, 47, 65 ], {
                type              : 'line',
                width             : '100%',
                height            : '60',
                spotRadius        : 4,
                lineWidth         : 2,
                lineColor         : 'rgba(255,255,255,.85)',
                fillColor         : 'rgba(0,0,0,0.1)',
                spotColor         : 'rgba(255,255,255,.5)',
                minSpotColor      : 'rgba(255,255,255,.5)',
                maxSpotColor      : 'rgba(255,255,255,.5)',
                highlightLineColor: '#ffffff',
                highlightSpotColor: '#ffffff',
                tooltipChartTitle : 'Usage',
                tooltipSuffix     : ' %'
            });
        }

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

        var _container = jQuery("#graph-1-container");
        if (_container.length > 0) {
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


                /*$('#poly-'+id).attr('class','show');*/

                /* function drawPolygon(segments,id){
                  var polySeg = segments;
                  polySeg.push([80,40],[0,40]);
                  var polyLine = segments.join(' ').toString();
                  var replacedString = polyLine.replace(/L/g,'').replace(/M/g,"");
                  var poly = graph.polygon(replacedString);
                  poly.attr('id','poly-'+id)
                }
                drawPolygon(segments,id);*/
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
            drawLineGraph('#chart-2', chart_2_y, '#graph-2-container', 2);
        }

        if ($("#state_order_chart").length && $("#users_online").length) {
            $("#users_online").sparkline([ 102, 109, 120, 99, 110, 80, 87, 114, 102, 109, 120, 99, 110, 80, 87, 74 ], {
                type      : 'bar',
                height    : '100',
                barWidth  : 9,
                barSpacing: 10,
                barColor  : 'rgba(255,255,255,.3)'
            });

            var ctx = document.getElementById('state_order_chart').getContext('2d');
            var chart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'line',

                // The data for our dataset
                data: {
                    labels  : [ "BTC", "Ethereum", "Ripple", "Litecoin", "BTC", "Cash" ],
                    datasets: [ {
                        label               : "Dollar",
                        backgroundColor     : 'rgba(251,146,140,.15)',
                        borderColor         : '#fb928c',
                        pointBackgroundColor: "#ffffff",
                        data                : [ 120, 200, 170, 200, 150, 170 ]
                    } ]
                },

                // Configuration options go here
                options: {
                    maintainAspectRatio: false,
                    legend             : {
                        display: false
                    },

                    scales  : {
                        xAxes: [ {
                            display: false
                        } ],
                        yAxes: [ {
                            display  : false,
                            gridLines: {
                                zeroLineColor     : '#e7ecf0',
                                color             : '#e7ecf0',
                                borderDash        : [ 5, 5, 5 ],
                                zeroLineBorderDash: [ 5, 5, 5 ],
                                drawBorder        : false
                            }
                        } ]

                    },
                    elements: {
                        line : {
                            tension    : 0.00001,
                            //tension: 0.4,
                            borderWidth: 1
                        },
                        point: {
                            radius     : 2,
                            hitRadius  : 10,
                            hoverRadius: 6,
                            borderWidth: 2
                        }
                    }
                }
            });
        }

        var _container = jQuery("#btc_chart");
        if (_container.length > 0) {
            let draw = Chart.controllers.line.prototype.draw;
            Chart.controllers.line = Chart.controllers.line.extend({
                draw: function () {
                    draw.apply(this, arguments);
                    let ctx = this.chart.chart.ctx;
                    let _stroke = ctx.stroke;
                    ctx.stroke = function () {
                        ctx.save();
                        ctx.shadowColor = 'rgba(0,0,0,.2)';
                        ctx.shadowOffsetX = 0;
                        ctx.shadowOffsetY = 0;
                        _stroke.apply(this, arguments)
                        ctx.restore();
                    }
                }
            });

            var bar_ctx = document.getElementById('btc_chart').getContext('2d');

            var purple_orange_gradient = bar_ctx.createLinearGradient(0, 20, 20, 270);
            purple_orange_gradient.addColorStop(0, 'rgba(13,169,239,1)');
            purple_orange_gradient.addColorStop(1, 'rgba(13,169,239,0.3)');

            var bar_chart = new Chart(bar_ctx, {
                type   : 'line',
                data   : {
                    labels  : [ "Monday", "Thursday", "Wednesday", "Tuesday", "Friday", "Saturday", "Sunday" ],
                    datasets: [ {
                        data                : [ 4, 8, 14, 11, 17, 15, 24 ],
                        backgroundColor     : purple_orange_gradient,
                        hoverBackgroundColor: purple_orange_gradient,
                        borderColor         : "rgba(13,169,239,1)",
                        borderWidth         : 3,
                    } ],
                },
                options: {
                    legend: {
                        display: false,
                    },
                    scales: {
                        xAxes: [ {
                            display  : false,
                            gridLines: {
                                display: false
                            }
                        } ],
                        yAxes: [ {
                            display  : false,
                            gridLines: {
                                display: false
                            }
                        } ]
                    }
                }
            });
        }

        var _container = jQuery("#temp_chart");
        if (_container.length > 0) {
            var canvas = document.getElementById("temp_chart");

// Apply multiply blend when drawing datasets
            var multiply = {
                beforeDatasetsDraw: function (chart, options, el) {
                    chart.ctx.globalCompositeOperation = 'multiply';
                },
                afterDatasetsDraw : function (chart, options) {
                    chart.ctx.globalCompositeOperation = 'source-over';
                },
            };

// Gradient color - this week
            var gradientThisWeek = canvas.getContext('2d').createLinearGradient(0, 0, 0, 150);
            gradientThisWeek.addColorStop(0, '#5555FF');
            gradientThisWeek.addColorStop(1, '#9787FF');

// Gradient color - previous week
            var gradientPrevWeek = canvas.getContext('2d').createLinearGradient(0, 0, 0, 150);
            gradientPrevWeek.addColorStop(0, '#FF55B8');
            gradientPrevWeek.addColorStop(1, '#FF8787');

            var config = {
                type   : 'line',
                data   : {
                    labels  : [ "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN", "MON" ],
                    datasets: [
                        {
                            label                : 'Temperature',
                            data                 : [ 18, 26, 14, 22, 12, 20, 12, 18, 10 ],
                            fill                 : false,
                            borderColor          : 'rgba(255, 255, 255, 0.2)',
                            borderWidth          : 2,
                            pointBackgroundColor : 'transparent',
                            pointBorderColor     : '#FFFFFF',
                            pointBorderWidth     : 3,
                            pointHoverBorderColor: 'rgba(255, 255, 255, 0.2)',
                            pointHoverBorderWidth: 10,
                            lineTension          : 0,
                        }
                    ]
                },
                options: {
                    responsive: false,
                    elements  : {
                        point: {
                            radius     : 6,
                            hitRadius  : 6,
                            hoverRadius: 6
                        }
                    },
                    legend    : {
                        display: false,
                    },
                    tooltips  : {
                        backgroundColor: 'transparent',
                        displayColors  : false,
                        bodyFontSize   : 14,
                        callbacks      : {
                            label: function (tooltipItems, data) {
                                return tooltipItems.yLabel + '°C';
                            }
                        }
                    },
                    scales    : {
                        xAxes: [ {
                            display: false,
                        } ],
                        yAxes: [ {
                            display: false,
                            ticks  : {
                                beginAtZero: true,
                            },
                        } ]
                    }
                },
                plugins: [ multiply ],
            };
            window.chart = new Chart(canvas, config);
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

        var _container = jQuery(".app_chat_i");
        if (_container.length > 0) {
            var count = 0;
            var classes = [ "theme_1", "theme_2", "theme_3", "theme_4" ];
            var length = classes.length;
            $(function () {
                $('.app_chat_button, .pvr_chat_cnt .chat-close').on('click', function () {
                    $('.pvr_chat_cnt').toggleClass('active');
                    return false;
                });

                $('.message-input').on('keypress', function (e) {
                    if (e.which == 13) {
                        var val = ($(this).val() !== '') ? $(this).val() : "Lorem Ipsum is simply dummy text of the printing.";
                        $('.chat-messages').append('<div class="message self"><div class="message-content">' + val + '</div></div>');
                        $(this).val('');
                        setTimeout(function () {
                            $('.chat-messages').append('<div class="message"><div class="message-content">' + val + '</div></div>');
                            $messages_w.scrollTop($messages_w.prop("scrollHeight"));
                            $messages_w.perfectScrollbar('update');
                        }, 200)
                        var $messages_w = $('.pvr_chat_cnt .chat-messages');
                        $messages_w.scrollTop($messages_w.prop("scrollHeight"));
                        $messages_w.perfectScrollbar('update');
                        return false;
                    }
                });

                $('.pvr_chat_cnt .chat-messages').perfectScrollbar();
                App.place_holder("message-input", [ 'Type your message here...', 'Press Enter to Send Message...' ], false)

                $(".change_chat_theme").on('click', function () {
                    $(".chat-messages").removeAttr("class").addClass("chat-messages " + classes[ count ]);
                    if (parseInt(count, 10) === parseInt(length, 10) - 1) {
                        count = 0;
                    } else {
                        count = parseInt(count, 10) + 1;
                    }
                    var $messages_w = $('.pvr_chat_cnt .chat-messages');
                    $messages_w.scrollTop($messages_w.prop("scrollHeight"));
                    $messages_w.perfectScrollbar('update');
                })
            });
        }

        if ($("#pvrLineChart_1").length) {
            var pvrLineChart = $("#pvrLineChart_1");
            var pvrLineGradient = pvrLineChart[ 0 ].getContext('2d').createLinearGradient(0, 0, 0, 200);
            pvrLineGradient.addColorStop(0, 'rgba(147,104,233,0.48)');
            pvrLineGradient.addColorStop(1, 'rgba(148, 59, 234, 0.7)');
            var liteLineData = {
                labels  : [ "January 1", "January 5", "January 10", "January 15", "January 20", "January 25" ],
                datasets: [ {
                    label                    : "Sold",
                    fill                     : true,
                    lineTension              : 0.4,
                    backgroundColor          : pvrLineGradient,
                    borderColor              : "#8f1cad",
                    borderCapStyle           : 'butt',
                    borderDash               : [],
                    borderDashOffset         : 0.0,
                    borderJoinStyle          : 'miter',
                    pointBorderColor         : "#fff",
                    pointBackgroundColor     : "#2a2f37",
                    pointBorderWidth         : 2,
                    pointHoverRadius         : 6,
                    pointHoverBackgroundColor: "#943BEA",
                    pointHoverBorderColor    : "#fff",
                    pointHoverBorderWidth    : 2,
                    pointRadius              : 4,
                    pointHitRadius           : 5,
                    data                     : [ 13, 28, 19, 24, 43, 49 ],
                    spanGaps                 : false
                } ]
            };
            var mypvrLineChart = new Chart(pvrLineChart, {
                type   : 'line',
                data   : liteLineData,
                options: {
                    tooltips: {enabled: false},
                    legend  : {display: false},
                    scales  : {
                        xAxes     : [ {
                            display  : false,
                            ticks    : {fontSize: '11', fontColor: '#969da5'},
                            gridLines: {color: 'rgba(0,0,0,0.0)', zeroLineColor: 'rgba(0,0,0,0.0)'}
                        } ], yAxes: [ {display: false, ticks: {beginAtZero: true, max: 55}} ]
                    }
                }
            });
        }

        if ($("#pvrLineChart_2").length) {
            var pvrLineChart = $("#pvrLineChart_2");
            var pvrLineGradient = pvrLineChart[ 0 ].getContext('2d').createLinearGradient(0, 0, 0, 200);
            pvrLineGradient.addColorStop(0, 'rgba(255, 165, 52,0.48)');
            pvrLineGradient.addColorStop(1, 'rgba(255, 82, 33, 0.7)');
            var liteLineData = {
                labels  : [ "January 1", "January 5", "January 10", "January 15", "January 20", "January 25" ],
                datasets: [ {
                    label                    : "Sold",
                    fill                     : true,
                    lineTension              : 0.4,
                    backgroundColor          : pvrLineGradient,
                    borderColor              : "#FFA534",
                    borderCapStyle           : 'butt',
                    borderDash               : [],
                    borderDashOffset         : 0.0,
                    borderJoinStyle          : 'miter',
                    pointBorderColor         : "#fff",
                    pointBackgroundColor     : "#2a2f37",
                    pointBorderWidth         : 2,
                    pointHoverRadius         : 6,
                    pointHoverBackgroundColor: "#FF5221",
                    pointHoverBorderColor    : "#fff",
                    pointHoverBorderWidth    : 2,
                    pointRadius              : 4,
                    pointHitRadius           : 5,
                    data                     : [ 13, 28, 39, 24, 43, 19 ],
                    spanGaps                 : false
                } ]
            };
            var mypvrLineChart = new Chart(pvrLineChart, {
                type   : 'line',
                data   : liteLineData,
                options: {
                    tooltips: {enabled: false},
                    legend  : {display: false},
                    scales  : {
                        xAxes     : [ {
                            display  : false,
                            ticks    : {fontSize: '11', fontColor: '#969da5'},
                            gridLines: {color: 'rgba(0,0,0,0.0)', zeroLineColor: 'rgba(0,0,0,0.0)'}
                        } ], yAxes: [ {display: false, ticks: {beginAtZero: true, max: 55}} ]
                    }
                }
            });
        }

        if ($("#pvrLineChart_3").length) {
            var pvrLineChart = $("#pvrLineChart_3");
            var pvrLineGradient = pvrLineChart[ 0 ].getContext('2d').createLinearGradient(0, 0, 0, 200);
            pvrLineGradient.addColorStop(0, 'rgba(135, 203, 22,0.48)');
            pvrLineGradient.addColorStop(1, 'rgba(109, 192, 48, 0.7)');
            var liteLineData = {
                labels  : [ "January 1", "January 5", "January 10", "January 15", "January 20", "January 25" ],
                datasets: [ {
                    label                    : "Sold",
                    fill                     : true,
                    lineTension              : 0.4,
                    backgroundColor          : pvrLineGradient,
                    borderColor              : "#87CB16",
                    borderCapStyle           : 'butt',
                    borderDash               : [],
                    borderDashOffset         : 0.0,
                    borderJoinStyle          : 'miter',
                    pointBorderColor         : "#fff",
                    pointBackgroundColor     : "#2a2f37",
                    pointBorderWidth         : 2,
                    pointHoverRadius         : 6,
                    pointHoverBackgroundColor: "#6DC030",
                    pointHoverBorderColor    : "#fff",
                    pointHoverBorderWidth    : 2,
                    pointRadius              : 4,
                    pointHitRadius           : 5,
                    data                     : [ 13, 28, 39, 24, 43, 19 ],
                    spanGaps                 : false
                } ]
            };
            var mypvrLineChart = new Chart(pvrLineChart, {
                type   : 'line',
                data   : liteLineData,
                options: {
                    tooltips: {enabled: false},
                    legend  : {display: false},
                    scales  : {
                        xAxes     : [ {
                            display  : false,
                            ticks    : {fontSize: '11', fontColor: '#969da5'},
                            gridLines: {color: 'rgba(0,0,0,0.0)', zeroLineColor: 'rgba(0,0,0,0.0)'}
                        } ], yAxes: [ {display: false, ticks: {beginAtZero: true, max: 55}} ]
                    }
                }
            });
        }

        if ($("#pvrLineChart_4").length) {
            var pvrLineChart = $("#pvrLineChart_4");
            var pvrLineGradient = pvrLineChart[ 0 ].getContext('2d').createLinearGradient(0, 0, 0, 200);
            pvrLineGradient.addColorStop(0, 'rgba(251, 64, 75,0.48)');
            pvrLineGradient.addColorStop(1, 'rgba(251, 102, 110, 0.7)');
            var liteLineData = {
                labels  : [ "January 1", "January 5", "January 10", "January 15", "January 20", "January 25" ],
                datasets: [ {
                    label                    : "Sold",
                    fill                     : true,
                    lineTension              : 0.4,
                    backgroundColor          : pvrLineGradient,
                    borderColor              : "#FB404B",
                    borderCapStyle           : 'butt',
                    borderDash               : [],
                    borderDashOffset         : 0.0,
                    borderJoinStyle          : 'miter',
                    pointBorderColor         : "#fff",
                    pointBackgroundColor     : "#2a2f37",
                    pointBorderWidth         : 2,
                    pointHoverRadius         : 6,
                    pointHoverBackgroundColor: "#FB404B",
                    pointHoverBorderColor    : "#fff",
                    pointHoverBorderWidth    : 2,
                    pointRadius              : 4,
                    pointHitRadius           : 5,
                    data                     : [ 13, 8, 29, 24, 43, 49 ],
                    spanGaps                 : false
                } ]
            };
            var mypvrLineChart = new Chart(pvrLineChart, {
                type   : 'line',
                data   : liteLineData,
                options: {
                    tooltips: {enabled: false},
                    legend  : {display: false},
                    scales  : {
                        xAxes     : [ {
                            display  : false,
                            ticks    : {fontSize: '11', fontColor: '#969da5'},
                            gridLines: {color: 'rgba(0,0,0,0.0)', zeroLineColor: 'rgba(0,0,0,0.0)'}
                        } ], yAxes: [ {display: false, ticks: {beginAtZero: true, max: 55}} ]
                    }
                }
            });
        }

        if ($("#chartdiv_map").length !== 0) {
            var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
            var planeSVG = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";
            var map = AmCharts.makeChart("chartdiv_map", {
                "type"          : "map",
                "theme"         : "none",
                "dataProvider"  : {
                    "map"          : "worldLow",
                    "zoomLevel"    : 3.0,
                    "zoomLongitude": -75,
                    "zoomLatitude" : 42,
                    "lines"        : [ {
                        "id"        : "line1",
                        "arc"       : -0.85,
                        "alpha"     : 0.3,
                        "latitudes" : [ 48.8567, 43.8163, 34.3, 23 ],
                        "longitudes": [ 2.3510, -79.4287, -118.15, -82 ]
                    }, {
                        "id"        : "line2",
                        "alpha"     : 0,
                        "color"     : "#000000",
                        "latitudes" : [ 48.8567, 43.8163, 34.3, 23 ],
                        "longitudes": [ 2.3510, -79.4287, -118.15, -82 ]
                    } ],
                    "images"       : [ {
                        "svgPath"  : targetSVG,
                        "title"    : "Paris",
                        "latitude" : 48.8567,
                        "longitude": 2.3510
                    }, {
                        "svgPath"  : targetSVG,
                        "title"    : "Toronto",
                        "latitude" : 43.8163,
                        "longitude": -79.4287
                    }, {
                        "svgPath"  : targetSVG,
                        "title"    : "Los Angeles",
                        "latitude" : 34.3,
                        "longitude": -118.15
                    }, {"svgPath": targetSVG, "title": "Havana", "latitude": 23, "longitude": -82}, {
                        "svgPath"         : planeSVG,
                        "positionOnLine"  : 0,
                        "color"           : "#000000",
                        "alpha"           : 0.1,
                        "animateAlongLine": true,
                        "lineId"          : "line2",
                        "flipDirection"   : true,
                        "loop"            : true,
                        "scale"           : 0.03,
                        "positionScale"   : 1.3
                    }, {
                        "svgPath"         : planeSVG,
                        "positionOnLine"  : 0,
                        "color"           : "#585869",
                        "animateAlongLine": true,
                        "lineId"          : "line1",
                        "flipDirection"   : true,
                        "loop"            : true,
                        "scale"           : 0.03,
                        "positionScale"   : 1.8
                    } ]
                },
                "areasSettings" : {"unlistedAreasColor": "#8dd9ef"},
                "imagesSettings": {
                    "color"               : "#585869",
                    "rollOverColor"       : "#585869",
                    "selectedColor"       : "#585869",
                    "pauseDuration"       : 0.2,
                    "animationDuration"   : 2.5,
                    "adjustAnimationSpeed": true
                },
                "linesSettings" : {"color": "#585869", "alpha": 0.4},
                "export"        : {"enabled": true}
            });
        }

        if ($("#hero-donut").length !== 0) {
            var donutChart = $("#hero-donut");
            var data = {
                labels  : [ "USA", "Brazil", "Russia", "India", "Australia" ],
                datasets: [ {
                    data                : [ 300, 150, 50, 75, 200 ],
                    backgroundColor     : [ "#5797fc", "#7e6fff", "#4ecc48", "#ffcc29", "#f37070" ],
                    hoverBackgroundColor: [ "#5797fc", "#7e6fff", "#4ecc48", "#ffcc29", "#f37070" ],
                    borderWidth         : 0
                } ]
            };
            new Chart(donutChart, {
                type   : 'doughnut',
                data   : data,
                options: {legend: {display: false}, animation: {animateScale: true}, cutoutPercentage: 80}
            });
        }

        if ($('#ckeditorEmail').length !== 0) {
            CKEDITOR.config.uiColor = '#ffffff';
            CKEDITOR.config.toolbar = [ [ 'Bold', 'Italic', '-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink', '-', 'About' ] ];
            CKEDITOR.config.height = 200;
            CKEDITOR.replace('ckeditor1');
        }

    },
};
window.addEventListener('load', function () {
    app.main();
});