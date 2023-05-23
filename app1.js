// // console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title=123;
// console.log(document.title);
// console.log(document.body);
// console.log(document.head);
// console.log(document.all);
// console.log(document.links);
// console.log(document.forms);

// console.log(document.images);


var HeaderTitle=document.getElementById("header-title");
var Header=document.getElementById("main-header");
// console.log(typeof(HeaderTitle));
// HeaderTitle.textContent="HEllo";
// HeaderTitle.innerHTML="GOOD Bye";

HeaderTitle.innerHTML='<h3>Hello</h3>';
Header.style.borderBottom="solid 3px #000";
var add=document.getElementsByClassName("title");
console.log(add);
add[0].style.fontWeight="bold";
add[0].style.color="green";
// add.style.f