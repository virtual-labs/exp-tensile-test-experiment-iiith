"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // RAW DATA USED IN THE SIMULATION
  // Material Mild Steel
  const stress = [
    30, 70, 120, 180, 230, 250, 255, 250, 255, 270, 300, 340, 390, 430, 465,
    490, 510, 520, 515, 500, 485, 470, 460, 450, 440, 430,
  ];
  const strain = [
    0.0015, 0.003, 0.0045, 0.006, 0.0075, 0.009, 0.0105, 0.012, 0.015, 0.02,
    0.03, 0.04, 0.06, 0.08, 0.1, 0.12, 0.14, 0.16, 0.18, 0.2, 0.22, 0.24, 0.25,
    0.26, 0.27, 0.28,
  ];
  const youngM = [
    20000, 23333, 26667, 30000, 30667, 27778, 24286, 20833, 17000, 13500, 10000,
    8500, 6500, 5375, 4650, 4083, 3643, 3250, 2861, 2500, 2205, 1958, 1840,
    1731, 1630, 1536,
  ];
  const load = [
    3270, 7630, 13080, 19620, 25070, 27250, 27800, 27250, 27800, 29430, 32700,
    37060, 42510, 46870, 50690, 53410, 55590, 56680, 56140, 54500, 52870, 51230,
    50140, 49050, 47960, 46870,
  ];
  const elongation = [
    0.08, 0.15, 0.23, 0.3, 0.38, 0.45, 0.53, 0.6, 0.75, 1, 1.5, 2, 3, 4, 5, 6,
    7, 8, 9, 10, 11, 12, 12.5, 13, 13.5, 14,
  ];

  const restartButton = document.getElementById("restart");
  const pauseButton = document.getElementById("pause");
  const playButton = document.getElementById("play");
  const slider = document.getElementById("speed");
  const output = document.getElementById("demo_speed");
  output.innerHTML = slider.value / 4;
  slider.oninput = function () {
    output.innerHTML = this.value / 4;
    fps = originalFPS * output.innerHTML;
    restart();
  };

  restartButton.addEventListener("click", function () {
    restart();
  });
  pauseButton.addEventListener("click", function () {
    pause();
  });
  playButton.addEventListener("click", function () {
    play();
  });

  function setAll() {
    topPlate = [
      [plateStartX, plateStartY],
      [plateStartX + plateWidth1, plateStartY],
      [plateStartX + plateWidth1, plateStartY + plateHeight1],
      [plateStartX + plateWidth2, plateStartY + plateHeight1],
      [plateStartX + plateWidth2, plateStartY + plateHeight1 + plateHeight2],
      [
        plateStartX + plateWidth1 - plateWidth2,
        plateStartY + plateHeight1 + plateHeight2,
      ],
      [plateStartX + plateWidth1 - plateWidth2, plateStartY + plateHeight1],
      [plateStartX, plateStartY + plateHeight1],
    ];

    bottomPlate = [
      [plateStartX + plateWidth1 - plateWidth2, bottomPlateStartY],
      [plateStartX + plateWidth2, bottomPlateStartY],
      [plateStartX + plateWidth2, bottomPlateStartY + plateHeight2],
      [plateStartX + plateWidth1, bottomPlateStartY + plateHeight2],
      [
        plateStartX + plateWidth1,
        bottomPlateStartY + plateHeight2 + plateHeight1,
      ],
      [plateStartX, bottomPlateStartY + plateHeight2 + plateHeight1],
      [plateStartX, bottomPlateStartY + plateHeight2],
      [
        plateStartX + plateWidth1 - plateWidth2,
        bottomPlateStartY + plateHeight2,
      ],
    ];

    upperTube = [
      [plateStartX + tubeWidth, plateStartY + plateHeight2 + plateHeight1],
      [
        plateStartX + tubeWidth,
        plateStartY + plateHeight2 + plateHeight1 + tubeHeight1,
      ],
      [
        plateStartX + tubeWidth2,
        plateStartY + plateHeight2 + plateHeight1 + tubeHeight1 + tubeHeight2,
      ],
      [
        plateStartX + plateWidth1 - tubeWidth2,
        plateStartY + plateHeight2 + plateHeight1 + tubeHeight1 + tubeHeight2,
      ],
      [
        plateStartX + plateWidth1 - tubeWidth,
        plateStartY + plateHeight2 + plateHeight1 + tubeHeight1,
      ],
      [
        plateStartX + plateWidth1 - tubeWidth,
        plateStartY + plateHeight2 + plateHeight1,
      ],
    ];

    lowerTube = [
      [plateStartX + tubeWidth, bottomPlateStartY],
      [plateStartX + tubeWidth, bottomPlateStartY - tubeHeight1],
      [plateStartX + tubeWidth2, bottomPlateStartY - tubeHeight1 - tubeHeight2],
      [
        plateStartX + plateWidth1 - tubeWidth2,
        bottomPlateStartY - tubeHeight1 - tubeHeight2,
      ],
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
  canvas.height = 950;
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
    } else {
      pauseButton.setAttribute("disabled", "true");
      playButton.setAttribute("disabled", "true");
    }
  }

  function graph() {
    chart = [
      {
        x: [0],
        y: [0],
        type: "lines+markers",
      },
    ];

    let layout = {
      title: {
        text: "Stress v/s Strain",
      },
      yaxis: {
        title: "Stress (MPa)",
      },
      xaxis: {
        title: "Engineering Strain",
      },
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
    document.getElementById("elongation").innerHTML =
      elongation[step].toString();

    if (step < stress.length) {
      chart[0]["x"].push(x);
      chart[0]["y"].push(y);
      Plotly.redraw(chartContainer);
      step++;
    }
  }
});
