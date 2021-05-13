'use strict';

document.addEventListener('DOMContentLoaded', function(){

	// RAW DATA USED IN THE SIMULATION
	// Material ASTM A53
	const length1 = 136;
	const diameter1 = 15.127;
	const stress1 = [41.73158 , 127.9769 , 230.3583 , 233.6969 , 242.0432 , 229.8019 , 229.5237 , 229.5237 , 271.5335 , 292.1211 , 313.2651 , 323.4198 , 332.4616 , 333.8527 , 333.8527];
	const strain1 = [0.00625 , 0.0125 , 0.025 , 0.03125 , 0.0375 , 0.04375 , 0.05 , 0.05625 , 0.075 , 0.1 , 0.125 , 0.15 , 0.175 , 0.2 , 0.20625];
	const youngm1 = [6677.0528 , 10238.152 , 9214.332 , 7478.3008 , 6454.485333 , 5252.614857 , 4590.474 , 4080.421333 , 3620.446667 , 2921.211 , 2506.1208 , 2156.132 , 1899.780571 , 1669.2635 , 1618.679758];
	const load1 = [7500 , 23000 , 41400 , 42000 , 43500 , 41300 , 41250 , 41250 , 48800 , 52500 , 56300 , 58125 , 59750 , 60000 , 60000];
	const elongation1 = [0.85 , 1.7 , 3.4 , 4.25 , 5.1 , 5.95 , 6.8 , 7.65 , 10.2 , 13.6 , 17 , 20.4 , 23.8 , 27.2 , 28.05];
	const chart1 = [{xx:0.0,yy:0.0},{xx:0.00625,yy:41.73158},{xx:0.0125,yy:127.9769},{xx:0.025,yy:230.3583},{xx:0.03125,yy:233.6969},{xx:0.0375,yy:242.0432},{xx:0.04375,yy:229.8019},{xx:0.05,yy:229.5237},{xx:0.05625,yy:229.5237},{xx:0.075,yy:271.5335},{xx:0.1,yy:292.1211},{xx:0.125,yy:313.2651},{xx:0.15,yy:323.4198},{xx:0.175,yy:332.4616},{xx:0.2,yy:333.8527},{xx:0.20625,yy:333.8527}];

	// Material Corten Steel
	const length2 = 50.8;
	const diameter2 = 12.725;
	const stress2 = [52.46200115  ,160.8834702 ,279.7973394   ,384.7213417  ,412.7010757   ,412.7010757  ,419.6960092   ,580.5794794 ,699.4933486   ,751.9553498 ,682.0060149 ,647.0313475];
	const strain2 = [0.00025  ,0.00075   ,0.00125   ,0.00175  ,0.0025      ,0.004 ,0.01  ,0.02    ,0.05   ,0.14    ,0.2   ,0.23];
	const youngm2 = [ 209848.0046,214511.2936,223837.8716,219840.7667 ,165080.4303  ,103175.2689  ,41969.60092  ,29028.97397  ,13989.86697  ,5371.109641  ,3410.030075,  2813.179772];
	const load2 = [6672.3324  ,20461.81936 ,35585.7728  ,48930.4376  ,52489.01488 ,52489.01488 ,53378.6592  ,73840.47856 ,88964.432 ,95636.7644  ,86740.3212  ,82292.0996];
	const elongation2 = [0.0127 ,0.0381  ,0.0635  ,0.0889 ,0.127 ,0.2032  ,0.508 ,1.016 ,2.54  ,7.112 ,10.16 ,11.684];
	const chart2 = [{xx:0.0,yy:0.0},{xx:0.00025,yy:52.46200115},{xx:0.00075,yy:160.8834702},{xx:0.00125,yy:279.7973394},{xx:0.00175,yy:384.7213417},{xx:0.0025,yy:412.7010757},{xx:0.004,yy:412.7010757},{xx:0.01,yy:419.6960092},{xx:0.02,yy:580.5794794},{xx:0.05,yy:699.4933486},{xx:0.14,yy:751.9553498},{xx:0.2,yy:682.0060149},{xx:0.23,yy:647.0313475}];

	// Material Mild Steel
	const length3 = 350;
	const diameter3 = 11.8;
	const stress3 = [10.61299177  ,20.49405306 ,32.57090576 ,40.07319305 ,72.27813358 ,103.3851784 ,139.2497713 ,209.5150961 ,273.4675206 ,345.4711802 ,436.5965233 ,527.5388838 ,565.9652333 ,649.0393413 ,700.8234218 ,742.5434584 ,756.6331199 ,789.5699909 ,797.621226  ,801.4638609 ,806.0384263 ,807.5022873 ,805.6724611 ,801.2808783 ,773.6505032 ,747.904849 ];
	const strain3 = [0.00142  ,0.00285 ,0.00428 ,0.00571 ,0.00714 ,0.00857 ,0.01  ,0.01142 ,0.01285 ,0.01428 ,0.01574 ,0.01714 ,0.01857 ,0.02  ,0.02142 ,0.02285 ,0.02428 ,0.025714  ,0.02714 ,0.02857 ,0.03  ,0.03142 ,0.03285 ,0.03428 ,0.03571 ,0.03714];
	const youngm3 = [7473.937863,7190.895812,7610.024711,7018.072337,10122.9879,12063.61475,13924.97713,18346.33065,1281.51911,24192.65968,27738.02562,30778.23126,30477.39544,32451.96706,32718.18029,32496.43144,31162.81383,30705.84082,29389.13876,28052.63776,26867.94754,25700.26376,24525.7979,23374.58805,21664.81387,20137.44882];
	const load3 = [1160 ,2240  ,3560  ,4380  ,7900  ,11300 ,15220 ,22900 ,29890 ,37760 ,47720 ,57660 ,61860 ,70940 ,76600 ,81160 ,82700 ,86300 ,87180 ,87600 ,88100 ,88260 ,88060 ,87580 ,84560 ,81746];
	const elongation3 = [0.5 ,1 ,1.5 ,2 ,2.5 ,3 ,3.5 ,4 ,4.5 ,5 ,5.5 ,6 ,6.5 ,7 ,7.5 ,8 ,8.5 ,9 ,9.5 ,10  ,10.5  ,11  ,11.5  ,12  ,12.5  ,13 ];
	const chart3 = [{xx:0,yy:0},{xx:0.00142,yy:10.61299177},{xx:0.00285,yy:20.49405306},{xx:0.00428,yy:32.57090576},{xx:0.00571,yy:40.07319305},{xx:0.00714,yy:72.27813358},{xx:0.00857,yy:103.3851784},{xx:0.01,yy:139.2497713},{xx:0.01142,yy:209.5150961},{xx:0.01285,yy:273.4675206},{xx:0.01428,yy:345.4711802},{xx:0.01574,yy:436.5965233},{xx:0.01714,yy:527.5388838},{xx:0.01857,yy:565.9652333},{xx:0.02,yy:649.0393413},{xx:0.02142,yy:700.8234218},{xx:0.02285,yy:742.5434584},{xx:0.02428,yy:756.6331199},{xx:0.025714,yy:789.5699909} ,{xx:0.02714,yy:797.621226}  ,{xx:0.02857,yy:801.4638609} ,{xx:0.03,yy:806.0384263}  ,{xx:0.03142,yy:807.5022873} ,{xx:0.03285,yy:805.6724611} ,{xx:0.03428,yy:801.2808783} ,{xx:0.03571,yy:773.6505032} ,{xx:0.03714,yy:747.904849}];

	const length = [length1,length2,length3];
	const diameter = [diameter1,diameter2,diameter3];
	const stress = [stress1,stress2,stress3];
	const strain = [strain1,strain2,strain3];
	const youngm = [youngm1,youngm2,youngm3];
	const load = [load1,load2,load3];
	const elongation = [elongation1,elongation2,elongation3];
	const charts = [chart1,chart2,chart3];


	const restartButton = document.getElementById('restart');
	const switchButton1 = document.getElementById('opt1');
	const switchButton2 = document.getElementById('opt2');

	restartButton.addEventListener('click', function() {restart();});
	switchButton1.addEventListener('click',function() {switchmat(material2)});
	switchButton2.addEventListener('click',function() {switchmat(material3)});

	function setall()
	{
		top = [
			[startx, starty],
			[startx + width1, starty],
			[startx + width1, starty + ht1],
			[startx + width2, starty + ht1],
			[startx + width2, starty + ht1 + ht2],
			[startx + width1-width2, starty + ht1 + ht2],
			[startx + width1-width2, starty + ht1],
			[startx , starty + ht1],

		];

		bottom = [
			[startx + width1 - width2, bottom_starty],
			[startx + width2, bottom_starty],
			[startx + width2, bottom_starty + ht2],
			[startx + width1, bottom_starty + ht2],
			[startx + width1, bottom_starty + ht2 + ht1],
			[startx, bottom_starty + ht2 + ht1],
			[startx, bottom_starty + ht2],
			[startx + width1 - width2 , bottom_starty + ht2],

		]

		tube1 = [
			[startx + tube_width, starty + ht2 + ht1],
			[startx + tube_width, starty + ht2 + ht1+ tube_ht1],
			[startx + tube_width2, starty + ht2 + ht1+ tube_ht1+ tube_ht2],
			[startx + width1 - tube_width2, starty + ht2 + ht1+ tube_ht1+ tube_ht2],
			[startx + width1 - tube_width, starty + ht2 + ht1+ tube_ht1],
			[startx + width1 - tube_width, starty + ht2 + ht1],
		]

		tube2 = [
			[startx + tube_width, bottom_starty],
			[startx + tube_width, bottom_starty -tube_ht1],
			[startx + tube_width2, bottom_starty -tube_ht1 - tube_ht2],
			[startx + width1 - tube_width2, bottom_starty -tube_ht1 -tube_ht2],
			[startx + width1 - tube_width, bottom_starty - tube_ht1],
			[startx + width1 - tube_width, bottom_starty],

		]
	}
	function restart() 
	{ 
		window.clearTimeout(tmHandle); 
		window.clearTimeout(id);
		setall();
		graph();
		document.getElementById("length").innerHTML = length[mat];
		document.getElementById("diameter").innerHTML = diameter[mat];
		tmHandle = window.setTimeout(draw, 1000 / fps); 
	}
	function switchmat(new_material)
	{
		let temp = material;
		material = new_material;

		if(new_material == material3)
			material3 = temp;
		else
			material2 = temp;

	 	document.getElementById("opt1").innerHTML = material2;
		document.getElementById("opt2").innerHTML = material3;
		document.getElementById("current").innerHTML = material;

		if(material == "ASTM A53")
			mat = 0;
		else if(material == "Corten Steel")
			mat = 1;
		else
			mat = 2;

		restart();
	}

	function drawobj(ctx, obj ,color)
	{
		ctx.save();
		ctx.fillStyle = color;
		ctx.strokeStyle = color;
		ctx.beginPath();
		ctx.moveTo(obj[0][0], obj[0][1]);

		for(let i = 0; i < obj.length; ++i)
		{
			const next = (i + 1) % obj.length;
			ctx.lineTo(obj[next][0], obj[next][1]);
		}

		ctx.closePath();
		ctx.fill();
		ctx.stroke();
		ctx.restore();
	}

	function move(tube,flag)
	{
		for(let i = 0; i < tube.length; ++i)
		{
			tube[i][1] +=flag;
		}
	}

	let top = [];
	let bottom = [];
	let tube1 = [];
	let tube2 = [];
	let id;
	let mat = 0;
	let material = "ASTM A53";
	let material2 = "Corten Steel";
	let material3 = "Mild Steel";


	const canvas = document.getElementById("main");
	canvas.width = 900;
	canvas.height = 1200;
	canvas.style = "border:3px solid;";
	const ctx = canvas.getContext("2d");

	const fill = "#A9A9A9";
	const lineWidth = 1.5;
	const fps = 20;

	
	const startx = 250;
	const width1 = 400;
	const width2 = 300;
	const starty = 200;
	const bottom_starty = 750;
	const ht1 = 120;
	const ht2 = 80;
	const tube_width = 240;
	const tube_width2 = 215;
	const tube_ht1 = 180;
	const tube_ht2 = 70;
	const mat_colors = ["red","brown","black"]
	

	setall();

	document.getElementById("opt1").innerHTML = material2;
	document.getElementById("opt2").innerHTML = material3;
	document.getElementById("current").innerHTML = material;

	function draw()
	{
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.fillStyle = fill;
		ctx.lineWidth = lineWidth;
		ctx.lineCap = "round";
		ctx.lineJoin = "round";

		drawobj(ctx, top,mat_colors[mat]);
		drawobj(ctx, bottom,mat_colors[mat]);
		drawobj(ctx,tube1, "grey");
		drawobj(ctx,tube2, "grey");

		move(tube1 , -1);
		move(tube2,1);
		move(top,-1);
		move(bottom,1);

		if(top[0][1] > 100)
			tmHandle = window.setTimeout(draw, 1000 / fps);
	}

	let tmHandle = window.setTimeout(draw, 1000 / fps);

	function graph() 
	{
		let dps = []; 
		let chart = new CanvasJS.Chart("chartContainer", 
		{
			title :{
				text: "Stress v/s Strain" 
			},
			axisY: {
				includeZero: true,
				title: "Stress (MPa)"
			},
			axisX: {
				includeZero: true,
				title: "Strain"
			},      
			data: [{
				type: "line",
				dataPoints: dps
			}]
		});
		let j=0;
		let xVal = 0;
		let yVal = 0; 
		let updateChart = function () 
		{
			xVal = charts[mat][j].xx;            
			yVal = charts[mat][j].yy;        
			dps.push({
						x: xVal,
						y: yVal
				});
			
	
			if (dps.length > 100)
				dps.shift();
			document.getElementById("stress").innerHTML = stress[mat][j].toString() + " Mpa";
			document.getElementById("strain").innerHTML = strain[mat][j].toString();
			document.getElementById("young").innerHTML = youngm[mat][j].toString() + " Mpa";
			document.getElementById("load").innerHTML = load[mat][j].toString() + " N";
			document.getElementById("elongation").innerHTML = elongation[mat][j].toString() + " mm";
			if(j<stress[mat].length -1)
			{
				chart.render();
				j++;
				id = window.setTimeout(updateChart, 5000 / fps);
			}
		};		
		let id = window.setTimeout(updateChart, 5000 / fps);
	}
	graph();
	
})
