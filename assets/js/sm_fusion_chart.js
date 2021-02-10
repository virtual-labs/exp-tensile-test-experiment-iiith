"use strict";
var fusionChart = function () {
    FusionCharts.ready(function () {
        var Chart_1 = new FusionCharts({
            type      : 'msline',
            renderAt  : 'Chart_1',
            "width"   : "100%",
            "height"  : "100%",
            dataFormat: 'json',
            dataSource: {
                "chart"     : {
                    "caption"            : "Aug 2017 - Volume Trend.",
                    "captionFont"        : "Calibri",
                    "captionFontSize"    : "18",
                    "subcaption"         : "Project Volume",
                    "linethickness"      : "2",
                    "numberPrefix"       : "",
                    "showvalues"         : "0",
                    "formatnumberscale"  : "1",
                    "labeldisplay"       : "NORMAL",
                    "slantlabels"        : "1",
                    "divLineAlpha"       : "40",
                    "anchoralpha"        : "0",
                    "animation"          : "1",
                    "legendborderalpha"  : "20",
                    "drawCrossLine"      : "1",
                    "crossLineColor"     : "#0d0d0d",
                    "crossLineAlpha"     : "100",
                    "tooltipGrayOutColor": "#80bfff",
                    "theme"              : "zune"
                },
                "categories": [ {
                    "category": [ {
                        "label": "Week-1"
                    }, {
                        "label": "Week-2"
                    }, {
                        "label": "Week-3"
                    }, {
                        "label": "Week-4"
                    } ]
                } ],
                "dataset"   : [ {
                    "seriesname": "Billing",
                    "data"      : [ {
                        "value": "786000"
                    }, {
                        "value": "711700"
                    }, {
                        "value": "387800"
                    }, {
                        "value": "258300"
                    } ]
                }, {
                    "seriesname": "Upgrades",
                    "data"      : [ {
                        "value": "1174600"
                    }, {
                        "value": "1222800"
                    }, {
                        "value": "1075600"
                    }, {
                        "value": "978700"
                    } ]
                }, {
                    "seriesname": "Retention",
                    "data"      : [ {
                        "value": "134800"
                    }, {
                        "value": "160100"
                    }, {
                        "value": "168800"
                    }, {
                        "value": "196300"
                    } ]
                } ]
            }
        }).render();
    });

    FusionCharts.ready(function () {
        var Chart_2 = new FusionCharts({
            type      : 'MSColumn2D',
            renderAt  : 'Chart_2',
            "width"   : "100%",
            "height"  : "100%",
            dataFormat: 'json',
            dataSource: {
                "chart"     : {
                    "caption"          : "Aug 2017 - AHT",
                    // "subcaption": "In minutes",
                    "captionFont"      : "Calibri",
                    "captionFontSize"  : "18",
                    "yaxismaxvalue"    : "10",
                    "decimals"         : "2",
                    "numberprefix"     : "",
                    "numbersuffix"     : "",
                    "placevaluesinside": "1",
                    "rotatevalues"     : "1",
                    "divlinealpha"     : "50",
                    "plotfillalpha"    : "80",
                    "drawCrossLine"    : "1",
                    "crossLineColor"   : "#cc3300",
                    "crossLineAlpha"   : "100",
                    "theme"            : "zune"
                },
                "categories": [ {
                    "category": [ {
                        "label": "Week-1"
                    },
                        {
                            "label": "Week-2"
                        },
                        {
                            "label": "Week-3"
                        },
                        {
                            "label": "Week-4"
                        },
                        {
                            "label": "Week-5"
                        }
                    ]
                } ],
                "dataset"   : [ {
                    "seriesname": "Billing",
                    "data"      : [ {
                        "value": "4.63"
                    },
                        {
                            "value": "3.16"
                        },
                        {
                            "value": "2.38"
                        },
                        {
                            "value": "2.38"
                        },
                        {
                            "value": "1.23"
                        }
                    ]
                },
                    {
                        "seriesname": "Upgrades",
                        "data"      : [ {
                            "value": "2.04"
                        },
                            {
                                "value": "1.26"
                            },
                            {
                                "value": "2.22"
                            },
                            {
                                "value": "3.22"
                            },
                            {
                                "value": "3.67"
                            }
                        ]
                    },
                    {
                        "seriesname": "Retention",
                        "data"      : [ {
                            "value": "8.31"
                        },
                            {
                                "value": "7.04"
                            },
                            {
                                "value": "7.99"
                            },
                            {
                                "value": "4.85"
                            },
                            {
                                "value": "6.53"
                            }
                        ]
                    }
                ]
            }
        }).render();
    });

    FusionCharts.ready(function () {
        var Chart_3 = new FusionCharts({
            type      : 'angulargauge',
            renderAt  : 'Chart_3',
            "width"   : "100%",
            "height"  : "100%",
            dataFormat: 'json',
            dataSource: {
                "chart"      : {
                    "caption"          : "Aug 2017 - Agent Utilization",
                    "captionFontSize"  : "18",
                    "subcaption"       : "Los Angeles Topanga",
                    "plotToolText"     : "Current Score: $value",
                    "theme"            : "fint",
                    "chartBottomMargin": "5",
                    "valueBelowPivot"  : "1",
                    "majorTMNumber"    : "9",
                    "minorTMNumber"    : "4",
                    "showValue"        : "0"
                },
                "colorRange" : {
                    "color": [ {
                        "minValue": "0",
                        "maxValue": "4.5",
                        "code"    : "#e44a00"
                    }, {
                        "minValue": "4.5",
                        "maxValue": "7.5",
                        "code"    : "#f8bd19"
                    }, {
                        "minValue": "7.5",
                        "maxValue": "10",
                        "code"    : "#6baa01"
                    } ]
                },
                "dials"      : {
                    "dial": [ {
                        "value"  : "8.9",
                        "bgColor": "#0075c2"
                    },
                        {
                            "value"  : "5.6",
                            "bgColor": "#1aaf5d"
                        },
                        {
                            "value"  : "3.6",
                            "bgColor": "#f2c500"
                        } ]
                },
                "trendPoints": {
                    "point": [
                        {
                            "startValue": "6.8",
                            "color"     : "#0075c2",
                            "dashed"    : "1"
                        },
                        {
                            "startValue": "9.5",
                            "color"     : "#0075c2",
                            "dashed"    : "1"
                        },
                        {
                            "startValue" : "6.8",
                            "endValue"   : "9.5",
                            "color"      : "#C0C0C0",
                            "radius"     : "185",
                            "innerRadius": "80"
                        }
                    ]
                }
            }
        }).render();
    });

    FusionCharts.ready(function () {
        var Chart_4 = new FusionCharts({
            type      : 'MSColumn2D',
            renderAt  : 'Chart_4',
            "width"   : "100%",
            "height"  : "100%",
            dataFormat: 'json',
            dataSource: {
                "chart"     : {
                    "caption"          : "Aug 2017 - CPH",
                    "subcaption"       : "In minutes",
                    "captionFont"      : "Calibri",
                    "captionFontSize"  : "18",
                    "yaxismaxvalue"    : "10",
                    "decimals"         : "2",
                    "numberprefix"     : "",
                    "numbersuffix"     : "",
                    "placevaluesinside": "1",
                    "rotatevalues"     : "1",
                    "divlinealpha"     : "50",
                    "plotfillalpha"    : "80",
                    "drawCrossLine"    : "1",
                    "crossLineColor"   : "#cc3300",
                    "crossLineAlpha"   : "100",
                    "theme"            : "zune"
                },
                "categories": [ {
                    "category": [ {
                        "label": "Week-1"
                    },
                        {
                            "label": "Week-2"
                        },
                        {
                            "label": "Week-3"
                        },
                        {
                            "label": "Week-4"
                        },
                        {
                            "label": "Week-5"
                        }
                    ]
                } ],
                "dataset"   : [ {
                    "seriesname": "Billing",
                    "data"      : [ {
                        "value": "8.63"
                    },
                        {
                            "value": "7.16"
                        },
                        {
                            "value": "5.38"
                        },
                        {
                            "value": "6.38"
                        },
                        {
                            "value": "7.23"
                        }
                    ]
                },
                    {
                        "seriesname": "Upgrades",
                        "data"      : [ {
                            "value": "3.04"
                        },
                            {
                                "value": "5.26"
                            },
                            {
                                "value": "4.22"
                            },
                            {
                                "value": "7.22"
                            },
                            {
                                "value": "4.67"
                            }
                        ]
                    },
                    {
                        "seriesname": "Retention",
                        "data"      : [ {
                            "value": "9.31"
                        },
                            {
                                "value": "5.04"
                            },
                            {
                                "value": "8.99"
                            },
                            {
                                "value": "3.85"
                            },
                            {
                                "value": "3.53"
                            }
                        ]
                    }
                ]
            }
        }).render();
    });

    FusionCharts.ready(function () {
        var Chart_5 = new FusionCharts({
            type      : 'stackedcolumn2d',
            renderAt  : 'Chart_5',
            "width"   : "100%",
            "height"  : "100%",
            dataFormat: 'json',
            dataSource: {
                "chart"     : {
                    "caption"             : "Aug 2017 - Abandon %",
                    "captionFont"         : "Calibri",
                    "captionFontSize"     : "18",
                    "subCaption"          : "For current year",
                    "xAxisname"           : "Quarter",
                    "yAxisName"           : "% Revenue",
                    "numberPrefix"        : "",
                    "stack100Percent"     : "1",
                    "decimals"            : "1",
                    "showPercentInTooltip": "1",
                    "showValues"          : "1",
                    "showPercentValues"   : "1",
                    "valueFontColor"      : "#ffffff",
                    "paletteColors"       : "#0075c2,#f45b00,#8e0000",
                    "theme"               : "fint"
                },
                "categories": [ {
                    "category": [ {
                        "label": "Week-1"
                    }, {
                        "label": "Week-2"
                    }, {
                        "label": "Week-3"
                    }, {
                        "label": "Week-4"
                    } ]
                } ],
                "dataset"   : [ {
                    "seriesname": "Answered",
                    "data"      : [ {
                        "value": "11000"
                    }, {
                        "value": "15000"
                    }, {
                        "value": "13500"
                    }, {
                        "value": "15000"
                    } ]
                }, {
                    "seriesname": "Abandoned",
                    "data"      : [ {
                        "value": "1400"
                    }, {
                        "value": "1800"
                    }, {
                        "value": "1300"
                    }, {
                        "value": "1800"
                    } ]
                } ]
            }
        }).render();
    });

    FusionCharts.ready(function () {
        var Chart_6 = new FusionCharts({
            type      : 'doughnut3d',
            renderAt  : 'Chart_6',
            "width"   : "100%",
            "height"  : "100%",
            dataFormat: 'json',
            dataSource: {
                "chart": {
                    "caption"               : "Aug 2017 - Volume Split",
                    "subCaption"            : "Last year",
                    "numberPrefix"          : "$",
                    "paletteColors"         : "#0075c2,#1aaf5d,#f2c500,#f45b00,#8e0000",
                    "bgColor"               : "#ffffff",
                    "showBorder"            : "0",
                    "use3DLighting"         : "0",
                    "showShadow"            : "0",
                    "enableSmartLabels"     : "0",
                    "startingAngle"         : "310",
                    "showLabels"            : "0",
                    "showPercentValues"     : "1",
                    "showLegend"            : "1",
                    "legendShadow"          : "0",
                    "legendBorderAlpha"     : "0",
                    "decimals"              : "0",
                    "captionFontSize"       : "14",
                    "subcaptionFontSize"    : "14",
                    "subcaptionFontBold"    : "0",
                    "toolTipColor"          : "#ffffff",
                    "toolTipBorderThickness": "0",
                    "toolTipBgColor"        : "#000000",
                    "toolTipBgAlpha"        : "80",
                    "toolTipBorderRadius"   : "2",
                    "toolTipPadding"        : "5",
                },
                "data" : [
                    {
                        "label": "Billing",
                        "value": "28504"
                    },
                    {
                        "label": "Upgrades",
                        "value": "14633"
                    },
                    {
                        "label": "Retention",
                        "value": "10507"
                    }
                ]
            }
        }).render();
    });
};

var ChartFusion = function () {
    "use strict";
    return {
        init: function () {
            fusionChart();
        }
    }
}();
$(function () {
    ChartFusion.init();
});