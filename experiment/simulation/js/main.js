'use strict';

document.addEventListener('DOMContentLoaded', function() {

    // RAW DATA USED IN THE SIMULATION
    // Material ASTM A53
    const stress = [41.73158, 127.9769, 230.3583, 233.6969, 242.0432, 229.8019, 229.5237, 229.5237, 271.5335, 292.1211, 313.2651, 323.4198, 332.4616, 333.8527, 333.8527];
    const strain = [0.00625, 0.0125, 0.025, 0.03125, 0.0375, 0.04375, 0.05, 0.05625, 0.075, 0.1, 0.125, 0.15, 0.175, 0.2, 0.20625];
    const youngM = [6677.0528, 10238.152, 9214.332, 7478.3008, 6454.485333, 5252.614857, 4590.474, 4080.421333, 3620.446667, 2921.211, 2506.1208, 2156.132, 1899.780571, 1669.2635, 1618.679758];
    const load = [7500, 23000, 41400, 42000, 43500, 41300, 41250, 41250, 48800, 52500, 56300, 58125, 59750, 60000, 60000];
    const elongation = [0.85, 1.7, 3.4, 4.25, 5.1, 5.95, 6.8, 7.65, 10.2, 13.6, 17, 20.4, 23.8, 27.2, 28.05];



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
        drawObject(ctx, upperTube, data.colors.astm);
        drawObject(ctx, lowerTube, data.colors.astm);
    }

    function draw() {

        if (topPlate[0][1] > 100 && step < stress.length) {
            move(upperTube, -2.5);
            move(lowerTube, 2.5);
            move(topPlate, -2.5);
            move(bottomPlate, 2.5);
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