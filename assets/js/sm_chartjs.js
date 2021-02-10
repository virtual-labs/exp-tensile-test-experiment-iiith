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
        var ctx4 = document.getElementById('chartLine2');
        var myChart4 = new Chart(ctx4, {
            type   : 'line',
            data   : {
                labels  : [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun' ],
                datasets: [ {
                    data       : [ 12, 39, 20, 10, 20, 18 ],
                    borderColor: '#5797fc',
                    borderWidth: 1,
                    fill       : false
                }, {
                    data       : [ 30, 50, 28, 23, 25, 28 ],
                    borderColor: '#4ecc48',
                    borderWidth: 1,
                    fill       : false
                } ]
            },
            options: {
                legend: {
                    display: false,
                    labels : {
                        display: false
                    }
                },
                scales: {
                    yAxes: [ {
                        ticks: {
                            beginAtZero: true,
                            fontSize   : 12,
                            max        : 70
                        }
                    } ],
                    xAxes: [ {
                        ticks: {
                            beginAtZero: true,
                            fontSize   : 12
                        }
                    } ]
                }
            }
        });
    },
    areaChart = function () {
        $(window).on("load", function () {
            //Get the context of the Chart canvas element we want to select
            var ctx = $("#chartLine3");
            // Chart Options
            var chartOptions = {
                responsive         : true,
                maintainAspectRatio: true,
                legend             : {
                    position: 'bottom',
                },
                hover              : {
                    mode: 'label'
                },
                scales             : {
                    xAxes: [ {
                        display   : true,
                        gridLines : {
                            color    : "#f3f3f3",
                            drawTicks: false,
                        },
                        scaleLabel: {
                            display    : true,
                            labelString: 'Month'
                        }
                    } ],
                    yAxes: [ {
                        display   : true,
                        gridLines : {
                            color    : "#f3f3f3",
                            drawTicks: false,
                        },
                        scaleLabel: {
                            display    : true,
                            labelString: 'Value'
                        }
                    } ]
                },
                title              : {
                    display: true,
                    text   : 'Chart.js Line Chart - Legend'
                }
            };
            // Chart Data
            var chartData = {
                labels  : [ "January", "February", "March", "April", "May", "June", "July" ],
                datasets: [ {
                    label                : "My First dataset",
                    data                 : [ 0, 90, 120, 240, 140, 250, 190 ],
                    backgroundColor      : "#2d353c",
                    borderColor          : "transparent",
                    pointBorderColor     : "#007bff",
                    pointBackgroundColor : "#FFF",
                    pointBorderWidth     : 2,
                    pointHoverBorderWidth: 2,
                    pointRadius          : 4,
                } ]
            };
            var config = {
                type: 'line',
                // Chart Options
                options: chartOptions,
                // Chart Data
                data: chartData
            };
            // Create the chart
            var areaChart = new Chart(ctx, config);
        });
    },
    barChart = function () {
        var ctx = document.getElementById('sales_chart').getContext('2d');
        var myBarChart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'bar',
            // The data for our dataset
            data: {
                labels  : [ "Bitcoin", "Ethereum", "Ripple", "BTC Cash", "Litecoin" ],
                datasets: [ {
                    label               : "Bitcoin",
                    data                : [ 40, 90, 210, 160, 230 ],
                    backgroundColor     : '#ffa534',
                    borderColor         : '#ffa534',
                    pointBorderColor    : '#ffffff',
                    pointBackgroundColor: '#ffa534',
                    pointBorderWidth    : 2,
                    pointRadius         : 4
                }, {
                    label               : "My Second dataset",
                    data                : [ 160, 140, 20, 270, 110 ],
                    backgroundColor     : '#3d74f1',
                    borderColor         : '#3d74f1',
                    pointBorderColor    : '#ffffff',
                    pointBackgroundColor: '#3d74f1',
                    pointBorderWidth    : 2,
                    pointRadius         : 4
                } ]
            },
            // Configuration options go here
            options: {
                maintainAspectRatio: true,
                legend             : {
                    display: false
                },
                scales  : {
                    xAxes: [ {
                        display  : true,
                        gridLines: {
                            zeroLineColor     : '#e7ecf0',
                            color             : '#e7ecf0',
                            borderDash        : [ 5, 5, 5 ],
                            zeroLineBorderDash: [ 5, 5, 5 ],
                            drawBorder        : false
                        }
                    } ],
                    yAxes: [ {
                        display  : true,
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
//              tension: 0.4,
                        borderWidth: 1
                    },
                    point: {
                        radius     : 2,
                        hitRadius  : 10,
                        hoverRadius: 6,
                        borderWidth: 4
                    }
                }
            }
        });
    },
    donutChart = function () {
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
        if ($("#donutChart1").length) {
            var donutChart1 = $("#donutChart1");
            // donut chart data
            var data1 = {
                labels  : [ "Red", "Blue", "Yellow", "Green", "Purple" ],
                datasets: [ {
                    data                : [ 300, 50, 100, 30, 70 ],
                    backgroundColor     : [ "#5797fc", "#7e6fff", "#4ecc48", "#ffcc29", "#f37070" ],
                    hoverBackgroundColor: [ "#5797fc", "#7e6fff", "#4ecc48", "#ffcc29", "#f37070" ],
                    borderWidth         : 6,
                    hoverBorderColor    : 'transparent'
                } ]
            };
            // -----------------
            // init donut chart
            // -----------------
            new Chart(donutChart1, {
                type   : 'doughnut',
                data   : data1,
                options: {
                    legend          : {
                        display: false
                    },
                    animation       : {
                        animateScale: true
                    },
                    cutoutPercentage: 80
                }
            });
        }
    },
    pieChart = function () {
        $(window).on("load", function () {
            //Get the context of the Chart canvas element we want to select
            var ctx = $("#simple-pie-chart");
            // Chart Options
            var chartOptions = {
                responsive                 : true,
                maintainAspectRatio        : true,
                responsiveAnimationDuration: 500,
            };
            // Chart Data
            var chartData = {
                labels  : [ "January", "February", "March", "April", "May" ],
                datasets: [ {
                    label          : "My First dataset",
                    data           : [ 85, 65, 34, 45, 35 ],
                    backgroundColor: [ "#5797fc", "#7e6fff", "#4ecc48", "#ffcc29", "#f37070" ],
                } ]
            };
            var config = {
                type: 'pie',
                // Chart Options
                options: chartOptions,
                data: chartData
            };
            // Create the chart
            var pieSimpleChart = new Chart(ctx, config);
        });
    }
var chartJS = function () {
    "use strict";
    return {
        init: function () {
            lineChart();
            areaChart();
            barChart();
            donutChart();
            pieChart()
        }
    }
}();
$(function () {
    chartJS.init();
});