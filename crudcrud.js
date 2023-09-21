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
   ).then(response=>console.log(response.data))
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
            // console.log(li.classList[1])
            list.removeChild(li);
            localStorage.removeItem(li.classList[1]);

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

// let myobj={
//     name:"sanajay",
//     age:53
// };
// let s=JSON.stringify(myobj);
// localStorage.setItem("obj",s);
// // console.log(JSON.parse(s));
// localStorage.getItem("obj");

// let res=JSON.parse(localStorage.getItem("obj"))