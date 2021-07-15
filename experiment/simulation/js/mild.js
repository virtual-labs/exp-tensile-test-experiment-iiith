'use strict';

document.addEventListener('DOMContentLoaded', function() {

    // RAW DATA USED IN THE SIMULATION
    // Material Mild Steel
    const stress = [10.61299177, 20.49405306, 32.57090576, 40.07319305, 72.27813358, 103.3851784, 139.2497713, 209.5150961, 273.4675206, 345.4711802, 436.5965233, 527.5388838, 565.9652333, 649.0393413, 700.8234218, 742.5434584, 756.6331199, 789.5699909, 797.621226, 801.4638609, 806.0384263, 807.5022873, 805.6724611, 801.2808783, 773.6505032, 747.904849];
    const strain = [0.00142, 0.00285, 0.00428, 0.00571, 0.00714, 0.00857, 0.01, 0.01142, 0.01285, 0.01428, 0.01574, 0.01714, 0.01857, 0.02, 0.02142, 0.02285, 0.02428, 0.025714, 0.02714, 0.02857, 0.03, 0.03142, 0.03285, 0.03428, 0.03571, 0.03714];
    const youngM = [7473.937863, 7190.895812, 7610.024711, 7018.072337, 10122.9879, 12063.61475, 13924.97713, 18346.33065, 1281.51911, 24192.65968, 27738.02562, 30778.23126, 30477.39544, 32451.96706, 32718.18029, 32496.43144, 31162.81383, 30705.84082, 29389.13876, 28052.63776, 26867.94754, 25700.26376, 24525.7979, 23374.58805, 21664.81387, 20137.44882];
    const load = [1160, 2240, 3560, 4380, 7900, 11300, 15220, 22900, 29890, 37760, 47720, 57660, 61860, 70940, 76600, 81160, 82700, 86300, 87180, 87600, 88100, 88260, 88060, 87580, 84560, 81746];
    const elongation = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13];



    const restartButton = document.getElementById('restart');
    const pauseButton = document.getElementById('pause');
    const playButton = document.getElementById('play');
    const slider = document.getElementById('speed');
    const output = document.getElementById('demo_speed');
    output.innerHTML = (slider.value) / 4;
    slider.oninput = function() {
        output.innerHTML = (this.value) / 4;
        fps = originalFPS * (output.innerHTML);
        restart();
    };

    restartButton.addEventListener('click', function() { restart(); });
    pauseButton.addEventListener('click', function() { pause(); });
    playButton.addEventListener('click', function() { play(); });

    function setAll() {
        topPlate = [
            [plateStartX, plateStartY],
            [plateStartX + plateWidth1, plateStartY],
            [plateStartX + plateWidth1, plateStartY + plateHeight1],
            [plateStartX + plateWidth2, plateStartY + plateHeight1],
            [plateStartX + plateWidth2, plateStartY + plateHeight1 + plateHeight2],
            [plateStartX + plateWidth1 - plateWidth2, plateStartY + plateHeight1 + plateHeight2],
            [plateStartX + plateWidth1 - plateWidth2, plateStartY + plateHeight1],
            [plateStartX, plateStartY + plateHeight1],

        ];

        bottomPlate = [
            [plateStartX + plateWidth1 - plateWidth2, bottomPlateStartY],
            [plateStartX + plateWidth2, bottomPlateStartY],
            [plateStartX + plateWidth2, bottomPlateStartY + plateHeight2],
            [plateStartX + plateWidth1, bottomPlateStartY + plateHeight2],
            [plateStartX + plateWidth1, bottomPlateStartY + plateHeight2 + plateHeight1],
            [plateStartX, bottomPlateStartY + plateHeight2 + plateHeight1],
            [plateStartX, bottomPlateStartY + plateHeight2],
            [plateStartX + plateWidth1 - plateWidth2, bottomPlateStartY + plateHeight2],

        ];

        upperTube = [
            [plateStartX + tubeWidth, plateStartY + plateHeight2 + plateHeight1],
            [plateStartX + tubeWidth, plateStartY + plateHeight2 + plateHeight1 + tubeHeight1],
            [plateStartX + tubeWidth2, plateStartY + plateHeight2 + plateHeight1 + tubeHeight1 + tubeHeight2],
            [plateStartX + plateWidth1 - tubeWidth2, plateStartY + plateHeight2 + plateHeight1 + tubeHeight1 + tubeHeight2],
            [plateStartX + plateWidth1 - tubeWidth, plateStartY + plateHeight2 + plateHeight1 + tubeHeight1],
            [plateStartX + plateWidth1 - tubeWidth, plateStartY + plateHeight2 + plateHeight1],
        ];

        lowerTube = [
            [plateStartX + tubeWidth, bottomPlateStartY],
            [plateStartX + tubeWidth, bottomPlateStartY - tubeHeight1],
            [plateStartX + tubeWidth2, bottomPlateStartY - tubeHeight1 - tubeHeight2],
            [plateStartX + plateWidth1 - tubeWidth2, bottomPlateStartY - tubeHeight1 - tubeHeight2],
            [plateStartX + plateWidth1 - tubeWidth, bottomPlateStartY - tubeHeight1],
            [plateStartX + plateWidth1 - tubeWidth, bottomPlateStartY],

        ];
        step = 0;

        document.getElementById("stress").innerHTML = "0.0 Mpa";
        document.getElementById("strain").innerHTML = "0.0";
        document.getElementById("young").innerHTML = "0.0 Mpa";
        document.getElementById("load").innerHTML = "0.0 N";
        document.getElementById("elongation").innerHTML = "0.0 mm";

    }

    function restart() {
        window.clearTimeout(tmHandle);
        setAll();
        graph();
        play();
    }

    function play() {
        tmHandle = window.setTimeout(draw, 1000 / fps);
        pauseButton.removeAttribute("disabled");
        restartButton.removeAttribute("disabled");
        playButton.setAttribute("disabled", "true");
    }

    function pause() {
        window.clearTimeout(tmHandle);
        pauseButton.setAttribute("disabled", "true");
        playButton.removeAttribute("disabled");
    }

    function drawObject(ctx, obj, color) {
        ctx.save();
        ctx.fillStyle = color;
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.moveTo(obj[0][0], obj[0][1]);

        for (let i = 0; i < obj.length; ++i) {
            const next = (i + 1) % obj.length;
            ctx.lineTo(obj[next][0], obj[next][1]);
        }

        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    }

    function move(tube, flag) {
        for (let i = 0; i < tube.length; ++i) {
            tube[i][1] += flag;
        }
    }

    let topPlate = [];
    let bottomPlate = [];
    let upperTube = [];
    let lowerTube = [];


    const canvas = document.getElementById("main");
    canvas.width = 900;
    canvas.height = 1000;
    canvas.style = "border:3px solid;";
    const ctx = canvas.getContext("2d");

    const fill = "#A9A9A9";
    const lineWidth = 1.5;
    const originalFPS = 20;
    let fps = 20;


    const plateStartX = 250;
    const plateWidth1 = 400;
    const plateWidth2 = 300;
    const plateStartY = 150;
    const bottomPlateStartY = 750;
    const plateHeight1 = 100;
    const plateHeight2 = 60;
    const tubeWidth = 240;
    const tubeWidth2 = 215;
    const tubeHeight1 = 220;
    const tubeHeight2 = 35;
    let step = 0;
    let chart = [];



    setAll();
    drawStatic();
    graph();
    let tmHandle;

    function drawStatic() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = fill;
        ctx.lineWidth = lineWidth;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.fillStyle = "black";
        ctx.font = "60px Arial";
        ctx.fillText("UTM Machine", 290, 70);

        drawObject(ctx, topPlate, data.colors.platecolor);
        drawObject(ctx, bottomPlate, data.colors.platecolor);
        drawObject(ctx, upperTube, data.colors.mild);
        drawObject(ctx, lowerTube, data.colors.mild);
    }

    function draw() {

        if (topPlate[0][1] > 100 && step < stress.length) {
            move(upperTube, -1.5);
            move(lowerTube, 1.5);
            move(topPlate, -1.5);
            move(bottomPlate, 1.5);
            drawStatic();
            updateChart();
            tmHandle = window.setTimeout(draw, 4000 / fps);
        }

    }

    function graph() {
        chart = [{
            x: [0],
            y: [0],
            type: 'lines+markers'
        }];

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
        Plotly.newPlot(chartContainer, chart, layout);
    }

    function updateChart() {


        let x = strain[step];
        let y = stress[step];

        document.getElementById("stress").innerHTML = stress[step].toString();
        document.getElementById("strain").innerHTML = strain[step].toString();
        document.getElementById("young").innerHTML = youngM[step].toString();
        document.getElementById("load").innerHTML = load[step].toString();
        document.getElementById("elongation").innerHTML = elongation[step].toString();

        if (step < stress.length) {
            chart[0]['x'].push(x);
            chart[0]['y'].push(y);
            Plotly.redraw(chartContainer);
            step++;
        }
    }
})