"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // RAW DATA USED IN THE SIMULATION
  // Material ASTM A53
  const stress1 = [
    40, 120, 220, 255, 260, 255, 250, 250, 300, 340, 380, 420, 450, 470, 455,
  ];
  const strain1 = [
    0.006, 0.01, 0.02, 0.03, 0.03, 0.04, 0.05, 0.05, 0.07, 0.1, 0.12, 0.15,
    0.17, 0.2, 0.20625,
  ];

  // Material Corten Steel
  const stress2 = [60, 180, 300, 380, 430, 450, 500, 560, 610, 635, 600, 560];
  const strain2 = [
    0.0005, 0.001, 0.0015, 0.002, 0.003, 0.005, 0.01, 0.02, 0.05, 0.1, 0.14,
    0.17,
  ];

  // Material Mild Steel
  const stress3 = [
    30, 70, 120, 180, 230, 250, 255, 250, 255, 270, 300, 340, 390, 430, 465,
    490, 510, 520, 515, 500, 485, 470, 460, 450, 440, 430,
  ];
  const strain3 = [
    0.0015, 0.003, 0.0045, 0.006, 0.0075, 0.009, 0.0105, 0.012, 0.015, 0.02,
    0.03, 0.04, 0.06, 0.08, 0.1, 0.12, 0.14, 0.16, 0.18, 0.2, 0.22, 0.24, 0.25,
    0.26, 0.27, 0.28,
  ];

  graph();

  function graph() {
    let chart1 = {
      x: strain1,
      y: stress1,
      type: "lines+markers",
      name: "ASTM A53",
    };
    let chart2 = {
      x: strain2,
      y: stress2,
      type: "lines+markers",
      name: "Corten Steel",
    };

    let chart3 = {
      x: strain3,
      y: stress3,
      type: "lines+markers",
      name: "Mild Steel",
    };
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
    let data = [chart1, chart2, chart3];
    Plotly.newPlot(chartContainer, data, layout);
  }
});
