const myform=document.querySelector("#my-form");
const list=document.querySelector(".list");
const Amount=document.querySelector("#amount");
const For=document.querySelector("#for");
const Category=document.querySelector("#category");



list.addEventListener("click",removeItem);

list.addEventListener("click",editItem);
myform.addEventListener("submit",function(e){
    e.preventDefault();
    
    console.log(For.value);
    let myobj={
        amount:Amount.value,
        for:For.value,
        category:Category.value
    };
    localStorage.setItem(Amount.value,JSON.stringify(myobj));
    // localStorage.setItem("email",Email.value);
    // const list=document.querySelector(".list");
    // let l=document.createElement("li");
    // l.className="list-group-item";
    // // console.log(Name.value +" - " +Email.value);

    // l.appendChild(document.createTextNode(Name.value +" - " +Email.value))
    // var delbutton=document.createElement('button');

    // delbutton.className="btn btn-danger btn-sm float-right delete";

    // delbutton.appendChild(document.createTextNode("X"));

    // l.appendChild(delbutton);
    // let r=document.querySelector(".last");
    // list.appendChild(l);


    var li=document.createElement('li');
    
    li.className="list-group-item "+Amount.value;

    li.appendChild(document.createTextNode(For.value+" - " +Amount.value));

    
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
    if(e.target.classList.contains('edit')){
           e.preventDefault();
            var li=e.target.parentElement;
            // console.log(li);
            myform.reset();
            const data=JSON.parse(localStorage.getItem(li.classList[1]));
            // console.log("up",data.amount);
            
            console.log(Amount.textContent);
            Amount.textContent=data.amount;
            // Amount.textContent="9999";
            For.textContent=data.for;
            Category.textContent=data.category;
            // console.log("down");
            list.removeChild(li);
            localStorage.removeItem(li.classList[1]);
            // console.log(Amount.textContent);


        
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