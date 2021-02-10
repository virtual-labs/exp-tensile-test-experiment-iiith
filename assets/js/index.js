var app = {
    main   : function () {
        "use strict";
        app.execute();
    },
    execute: function () {
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
            purple_orange_gradient.addColorStop(0, 'rgba(13,169,239,0.7)');
            purple_orange_gradient.addColorStop(1, 'rgba(13,169,239,0.2)');

            var bar_chart = new Chart(bar_ctx, {
                type   : 'line',
                data   : {
                    labels  : [ "Monday", "Thursday", "Wednesday", "Tuesday", "Friday", "Saturday", "Sunday" ],
                    datasets: [ {
                        data                : [ 4, 8, 10, 11, 17, 15, 18 ],
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

        var _container = jQuery("#round_chart");
        if (_container.length > 0) {
            var Dial = function (container) {
                this.container = container;
                this.size = this.container.dataset.size;
                this.strokeWidth = this.size / 8;
                this.radius = (this.size / 2) - (this.strokeWidth / 2);
                this.value = this.container.dataset.value;
                this.direction = this.container.dataset.arrow;
                this.svg;
                this.defs;
                this.slice;
                this.overlay;
                this.text;
                this.arrow;
                this.create();
            }

            Dial.prototype.create = function () {
                this.createSvg();
                this.createDefs();
                this.createSlice();
                this.createOverlay();
                this.createText();
                this.createArrow();
                this.container.appendChild(this.svg);
            };

            Dial.prototype.createSvg = function () {
                var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                svg.setAttribute('width', this.size + 'px');
                svg.setAttribute('height', this.size + 'px');
                this.svg = svg;
            };

            Dial.prototype.createDefs = function () {
                var defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
                var linearGradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
                linearGradient.setAttribute('id', 'gradient');
                var stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
                stop1.setAttribute('stop-color', '#6E4AE2');
                stop1.setAttribute('offset', '0%');
                linearGradient.appendChild(stop1);
                var stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
                stop2.setAttribute('stop-color', '#78F8EC');
                stop2.setAttribute('offset', '100%');
                linearGradient.appendChild(stop2);
                var linearGradientBackground = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
                linearGradientBackground.setAttribute('id', 'gradient-background');
                var stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
                stop1.setAttribute('stop-color', 'rgba(0, 0, 0, 0.2)');
                stop1.setAttribute('offset', '0%');
                linearGradientBackground.appendChild(stop1);
                var stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
                stop2.setAttribute('stop-color', 'rgba(0, 0, 0, 0.05)');
                stop2.setAttribute('offset', '100%');
                linearGradientBackground.appendChild(stop2);
                defs.appendChild(linearGradient);
                defs.appendChild(linearGradientBackground);
                this.svg.appendChild(defs);
                this.defs = defs;
            };

            Dial.prototype.createSlice = function () {
                var slice = document.createElementNS("http://www.w3.org/2000/svg", "path");
                slice.setAttribute('fill', 'none');
                slice.setAttribute('stroke', 'url(#gradient)');
                slice.setAttribute('stroke-width', this.strokeWidth);
                slice.setAttribute('transform', 'translate(' + this.strokeWidth / 2 + ',' + this.strokeWidth / 2 + ')');
                slice.setAttribute('class', 'animate-draw');
                this.svg.appendChild(slice);
                this.slice = slice;
            };

            Dial.prototype.createOverlay = function () {
                var r = this.size - (this.size / 2) - this.strokeWidth / 2;
                var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                circle.setAttribute('cx', this.size / 2);
                circle.setAttribute('cy', this.size / 2);
                circle.setAttribute('r', r);
                circle.setAttribute('fill', 'url(#gradient-background)');
                this.svg.appendChild(circle);
                this.overlay = circle;
            };

            Dial.prototype.createText = function () {
                var fontSize = this.size / 3.5;
                var text = document.createElementNS("http://www.w3.org/2000/svg", "text");
                text.setAttribute('x', (this.size / 2) + fontSize / 7.5);
                text.setAttribute('y', (this.size / 2) + fontSize / 4);
                text.setAttribute('font-family', 'Century Gothic, Lato');
                text.setAttribute('font-size', fontSize);
                text.setAttribute('fill', '#78F8EC');
                text.setAttribute('text-anchor', 'middle');
                var tspanSize = fontSize / 3;
                text.innerHTML = 0 + '<tspan font-size="' + tspanSize + '" dy="' + -tspanSize * 1.2 + '">%</tspan>';
                this.svg.appendChild(text);
                this.text = text;
            };

            Dial.prototype.createArrow = function () {
                var arrowSize = this.size / 10;
                var arrowYOffset, m;
                if (this.direction === 'up') {
                    arrowYOffset = arrowSize / 2;
                    m = -1;
                } else if (this.direction === 'down') {
                    arrowYOffset = 0;
                    m = 1;
                }
                var arrowPosX = ((this.size / 2) - arrowSize / 2);
                var arrowPosY = (this.size - this.size / 3) + arrowYOffset;
                var arrowDOffset = m * (arrowSize / 1.5);
                var arrow = document.createElementNS("http://www.w3.org/2000/svg", "path");
                arrow.setAttribute('d', 'M 0 0 ' + arrowSize + ' 0 ' + arrowSize / 2 + ' ' + arrowDOffset + ' 0 0 Z');
                arrow.setAttribute('fill', '#97F8F0');
                arrow.setAttribute('opacity', '0.6');
                arrow.setAttribute('transform', 'translate(' + arrowPosX + ',' + arrowPosY + ')');
                this.svg.appendChild(arrow);
                this.arrow = arrow;
            };

            Dial.prototype.animateStart = function () {
                var v = 0;
                var self = this;
                var intervalOne = setInterval(function () {
                    var p = +(v / self.value).toFixed(2);
                    var a = (p < 0.95) ? 2 - (2 * p) : 0.05;
                    v += a;
                    // Stop
                    if (v >= +self.value) {
                        v = self.value;
                        clearInterval(intervalOne);
                    }
                    self.setValue(v);
                }, 10);
            };

            Dial.prototype.animateReset = function () {
                this.setValue(0);
            };

            Dial.prototype.polarToCartesian = function (centerX, centerY, radius, angleInDegrees) {
                var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
                return {
                    x: centerX + (radius * Math.cos(angleInRadians)),
                    y: centerY + (radius * Math.sin(angleInRadians))
                };
            }

            Dial.prototype.describeArc = function (x, y, radius, startAngle, endAngle) {
                var start = this.polarToCartesian(x, y, radius, endAngle);
                var end = this.polarToCartesian(x, y, radius, startAngle);
                var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
                var d = [
                    "M", start.x, start.y,
                    "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
                ].join(" ");
                return d;
            }

            Dial.prototype.setValue = function (value) {
                var c = (value / 100) * 360;
                if (c === 360)
                    c = 359.99;
                var xy = this.size / 2 - this.strokeWidth / 2;
                var d = this.describeArc(xy, xy, xy, 180, 180 + c);
                this.slice.setAttribute('d', d);
                var tspanSize = (this.size / 3.5) / 3;
                this.text.innerHTML = Math.floor(value) + '<tspan font-size="' + tspanSize + '" dy="' + -tspanSize * 1.2 + '">%</tspan>';
            };

            var containers = document.getElementById("round_chart");
            var dial = new Dial(containers);
            dial.animateStart();
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

        var _container = jQuery(".popup_chat");
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
                });

                setTimeout(function () {
//                    $('.pvr_chat_cnt').addClass('active')
                }, 2500)
            });
        }
    },
};
window.addEventListener('load', function () {
    app.main();

    var sec = 0;

    function pad(val) {
        return val > 9 ? val : "0" + val;
    }

    setInterval(function () {
        document.getElementById("seconds").innerHTML = pad(++sec % 60);
        document.getElementById("minutes").innerHTML = pad(parseInt(sec / 60, 10));
    }, 1000);

    function prtime() {
        var hours = new Date().getHours();
        var seconds = new Date().getSeconds();
        var minutes = new Date().getMinutes();
        $('#hr').text((hours < 10 ? '0' : '') + hours);
        $('#min').text((minutes < 10 ? '0' : '') + minutes);
        $('#sec').text((seconds < 10 ? '0' : '') + seconds);
    }

    function second_passed() {
        $('.clock').removeClass('is-off');
    }

    setTimeout(second_passed, 2000)

    $('.switcher').on('click', function (e) {
        e.preventDefault();
        $('.screen').toggleClass('glitch');
    });

    var newDate = new Date();
    newDate.setDate(newDate.getDate());

    prtime();
    setInterval(function () {
        prtime()
    }, 1000);

    setInterval(function () {
        var millisecond = new Date().getMilliseconds();
        $("#milli").text(millisecond)
    }, 0.001);
});