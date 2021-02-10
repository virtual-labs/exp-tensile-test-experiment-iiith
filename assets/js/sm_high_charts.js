"use strict";
var ChartSpline = function () {
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });
        Highcharts.chart('randomData', {
            chart    : {
                type       : 'spline',
                animation  : Highcharts.svg,
                marginRight: 10,
                events     : {
                    load: function () {
                        var series = this.series[ 0 ];
                        setInterval(function () {
                            var x = (new Date()).getTime(),
                                y = Math.random();
                            series.addPoint([ x, y ], true, true);
                        }, 1000);
                    }
                }
            },
            title    : {
                text: 'Live random data'
            },
            xAxis    : {
                type             : 'datetime',
                tickPixelInterval: 150
            },
            yAxis    : {
                title    : {
                    text: 'Value'
                },
                plotLines: [ {
                    value: 0,
                    width: 1,
                    color: '#808080'
                } ]
            },
            tooltip  : {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend   : {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series   : [ {
                name: 'Random data',
                data: (function () {
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            y: Math.random()
                        });
                    }
                    return data;
                }())
            } ]
        });
    },
    colunmDrildown = function () {
        Highcharts.chart('colunmDrildown', {
            chart      : {
                type: 'column'
            },
            title      : {
                text: 'Browser market shares. January, 2018'
            },
            subtitle   : {
                text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
            },
            xAxis      : {
                type: 'category'
            },
            yAxis      : {
                title: {
                    text: 'Total percent market share'
                }

            },
            legend     : {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels : {
                        enabled: true,
                        format : '{point.y:.1f}%'
                    }
                }
            },
            tooltip    : {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat : '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
            },
            "series"   : [
                {
                    "name"        : "Browsers",
                    "colorByPoint": true,
                    "data"        : [
                        {
                            "name"     : "Chrome",
                            "y"        : 62.74,
                            "drilldown": "Chrome"
                        },
                        {
                            "name"     : "Firefox",
                            "y"        : 10.57,
                            "drilldown": "Firefox"
                        },
                        {
                            "name"     : "Internet Explorer",
                            "y"        : 7.23,
                            "drilldown": "Internet Explorer"
                        },
                        {
                            "name"     : "Safari",
                            "y"        : 5.58,
                            "drilldown": "Safari"
                        },
                        {
                            "name"     : "Edge",
                            "y"        : 4.02,
                            "drilldown": "Edge"
                        },
                        {
                            "name"     : "Opera",
                            "y"        : 1.92,
                            "drilldown": "Opera"
                        },
                        {
                            "name"     : "Other",
                            "y"        : 7.62,
                            "drilldown": null
                        }
                    ]
                }
            ],
            "drilldown": {
                "series": [
                    {
                        "name": "Chrome",
                        "id"  : "Chrome",
                        "data": [
                            [
                                "v65.0",
                                0.1
                            ],
                            [
                                "v64.0",
                                1.3
                            ],
                            [
                                "v63.0",
                                53.02
                            ],
                            [
                                "v62.0",
                                1.4
                            ],
                            [
                                "v61.0",
                                0.88
                            ],
                            [
                                "v60.0",
                                0.56
                            ],
                            [
                                "v59.0",
                                0.45
                            ],
                            [
                                "v58.0",
                                0.49
                            ],
                            [
                                "v57.0",
                                0.32
                            ],
                            [
                                "v56.0",
                                0.29
                            ],
                            [
                                "v55.0",
                                0.79
                            ],
                            [
                                "v54.0",
                                0.18
                            ],
                            [
                                "v51.0",
                                0.13
                            ],
                            [
                                "v49.0",
                                2.16
                            ],
                            [
                                "v48.0",
                                0.13
                            ],
                            [
                                "v47.0",
                                0.11
                            ],
                            [
                                "v43.0",
                                0.17
                            ],
                            [
                                "v29.0",
                                0.26
                            ]
                        ]
                    },
                    {
                        "name": "Firefox",
                        "id"  : "Firefox",
                        "data": [
                            [
                                "v58.0",
                                1.02
                            ],
                            [
                                "v57.0",
                                7.36
                            ],
                            [
                                "v56.0",
                                0.35
                            ],
                            [
                                "v55.0",
                                0.11
                            ],
                            [
                                "v54.0",
                                0.1
                            ],
                            [
                                "v52.0",
                                0.95
                            ],
                            [
                                "v51.0",
                                0.15
                            ],
                            [
                                "v50.0",
                                0.1
                            ],
                            [
                                "v48.0",
                                0.31
                            ],
                            [
                                "v47.0",
                                0.12
                            ]
                        ]
                    },
                    {
                        "name": "Internet Explorer",
                        "id"  : "Internet Explorer",
                        "data": [
                            [
                                "v11.0",
                                6.2
                            ],
                            [
                                "v10.0",
                                0.29
                            ],
                            [
                                "v9.0",
                                0.27
                            ],
                            [
                                "v8.0",
                                0.47
                            ]
                        ]
                    },
                    {
                        "name": "Safari",
                        "id"  : "Safari",
                        "data": [
                            [
                                "v11.0",
                                3.39
                            ],
                            [
                                "v10.1",
                                0.96
                            ],
                            [
                                "v10.0",
                                0.36
                            ],
                            [
                                "v9.1",
                                0.54
                            ],
                            [
                                "v9.0",
                                0.13
                            ],
                            [
                                "v5.1",
                                0.2
                            ]
                        ]
                    },
                    {
                        "name": "Edge",
                        "id"  : "Edge",
                        "data": [
                            [
                                "v16",
                                2.6
                            ],
                            [
                                "v15",
                                0.92
                            ],
                            [
                                "v14",
                                0.4
                            ],
                            [
                                "v13",
                                0.1
                            ]
                        ]
                    },
                    {
                        "name": "Opera",
                        "id"  : "Opera",
                        "data": [
                            [
                                "v50.0",
                                0.96
                            ],
                            [
                                "v49.0",
                                0.82
                            ],
                            [
                                "v12.1",
                                0.14
                            ]
                        ]
                    }
                ]
            }
        });
    },
    pieSemiCircle = function () {
        Highcharts.chart('pieSemiCircle', {
            chart      : {
                plotBackgroundColor: null,
                plotBorderWidth    : 0,
                plotShadow         : false
            },
            title      : {
                text         : 'Browser<br>shares<br>2017',
                align        : 'center',
                verticalAlign: 'middle',
                y            : 40
            },
            tooltip    : {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled : true,
                        distance: -50,
                        style   : {
                            fontWeight: 'bold',
                            color     : 'white'
                        }
                    },
                    startAngle: -90,
                    endAngle  : 90,
                    center    : [ '50%', '75%' ]
                }
            },
            series     : [ {
                type     : 'pie',
                name     : 'Browser share',
                innerSize: '50%',
                data     : [
                    [ 'Chrome', 58.9 ],
                    [ 'Firefox', 13.29 ],
                    [ 'Internet Explorer', 13 ],
                    [ 'Edge', 3.78 ],
                    [ 'Safari', 3.42 ],
                    {
                        name      : 'Other',
                        y         : 7.61,
                        dataLabels: {
                            enabled: false
                        }
                    }
                ]
            } ]
        });
    },
    pieDrilDown = function () {
        Highcharts.chart('pieDrilDown', {
            chart      : {
                type: 'pie'
            },
            title      : {
                text: 'Browser market shares. January, 2018'
            },
            subtitle   : {
                text: 'Click the slices to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
            },
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true,
                        format : '{point.name}: {point.y:.1f}%'
                    }
                }
            },
            tooltip    : {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat : '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
            },
            "series"   : [
                {
                    "name"        : "Browsers",
                    "colorByPoint": true,
                    "data"        : [
                        {
                            "name"     : "Chrome",
                            "y"        : 62.74,
                            "drilldown": "Chrome"
                        },
                        {
                            "name"     : "Firefox",
                            "y"        : 10.57,
                            "drilldown": "Firefox"
                        },
                        {
                            "name"     : "Internet Explorer",
                            "y"        : 7.23,
                            "drilldown": "Internet Explorer"
                        },
                        {
                            "name"     : "Safari",
                            "y"        : 5.58,
                            "drilldown": "Safari"
                        },
                        {
                            "name"     : "Edge",
                            "y"        : 4.02,
                            "drilldown": "Edge"
                        },
                        {
                            "name"     : "Opera",
                            "y"        : 1.92,
                            "drilldown": "Opera"
                        },
                        {
                            "name"     : "Other",
                            "y"        : 7.62,
                            "drilldown": null
                        }
                    ]
                }
            ],
            "drilldown": {
                "series": [
                    {
                        "name": "Chrome",
                        "id"  : "Chrome",
                        "data": [
                            [
                                "v65.0",
                                0.1
                            ],
                            [
                                "v64.0",
                                1.3
                            ],
                            [
                                "v63.0",
                                53.02
                            ],
                            [
                                "v62.0",
                                1.4
                            ],
                            [
                                "v61.0",
                                0.88
                            ],
                            [
                                "v60.0",
                                0.56
                            ],
                            [
                                "v59.0",
                                0.45
                            ],
                            [
                                "v58.0",
                                0.49
                            ],
                            [
                                "v57.0",
                                0.32
                            ],
                            [
                                "v56.0",
                                0.29
                            ],
                            [
                                "v55.0",
                                0.79
                            ],
                            [
                                "v54.0",
                                0.18
                            ],
                            [
                                "v51.0",
                                0.13
                            ],
                            [
                                "v49.0",
                                2.16
                            ],
                            [
                                "v48.0",
                                0.13
                            ],
                            [
                                "v47.0",
                                0.11
                            ],
                            [
                                "v43.0",
                                0.17
                            ],
                            [
                                "v29.0",
                                0.26
                            ]
                        ]
                    },
                    {
                        "name": "Firefox",
                        "id"  : "Firefox",
                        "data": [
                            [
                                "v58.0",
                                1.02
                            ],
                            [
                                "v57.0",
                                7.36
                            ],
                            [
                                "v56.0",
                                0.35
                            ],
                            [
                                "v55.0",
                                0.11
                            ],
                            [
                                "v54.0",
                                0.1
                            ],
                            [
                                "v52.0",
                                0.95
                            ],
                            [
                                "v51.0",
                                0.15
                            ],
                            [
                                "v50.0",
                                0.1
                            ],
                            [
                                "v48.0",
                                0.31
                            ],
                            [
                                "v47.0",
                                0.12
                            ]
                        ]
                    },
                    {
                        "name": "Internet Explorer",
                        "id"  : "Internet Explorer",
                        "data": [
                            [
                                "v11.0",
                                6.2
                            ],
                            [
                                "v10.0",
                                0.29
                            ],
                            [
                                "v9.0",
                                0.27
                            ],
                            [
                                "v8.0",
                                0.47
                            ]
                        ]
                    },
                    {
                        "name": "Safari",
                        "id"  : "Safari",
                        "data": [
                            [
                                "v11.0",
                                3.39
                            ],
                            [
                                "v10.1",
                                0.96
                            ],
                            [
                                "v10.0",
                                0.36
                            ],
                            [
                                "v9.1",
                                0.54
                            ],
                            [
                                "v9.0",
                                0.13
                            ],
                            [
                                "v5.1",
                                0.2
                            ]
                        ]
                    },
                    {
                        "name": "Edge",
                        "id"  : "Edge",
                        "data": [
                            [
                                "v16",
                                2.6
                            ],
                            [
                                "v15",
                                0.92
                            ],
                            [
                                "v14",
                                0.4
                            ],
                            [
                                "v13",
                                0.1
                            ]
                        ]
                    },
                    {
                        "name": "Opera",
                        "id"  : "Opera",
                        "data": [
                            [
                                "v50.0",
                                0.96
                            ],
                            [
                                "v49.0",
                                0.82
                            ],
                            [
                                "v12.1",
                                0.14
                            ]
                        ]
                    }
                ]
            }
        });
    },
    solidGauge = function () {
        var gaugeOptions = {
            chart      : {
                type: 'solidgauge'
            },
            title      : null,
            pane       : {
                center    : [ '50%', '85%' ],
                size      : '140%',
                startAngle: -90,
                endAngle  : 90,
                background: {
                    backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                    innerRadius    : '60%',
                    outerRadius    : '100%',
                    shape          : 'arc'
                }
            },
            tooltip    : {
                enabled: false
            },
            yAxis      : {
                stops            : [
                    [ 0.1, '#55BF3B' ],
                    [ 0.5, '#DDDF0D' ],
                    [ 0.9, '#DF5353' ]
                ],
                lineWidth        : 0,
                minorTickInterval: null,
                tickAmount       : 2,
                title            : {
                    y: -70
                },
                labels           : {
                    y: 16
                }
            },
            plotOptions: {
                solidgauge: {
                    dataLabels: {
                        y          : 5,
                        borderWidth: 0,
                        useHTML    : true
                    }
                }
            }
        };
        var chartSpeed = Highcharts.chart('container-speed', Highcharts.merge(gaugeOptions, {
            yAxis  : {
                min  : 0,
                max  : 200,
                title: {
                    text: 'Speed'
                }
            },
            credits: {
                enabled: false
            },
            series : [ {
                name      : 'Speed',
                data      : [ 80 ],
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                    '<span style="font-size:12px;color:silver">km/h</span></div>'
                },
                tooltip   : {
                    valueSuffix: ' km/h'
                }
            } ]
        }));
        var chartRpm = Highcharts.chart('container-rpm', Highcharts.merge(gaugeOptions, {
            yAxis : {
                min  : 0,
                max  : 5,
                title: {
                    text: 'RPM'
                }
            },
            series: [ {
                name      : 'RPM',
                data      : [ 1 ],
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.1f}</span><br/>' +
                    '<span style="font-size:12px;color:silver">* 1000 / min</span></div>'
                },
                tooltip   : {
                    valueSuffix: ' revolutions/min'
                }
            } ]
        }));
        setInterval(function () {
            var point,
                newVal,
                inc;
            if (chartSpeed) {
                point = chartSpeed.series[ 0 ].points[ 0 ];
                inc = Math.round((Math.random() - 0.5) * 100);
                newVal = point.y + inc;
                if (newVal < 0 || newVal > 200) {
                    newVal = point.y - inc;
                }
                point.update(newVal);
            }
            if (chartRpm) {
                point = chartRpm.series[ 0 ].points[ 0 ];
                inc = Math.random() - 0.5;
                newVal = point.y + inc;
                if (newVal < 0 || newVal > 5) {
                    newVal = point.y - inc;
                }
                point.update(newVal);
            }
        }, 2000);
    };
var ChartHigh = function () {
    "use strict";
    return {
        init: function () {
            ChartSpline();
            colunmDrildown();
            pieSemiCircle();
            pieDrilDown();
            solidGauge();
        }
    }
}();
$(function () {
    ChartHigh.init();
});