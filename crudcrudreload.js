const myform=document.querySelector("#my-form");
const list=document.querySelector(".list");
const Name=document.querySelector("#name");
const Email=document.querySelector("#email");



list.addEventListener("click",removeItem);

list.addEventListener("click",editItem);
myform.addEventListener("submit",function(e){
    e.preventDefault();
    
    // console.log(Name.value);
    let myobj={
        name:Name.value,
        email:Email.value
    };
    
    // localStorage.setItem(Email.value,JSON.stringify(myobj));
   axios.post('https://crudcrud.com/api/be72283d02e448749dfdcebf1c38fc7c/appointment',myobj
   ).then(response=>{
    li.classList.add(response.data._id);
    console.log(response.data)})
   .catch(err=>console.log(err));

   
   var li=document.createElement('li');
    li.className="list-group-item "+Email.value;

    li.appendChild(document.createTextNode(Name.value+" - " +Email.value));

    
    var delbutton=document.createElement('button');
    

    delbutton.className="btn btn-danger btn-sm float-right delete";

    delbutton.appendChild(document.createTextNode("X"));

    li.appendChild(delbutton);
    
    const edit=document.createElement("button");
    edit.appendChild(document.createTextNode("Edit"));
    edit.className="btn btn-danger btn-sm float-right edit";
    li.appendChild(edit);
    list.appendChild(li);

    myform.reset();

    
    
    
    

})

function removeItem(e){ 
    if(e.target.classList.contains('delete')){
        if(confirm("are you sure")){
            var li=e.target.parentElement;
            
            console.log(li.classList[4]);
            axios.delete("https://crudcrud.com/api/be72283d02e448749dfdcebf1c38fc7c/appointment/"+li.classList[4]).then(res=>console.log(res))
            list.removeChild(li);
        }
    }
}

function editItem(e){ 
    e.preventDefault();
    if(e.target.classList.contains('edit')){

            var li=e.target.parentElement;
            // console.log(li);
            myform.reset();
            // console.log(localStorage.getItem(li.classList[1]))
            const data=JSON.parse(localStorage.getItem(li.classList[1]));
            console.log(data.email)
            
            
            document.querySelector("#name").value=data.name;
            document.querySelector("#email").value=data.email;
           
            list.removeChild(li);
            localStorage.removeItem(li.classList[1]);
            // // console.log(Amount.textContent);
            // let myobj={
            //     name:Name.value,
            //     email:Email.value
            // };
            // localStorage.setItem(Email.value,JSON.stringify(myobj));


        
    }
}

window.addEventListener("DOMContentLoaded",reloadItem);

function reloadItem(e){
    e.preventDefault();
  
    console.log(axios.get('https://crudcrud.com/api/be72283d02e448749dfdcebf1c38fc7c/appointment').then(res=>{
    for(let i=0;i<res.data.length;i++){
        showDataOnScreen(res.data[i]);
    }
    }).catch(err=>console.log(err)));
    
    
}

function showDataOnScreen(myobj){

    
    console.log(myobj)
    var li=document.createElement('li');

    li.className="list-group-item d-flex justify-content-between align-items-center "+myobj._id;

    li.appendChild(document.createTextNode(myobj.name+"  -  " +myobj.email));

    
    var delbutton=document.createElement('button');

    delbutton.className="btn btn-danger btn-sm float-right delete";

    delbutton.appendChild(document.createTextNode("X"));

    li.appendChild(delbutton);
    
    const edit=document.createElement("button");
    edit.appendChild(document.createTextNode("Edit"));
    edit.className="btn btn-danger btn-sm float-right edit";
    li.appendChild(edit);
    list.appendChild(li);

}

