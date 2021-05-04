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
	var id1 = setInterval(frame1, 200);
	var id2 = setInterval(frame2, 200);
  	var id3 = setInterval(frame3, 200);
  	var id4 = setInterval(frame4, 200);
	var id5 = setInterval(frame5, 200);
  	var id6 = setInterval(frame6, 200);
  	var id7 = setInterval(frame7, 200);
  	var id8 = setInterval(frame8, 200);
  	var id9 = setInterval(frame9, 200);
  	var id10 = setInterval(frame10, 200);
  	var id11 = setInterval(frame11, 900);
  	var id12 = setInterval(frame12, 900);
  	var id13 = setInterval(frame13, 900);
  	var id14 = setInterval(frame14, 900);
  	var id15 = setInterval(frame15, 900);
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
  	len1=[52.46200115  ,160.8834702 ,279.7973394   ,384.7213417  ,412.7010757   ,412.7010757  ,419.6960092   ,580.5794794 ,699.4933486   ,751.9553498 ,682.0060149 ,647.0313475];
  	if(i==12){
  		clearInterval(id11);
  	}
  	else{
  	
  	document.getElementById("pstress").innerHTML=len1[i]+' MPa';}
  	i++;
  	
  }
var j=0;
  function frame12() {
  	len2=[0.00025  ,0.00075   ,0.00125   ,0.00175  ,0.0025      ,0.004 ,0.01  ,0.02    ,0.05   ,0.14    ,0.2   ,0.23];
  	if(j==12){
  		clearInterval(id12);
  	}
  	else{
  	
  	document.getElementById("pstrain").innerHTML=len2[j];}
  	j++;
  	
  }
var k=0;
  function frame13() {
  	len3=[ 209848.0046,214511.2936,223837.8716,219840.7667 ,165080.4303  ,103175.2689  ,41969.60092  ,29028.97397  ,13989.86697  ,5371.109641  ,3410.030075,  2813.179772];
  	if(k==12){
  		clearInterval(id13);
  	}
  	else{
  	
  	document.getElementById("pyoung").innerHTML=len3[k]+' MPa';}
  	k++;
  	
  }
var l=0;
  function frame14() {
  	len4=[6672.3324  ,20461.81936 ,35585.7728  ,48930.4376  ,52489.01488 ,52489.01488 ,53378.6592  ,73840.47856 ,88964.432 ,95636.7644  ,86740.3212  ,82292.0996];
  	if(l==12){
  		clearInterval(id14);
  	}
  	else{
  	
  	document.getElementById("pload").innerHTML=len4[l]+' N';}
  	l++;
  	
  }
var m=0;
  function frame15() {
  	len5=[0.0127 ,0.0381  ,0.0635  ,0.0889 ,0.127 ,0.2032  ,0.508 ,1.016 ,2.54  ,7.112 ,10.16 ,11.684];
  	if(m==12){
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