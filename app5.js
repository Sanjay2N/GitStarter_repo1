// var items=document.querySelector('#items');
// //parentnode
// console.log(items.parentNode);
// items.parentNode.style.backgroundColor="gray";
// console.log(items.parentNode.parentNode);

//parentnode
// console.log(items.parentElement);
// items.parentElement.style.backgroundColor="gray";
// console.log(items.parentNode.parentElement);

// child node
// console.log(items.children);
// console.log(items.children[1]);
// items.children[1].style.backgroundColor="green";

// console.log(items.firstChild);
// console.log(items.firstElementChild);
// items.firstElementChild.textContent="hello 1";

// console.log(items.lastChild);
// console.log(items.lastElementChild);
// items.lastElementChild.textContent="hello 1";


// console.log(items.nextSibling);
// console.log(items.nextElementSibling);


// console.log(items.previousSibling);
// console.log(items.previousElementSibling);
// items.previousElementSibling.style.color="green";


var newdiv=document.createElement('div');
newdiv.className="hello";

newdiv.id="hello1";

newdiv.setAttribute('title','hello div');

var newdivtext=document.createTextNode("hellow owlrlrjknw df");

newdiv.appendChild(newdivtext);
console.log(newdiv);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

container.insertBefore(newdiv,h1);