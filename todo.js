const additem=()=>{
    //step 1: Read user input from textbox
    let userinput=document.querySelector("#inp").value
    
    //step 2:create list item
    let listitem=document.createElement("li")
    listitem.textContent=userinput
    console.log(listitem);

    //target the list
    let list=document.querySelector("#todo")

    //step 4:Add item to list
    list.appendChild(listitem)
    }
let btn=document.querySelector("#btn")//document.getElementId("btn")
btn.addEventListener("click",additem)

