var form = document.getElementById('addForm');
var itemlist = document.getElementById('items');
var filter=document.getElementById("filter");

itemlist.addEventListener("click",removeItem);

if(form){
    form.addEventListener("submit",addItem);
}

filter.addEventListener('keyup',filterItems);

console.log("sama");
function addItem(e){
    e.preventDefault();
    var newitem =document.getElementById("item").value;

    var li=document.createElement('li');
    li.className="list-group-item";

    li.appendChild(document.createTextNode(newitem));

    var editbutton=document.createElement('button');

    editbutton.className="btn btn-info";

    editbutton.appendChild(document.createTextNode("edit"));

    li.appendChild(editbutton);
    
    var delbutton=document.createElement('button');

    delbutton.className="btn btn-danger btn-sm float-right delete";

    delbutton.appendChild(document.createTextNode("X"));

    li.appendChild(delbutton);


    itemlist.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm("are you sure")){
            var li=e.target.parentElement;
            itemlist.removeChild(li);

        }
    }
}

function filterItems(e){

    var text=e.target.value.toLowerCase();
    // console.log(text);

    var items=itemlist.getElementsByTagName('li');

    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';

        }else{
            item.style.display='none';
        }
    });

    
}