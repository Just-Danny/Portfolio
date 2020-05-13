var pictures= document.getElementById('pic');
var x=0;
var pic1= new Array;
pic1[0]= new Image();
pic1[0].src= "image/ds.png";
pic1[1]= new Image();
pic1[1].src = "image/Hobbie.png";
pic1[2]= new Image;
pic1[2].src= "image/store.png";

var pic = new Array;
pic[0]= new Image();
pic[0].src ="image/coding.png";
pic[1]= new Image();
pic[1].src= "image/mesa.png";
pic[2]= new Image();
pic[2].src= "image/maze.png";

var text1= ["Coding project", "Travel Site","Maze"];

var text2= ["Childhood toy project","Hobbie Project","Store"];

var link= new Array();
link[0] ="coding/index.html"
link[1] = "Travel Site/mesa.html";
link[2] = "Maze/maze.html";

var link2= new Array();
link2[0] = "Toy Project/index.html";
link2[1] = "Hobbie project/index.html";
link2[2] = "store/store.html";

/*function firstpic(){
    document.getElementById("link").innerHTML=link[0];
    document.getElementById("text").innerHTML=text1[0];
    document.getElementById("pic").innerHTML=pics1[0];
}*/

function nextpic(){
  x+=1;
  if (x >=3){
      x=0;
  }
       document.getElementById("pic").src=pic[x].src;
       document.getElementById("text").innerHTML=text1[x];
       document.getElementById("link").href=link[x];
}

function nextpic2(){
    x+=1;
    if (x >=3){
        x=0;
    }
         document.getElementById("pic2").src=pic1[x].src;
         document.getElementById("text2").innerHTML=text2[x];
         document.getElementById("link2").href=link2[x];
  }