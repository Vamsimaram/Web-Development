let todo=[];

let req=prompt("Enter your request");

while(true){
    if(req=="quit"){
        console.log("Quit the app");
        break;
    }

    if(req=="list"){
        console.log("-----------");
        for (let i=0;i<=todo.length-1;i++){
            console.log(i,todo[i]);
        }
        console.log("-----------");
    }
    else if(req=="add"){
        let task=prompt("Enter task you want to add");
        todo.push(task);
        console.log("Task added");
    }
    else if(req=="delete"){
        let id=prompt("Enter the task index");
        todo.splice(id,1);
        console.log("Task deleted");
    }
    else{
        console.log("wrong request");
    }

    req=prompt("Enter your request");
}