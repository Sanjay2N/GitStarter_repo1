// var s=document.querySelector(".list-group-item:nth-child(2)");
// s.style.backgroundColor="green";
// var s1=document.querySelector(".list-group-item:nth-child(3)");
// s1.hidden = true



var s=document.querySelectorAll(".list-group-item");
s[1].style.color="green";

var odd=document.querySelectorAll("li:nth-child(odd)");
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor="green";
}