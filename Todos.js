const myform=document.querySelector("#my-form");
const Donelist=document.querySelector(".Donelist");
const Todolist=document.querySelector(".Todolist");
const Name=document.querySelector("#name");
const Detail=document.querySelector("#detail");
const url='https://crudcrud.com/api/f97aefc7018d4274aeed9b05b6274251/Todos/';


Todolist.addEventListener("click",removeItem);

Todolist.addEventListener("click",DoneTodo);
myform.addEventListener("submit",function(e){
    e.preventDefault();
    
    // console.log(Name.value);
    let myobj={
        name:Name.value,
        detail:Detail.value,
        done:false
    };
    
   axios.post(url,myobj
   ).then(response=>{
    li.classList.add(response.data._id);
    console.log(li.classList)})
   .catch(err=>console.log(err));




    var li=document.createElement('li');

    li.className="list-group-item d-flex  align-items-center ";

    li.appendChild(document.createTextNode(myobj.name+"  -  " +myobj.detail));
    
    
    
    var delbutton=document.createElement('button');

    delbutton.className="btn btn-danger btn-sm float-right delete";

    delbutton.appendChild(document.createTextNode("X"));

    li.appendChild(delbutton);
    
    const edit=document.createElement("button");
    edit.appendChild(document.createTextNode("Done"));
    edit.className="btn btn-success btn-sm float-right edit";
    li.appendChild(edit);
    Todolist.appendChild(li);
    
    
    myform.reset();
    
    

})


function removeItem(e){ 
    if(e.target.classList.contains('delete')){
        if(confirm("are you sure")){
            var li=e.target.parentElement;
            
            // console.log(li.classList);
            axios.delete(url+li.classList[4]).then(res=>console.log(res))
            Todolist.removeChild(li);
        }
    }
}

function DoneTodo(e){ 
    e.preventDefault();
    if(e.target.classList.contains('edit')){

            var li=e.target.parentElement;
          
            myform.reset();
           
            let Data;
            console.log(li.classList[4])
            axios.get(url+li.classList[4]).then(res=>{
                
                return res.data;
            }).catch(err=>console.log("error in get"))
            .then(res=>{
                
                axios.delete(url+res._id)
                return res;
            })
            .then(res=>{
                const temp={
                    name:res.name,
                    detail:res.detail,
                    done:true
                }
                
                axios.post(url,temp);
            }).then(res=>console.log("Done"))

            
            
            
        //    console.log(li.children)
            Todolist.removeChild(li);
            li.removeChild(li.children[0]);
            li.removeChild(li.children[0]);
            Donelist.appendChild(li);


        
    }
}

window.addEventListener("DOMContentLoaded",reloadItem);

function reloadItem(e){
    e.preventDefault();
  
    console.log(axios.get(url).then(res=>{
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

    li.className="list-group-item d-flex  align-items-center "+myobj._id;

    li.appendChild(document.createTextNode(myobj.name+"  -  " +myobj.detail));

    if(myobj.done==true){
        Donelist.appendChild(li);
        return;
    }
    
    var delbutton=document.createElement('button');

    delbutton.className="btn btn-danger btn-sm float-right delete";

    delbutton.appendChild(document.createTextNode("X"));

    li.appendChild(delbutton);
    
    const edit=document.createElement("button");
    edit.appendChild(document.createTextNode("Done"));
    edit.className="btn btn-success btn-sm float-right edit";
    li.appendChild(edit);
    Todolist.appendChild(li);

}

