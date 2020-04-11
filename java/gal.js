var pics1= new Array();
pics1[0] = "image/coding.png";
pics1[1] = "image/mesa.png"; 

var pics2= new Array();
pics2[0] = "image/ds.png";
pics2[1] = "image/Hobbie.png";

var text1= new Array
text1[0] = "Coding Project";
text1[1] =  "Travel Site";

var text2= new Array();
text2[0] = "Childhood toy project";
text2[1] = "Hobbie Project";

var link= new Array();
link[0] ="//coding/index.html"
link[1] = "//Travel Site/mesa.html";

var link2= new Array();
link2[0] = "//Toy Project/index.html";
link2[1] = "//Hobbie project/index.html";


function firstpic(){
    document.getElementById("link").innerHTML='href=link[0]';
    document.getElementById("text").innerHTML=text1[0];
    document.getElementById("pic").innerHTML=pics1[0];
}