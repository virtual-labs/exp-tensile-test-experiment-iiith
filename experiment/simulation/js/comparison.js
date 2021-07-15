'use strict';

document.addEventListener('DOMContentLoaded', function() {

    // RAW DATA USED IN THE SIMULATION
    // Material ASTM A53
    const stress1 = [41.73158, 127.9769, 230.3583, 233.6969, 242.0432, 229.8019, 229.5237, 229.5237, 271.5335, 292.1211, 313.2651, 323.4198, 332.4616, 333.8527, 333.8527];
    const strain1 = [0.00625, 0.0125, 0.025, 0.03125, 0.0375, 0.04375, 0.05, 0.05625, 0.075, 0.1, 0.125, 0.15, 0.175, 0.2, 0.20625];

    // Material Corten Steel
    const stress2 = [52.46200115, 160.8834702, 279.7973394, 384.7213417, 412.7010757, 412.7010757, 419.6960092, 580.5794794, 699.4933486, 751.9553498, 682.0060149, 647.0313475];
    const strain2 = [0.00025, 0.00075, 0.00125, 0.00175, 0.0025, 0.004, 0.01, 0.02, 0.05, 0.14, 0.2, 0.23];

    // Material Mild Steel
    const stress3 = [10.61299177, 20.49405306, 32.57090576, 40.07319305, 72.27813358, 103.3851784, 139.2497713, 209.5150961, 273.4675206, 345.4711802, 436.5965233, 527.5388838, 565.9652333, 649.0393413, 700.8234218, 742.5434584, 756.6331199, 789.5699909, 797.621226, 801.4638609, 806.0384263, 807.5022873, 805.6724611, 801.2808783, 773.6505032, 747.904849];
    const strain3 = [0.00142, 0.00285, 0.00428, 0.00571, 0.00714, 0.00857, 0.01, 0.01142, 0.01285, 0.01428, 0.01574, 0.01714, 0.01857, 0.02, 0.02142, 0.02285, 0.02428, 0.025714, 0.02714, 0.02857, 0.03, 0.03142, 0.03285, 0.03428, 0.03571, 0.03714];


    graph();

    function graph() {
        let chart1 = {
            x: strain1,
            y: stress1,
            type: 'markers',
            name: "ASTM A53"
        };
        let chart2 = {
            x: strain2,
            y: stress2,
            type: 'markers',
            name: "Corten Steel"
        };

        let chart3 = {
            x: strain3,
            y: stress3,
            type: 'markers',
            name: "Mild Steel"
        };
        let layout = {
            title: {
                text: "Stress v/s Strain"
            },
            yaxis: {
                title: "Stress (MPa)"
            },
            xaxis: {
                title: "%Strain"
            }
        };
        let data = [chart1, chart2, chart3];
        console.log(data[0].length);
        Plotly.newPlot(chartContainer, data, layout);
    }
})