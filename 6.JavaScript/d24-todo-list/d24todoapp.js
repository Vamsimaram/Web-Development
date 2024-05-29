let ip=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");

//add the task
btn.addEventListener("click",function(){
    let list=document.createElement("li") //create list to add new tasks
    list.innerText=ip.value; //update value of list

    let dltBtn=document.createElement("button"); //create del optn
    dltBtn.innerText="delete"; //innner text to delete
    dltBtn.classList.add("delete"); //give a class name to delBtn

    list.appendChild(dltBtn); //add button to list
    ul.appendChild(list) //add list to ul
    ip.value="";   //update input text to null, once text is added to task
})

//to delete newly added tasks using event delegation property.
ul.addEventListener("click",function(event){ //here ul is parent of button, acc to event delegation for newly added child elements, parent addeventlistener is used to work the tasks
    if(event.target.nodeName=="BUTTON"){ //event.target have some properties and values, in those check for nodeName proerty and if it is button
        let itm=event.target.parentElement; //store that value and remove it.
        itm.remove();
    }
})

//to delete the task
let dltBtns=document.querySelectorAll(".delete")
for(dltBtn of dltBtns){
    dltBtn.addEventListener("click",function(){
        //console.log("button clicked,task deleted!")
        let parent=this.parentElement;
        parent.remove();

    })
}