'use strict';

document.addEventListener('DOMContentLoaded', function() {

    // RAW DATA USED IN THE SIMULATION
    // Material Corten Steel
    const stress = [52.46, 160.88, 279.79, 384.72, 412.70, 412.70, 419.69, 580.57, 699.49, 751.95, 682.006, 647.03];
    const strain = [0.00025, 0.00075, 0.00125, 0.00175, 0.0025, 0.004, 0.01, 0.02, 0.05, 0.14, 0.2, 0.23];
    const youngM = [209848.004, 214511.29, 223837.87, 219840.76, 165080.43, 103175.26, 41969.60, 29028.97, 13989.86, 5371.10, 3410.030, 2813.17];
    const load = [6672.33, 20461.81, 35585.77, 48930.43, 52489.01, 52489.01, 53378.65, 73840.47, 88964.43, 95636.76, 86740.32, 82292.09];
    const elongation = [0.012, 0.03, 0.06, 0.08, 0.12, 0.203, 0.50, 1.01, 2.54, 7.11, 10.16, 11.68];


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
    canvas.width = 890;
    canvas.height = 1200;
    // canvas.style = "border:3px solid;";
    const ctx = canvas.getContext("2d");

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
        ctx.lineWidth = lineWidth;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.font = "60px Arial";
        ctx.fillText("UTM Machine", 290, 70);

        drawObject(ctx, topPlate, data.colors.platecolor);
        drawObject(ctx, bottomPlate, data.colors.platecolor);
        drawObject(ctx, upperTube, data.colors.corten);
        drawObject(ctx, lowerTube, data.colors.corten);
    }

    function draw() {

        if (topPlate[0][1] > 100 && step < stress.length) {
            move(upperTube, -3);
            move(lowerTube, 3);
            move(topPlate, -3);
            move(bottomPlate, 3);
            drawStatic();
            updateChart();
            tmHandle = window.setTimeout(draw, 4000 / fps);
        } else {
            pauseButton.setAttribute("disabled", "true");
            playButton.setAttribute("disabled", "true");

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