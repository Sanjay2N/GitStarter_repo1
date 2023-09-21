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
   axios.post('https://crudcrud.com/api/43f12d7963024b8cab51c8a433897dd4/appointment',myobj
   ).then(response=>{
    li.classList.add(response.data._id);
    console.log(li.classList)})
   .catch(err=>console.log(err));




    var li=document.createElement('li');

    li.className="list-group-item d-flex justify-content-between align-items-center ";

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
    
    
    myform.reset();
    
    

})

function removeItem(e){ 
    if(e.target.classList.contains('delete')){
        if(confirm("are you sure")){
            var li=e.target.parentElement;
            
            console.log(li.classList);
            axios.delete("https://crudcrud.com/api/43f12d7963024b8cab51c8a433897dd4/appointment/"+li.classList[4]).then(res=>console.log(res))
            list.removeChild(li);
        }
    }
}

function editItem(e){ 
    e.preventDefault();
    if(e.target.classList.contains('edit')){

            var li=e.target.parentElement;
          
            myform.reset();
            console.log(localStorage.getItem(li.classList[1]))
            list.removeChild(li);

            console.log(li.classList[4])
            axios.get("https://crudcrud.com/api/43f12d7963024b8cab51c8a433897dd4/appointment/"+li.classList[4]).then(res=>{
                console.log(res)
                document.querySelector("#name").value=res.data.name;
                document.querySelector("#email").value=res.data.email;
                return res;
            }).catch(err=>console.log(err))
            .then(res=>{axios.delete("https://crudcrud.com/api/43f12d7963024b8cab51c8a433897dd4/appointment/"+res.data._id)})
            .then(res=>console.log("Edited"))
            
           
            
            
           
            list.removeChild(li);
            // localStorage.removeItem(li.classList[1]);
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
  
    console.log(axios.get('https://crudcrud.com/api/43f12d7963024b8cab51c8a433897dd4/appointment').then(res=>{
    for(let i=0;i<res.data.length;i++){
        showDataOnScreen(res.data[i]);
    }
    }).catch(err=>{
        console.log("//////////////");
        console.log(err);
    }
    
    
))}

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

