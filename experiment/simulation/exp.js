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
	var id1 = setInterval(frame1, 140);
	var id2 = setInterval(frame2, 140);
  	var id3 = setInterval(frame3, 140);
  	var id4 = setInterval(frame4, 140);
	var id5 = setInterval(frame5, 140);
  	var id6 = setInterval(frame6, 140);
  	var id7 = setInterval(frame7, 140);
  	var id8 = setInterval(frame8, 140);
  	var id9 = setInterval(frame9, 140);
  	var id10 = setInterval(frame10, 140);
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
  	len1=[41.73158 , 127.9769 , 230.3583 , 233.6969 , 242.0432 , 229.8019 , 229.5237 , 229.5237 , 271.5335 , 292.1211 , 313.2651 , 323.4198 , 332.4616 , 333.8527 , 333.8527];
  	if(i==15){
  		clearInterval(id11);
  	}
  	else{
  	
  	document.getElementById("pstress").innerHTML=len1[i]+' MPa';}
  	i++;
  	
  }
var j=0;
  function frame12() {
  	len2=[0.00625 , 0.0125 , 0.025 , 0.03125 , 0.0375 , 0.04375 , 0.05 , 0.05625 , 0.075 , 0.1 , 0.125 , 0.15 , 0.175 , 0.2 , 0.20625];
  	if(j==15){
  		clearInterval(id12);
  	}
  	else{
  	
  	document.getElementById("pstrain").innerHTML=len2[j];}
  	j++;
  	
  }
var k=0;
  function frame13() {
  	len3=[6677.0528 , 10238.152 , 9214.332 , 7478.3008 , 6454.485333 , 5252.614857 , 4590.474 , 4080.421333 , 3620.446667 , 2921.211 , 2506.1208 , 2156.132 , 1899.780571 , 1669.2635 , 1618.679758];
  	if(k==15){
  		clearInterval(id13);
  	}
  	else{
  	
  	document.getElementById("pyoung").innerHTML=len3[k]+' MPa';}
  	k++;
  	
  }
var l=0;
  function frame14() {
  	len4=[7500 , 23000 , 41400 , 42000 , 43500 , 41300 , 41250 , 41250 , 48800 , 52500 , 56300 , 58125 , 59750 , 60000 , 60000];
  	if(l==15){
  		clearInterval(id14);
  	}
  	else{
  	
  	document.getElementById("pload").innerHTML=len4[l]+' N';}
  	l++;
  	
  }
var m=0;
  function frame15() {
  	len5=[0.85 , 1.7 , 3.4 , 4.25 , 5.1 , 5.95 , 6.8 , 7.65 , 10.2 , 13.6 , 17 , 20.4 , 23.8 , 27.2 , 28.05];
  	if(m==15){
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