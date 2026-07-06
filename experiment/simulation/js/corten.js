"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // RAW DATA USED IN THE SIMULATION
  // Material Corten Steel
  const stress = [60, 180, 300, 380, 430, 450, 500, 560, 610, 635, 600, 560];
  const strain = [
    0.0005, 0.001, 0.0015, 0.002, 0.003, 0.005, 0.01, 0.02, 0.05, 0.1, 0.14,
    0.17,
  ];
  const youngM = [
    120000, 180000, 200000, 190000, 143333, 90000, 50000, 28000, 12200, 6350,
    4286, 3294,
  ];
  const load = [
    7620, 22860, 38100, 48260, 54610, 57150, 63500, 71120, 77470, 80650, 76200,
    71120,
  ];
  const elongation = [
    0.025, 0.051, 0.076, 0.102, 0.152, 0.254, 0.508, 1.016, 2.54, 5.08, 7.112,
    8.636,
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
