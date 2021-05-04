function myfun1()
{
	var elem1=document.getElementById("xabox");
	var elem2=document.getElementById("xbbox");
	var elem3=document.getElementById("xcbox");
	var elem4=document.getElementById("yabox");
	var elem5=document.getElementById("ybbox");
	var elem6=document.getElementById("ycbox");
	var elem7=document.getElementById("xdt");
	var elem8=document.getElementById("ydt");
	var elem9=document.getElementById("dot1");
	var elem10=document.getElementById("dot2");
	var pos1=207;
	var pos2=262;
	var pos3=300;
	var pos4=516;
	var pos5=478;
	var pos6=380;
	var pos7=400;
	var pos8=330;
	var pos9=433;
	var pos10=360;
	var id1 = setInterval(frame1, 240);
	var id2 = setInterval(frame2, 240);
  	var id3 = setInterval(frame3, 240);
  	var id4 = setInterval(frame4, 240);
	var id5 = setInterval(frame5, 240);
  	var id6 = setInterval(frame6, 240);
  	var id7 = setInterval(frame7, 240);
  	var id8 = setInterval(frame8, 240);
  	var id9 = setInterval(frame9, 240);
  	var id10 = setInterval(frame10, 240);
  	var id11 = setInterval(frame11, 500);
  	var id12 = setInterval(frame12, 500);
  	var id13 = setInterval(frame13, 500);
  	var id14 = setInterval(frame14, 500);
  	var id15 = setInterval(frame15, 500);
  function frame1() {

    if (pos1 == 152) {
      clearInterval(id1);
    } else {
      pos1--; 
      elem1.style.top = pos1 + 'px'; 
      //elem.style.left = pos + 'px'; 
    }
  }
  function frame2() {
    if (pos2 == 207) {
      clearInterval(id2);
    } else {
      pos2--; 
      elem2.style.top = pos2 + 'px'; 
      //elem.style.left = pos + 'px'; 
    }
  }
  function frame3() {
    if (pos3 == 245) {
      clearInterval(id3);
    } else {
      pos3--; 
      elem3.style.top = pos3 + 'px'; 
      //elem.style.left = pos + 'px'; 
    }
  }
   function frame4() {
    if (pos4 == 571) {
      clearInterval(id4);
    } else {
      pos4++; 
      elem4.style.top = pos4 + 'px'; 
      //elem.style.left = pos + 'px'; 
    }
  }
   function frame5() {
    if (pos5 == 533) {
      clearInterval(id5);
    } else {
      pos5++; 
      elem5.style.top = pos5 + 'px'; 
      //elem.style.left = pos + 'px'; 
    }
  }
   function frame6() {
    if (pos6 == 435) {
      clearInterval(id6);
    } else {
      pos6++; 
      elem6.style.top = pos6 + 'px'; 
      //elem.style.left = pos + 'px'; 
    }
  }
function frame7() {
    if (pos7 == 345) {
      clearInterval(id7);
    } else {
      pos7--; 
      elem7.style.top = pos7 + 'px'; 
      //elem.style.left = pos + 'px'; 
    }
  }
   function frame8() {
    if (pos8 == 385) {
      clearInterval(id8);
    } else {
      pos8++; 
      elem8.style.top = pos8 + 'px'; 
      //elem.style.left = pos + 'px'; 
    }
  }
function frame9() {
    if (pos9 == 381) {
      clearInterval(id9);
    } else {
      pos9--; 
      elem9.style.top = pos9 + 'px'; 
      //elem.style.left = pos + 'px'; 
    }
  }
   function frame10() {
    if (pos10 == 391) {
      clearInterval(id10);
    } else {
      pos10++; 
      elem10.style.top = pos10 + 'px'; 
      //elem.style.left = pos + 'px'; 
    }
  }
  var i=0;
  function frame11() {
  	len1=[10.61299177  ,20.49405306 ,32.57090576 ,40.07319305 ,72.27813358 ,103.3851784 ,139.2497713 ,209.5150961 ,273.4675206 ,345.4711802 ,436.5965233 ,527.5388838 ,565.9652333 ,649.0393413 ,700.8234218 ,742.5434584 ,756.6331199 ,789.5699909 ,797.621226  ,801.4638609 ,806.0384263 ,807.5022873 ,805.6724611 ,801.2808783 ,773.6505032 ,747.904849 ];
  	if(i==26){
  		clearInterval(id11);
  	}
  	else{
  	
  	document.getElementById("pstress").innerHTML=len1[i]+' MPa';}
  	i++;
  	
  }
var j=0;
  function frame12() {
  	len2=[0.00142  ,0.00285 ,0.00428 ,0.00571 ,0.00714 ,0.00857 ,0.01  ,0.01142 ,0.01285 ,0.01428 ,0.01574 ,0.01714 ,0.01857 ,0.02  ,0.02142 ,0.02285 ,0.02428 ,0.025714  ,0.02714 ,0.02857 ,0.03  ,0.03142 ,0.03285 ,0.03428 ,0.03571 ,0.03714];
  	if(j==26){
  		clearInterval(id12);
  	}
  	else{
  	
  	document.getElementById("pstrain").innerHTML=len2[j];}
  	j++;
  	
  }
var k=0;
  function frame13() {
  	len3=[7473.937863,7190.895812,7610.024711,7018.072337,10122.9879,12063.61475,13924.97713,18346.33065,1281.51911,24192.65968,27738.02562,30778.23126,30477.39544,32451.96706,32718.18029,32496.43144,31162.81383,30705.84082,29389.13876,28052.63776,26867.94754,25700.26376,24525.7979,23374.58805,21664.81387,20137.44882];
  	if(k==26){
  		clearInterval(id13);
  	}
  	else{
  	
  	document.getElementById("pyoung").innerHTML=len3[k]+' MPa';}
  	k++;
  	
  }
var l=0;
  function frame14() {
  	len4=[1160 ,2240  ,3560  ,4380  ,7900  ,11300 ,15220 ,22900 ,29890 ,37760 ,47720 ,57660 ,61860 ,70940 ,76600 ,81160 ,82700 ,86300 ,87180 ,87600 ,88100 ,88260 ,88060 ,87580 ,84560 ,81746];
  	if(l==26){
  		clearInterval(id14);
  	}
  	else{
  	
  	document.getElementById("pload").innerHTML=len4[l]+' N';}
  	l++;
  	
  }
var m=0;
  function frame15() {
  	len5=[0.5 ,1 ,1.5 ,2 ,2.5 ,3 ,3.5 ,4 ,4.5 ,5 ,5.5 ,6 ,6.5 ,7 ,7.5 ,8 ,8.5 ,9 ,9.5 ,10  ,10.5  ,11  ,11.5  ,12  ,12.5  ,13 ];
  	if(m==26){
  		clearInterval(id15);
  	}
  	else{
  	
  	document.getElementById("pelongation").innerHTML=len5[m]+' mm';}
  	m++;
  	
  }
}

function myfun2()
{
	 var x = document.getElementById("chartContainer");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}