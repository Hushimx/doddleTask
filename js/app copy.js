// let parents = Array.from(document.getElementsByClassName("parent"));
// let childs = Array.from(document.getElementsByClassName("child"));
// childs.forEach(function(ce){
//    ce.ondragstart = function(cee){
//     console.log(cee)
//    parents.forEach(function(pe){
//    pe.ondragover = function(oee){
//        oee.preventDefault()
//    } 
//    pe.ondrop = function(ee){
//        ee.preventDefault()
//        if(ee.target == cee.target ){

//        }else if (ee.target.classList.contains("child")){
//            if(cee.target.offsetTop < ee.target.offsetTop){
//                ee.target.parentElement.insertBefore(cee.target,ee.target.nextSibling)

//            }else{
//                ee.target.parentElement.insertBefore(cee.target,ee.target)

//            }
//        }else{
//           ee.target.append(cee.target);

//        }
//    } 
// })

//    } 

// })
let currentboard = 1;
let k = [{pageid:1,title:"Dsd",data:[{id:1,name:"todo",data:[{id:1,title:"Task1",},{id:2,title:"task2",},{id:3,title:"task3",}]},{id:2,name:"doing",data:[{id:1,title:"task11",},{id:2,title:"task22",},{id:3,title:"task33",}]},{id:3,name:"done",data:[{id:1,title:"task",},{id:2,title:"task",},{id:3,title:"task",}]}]},{pageid:2,title:"a",data:[]},{pageid:3,title:"fdsfds"}]

let parents = Array.from(document.querySelectorAll(".parent"))

// console.log(k[0])
let boardsmenu = document.getElementById("boards");
for(let i = 0; i < k.length; i++){
    let board = document.createElement("div");
    let boardIcon = document.createElement("i");
    let boardName = document.createElement("span");
    board.classList.add("nav-item");
    if(k[i].pageid == currentboard){
        board.classList.add("active")
    }
    board.setAttribute("id",k[i].pageid)
    boardIcon.classList.add("fa");
    boardIcon.classList.add("fa-columns");
    boardName.classList.add("bordname");
    boardName.textContent = k[i].title;
    
    board.append(boardIcon);
    board.append(boardName);
    boardsmenu.insertBefore(board,newboardbutton)
}
let boards = document.querySelectorAll(".nav-item");
// boards.forEach(function(e){
//             e.onclick = function(click){
//                 if(click.target.id){
//                     changeboard(click.target.id)
//                 }else if(click.target.parentElement.id){
//                     changeboard(click.target.parentElement.id)
//                 }

//         }})

document.body.addEventListener("click",function(click){
                    if(click.target.classList.contains("nav-item")){
                    changeboard(click.target.id)

                }else if(click.target.parentElement.classList.contains("nav-item")){
                    changeboard(click.target.parentElement.id)
                  


                }

})
loadtasks()
    function loadtasks(){
        let parents = Array.from(document.querySelectorAll(".parent"))
        parents.forEach(function(event){
            close(event)
        })
        let pageindex = ""
        k.forEach(function(e,index){
                if(e.pageid == currentboard){
                    pageindex = index
                }
        })
        k[pageindex].data.forEach(function(e){
            if(e){
                let main = document.querySelector("article");
                let parentdiv = document.createElement("div");
                let titlediv = document.createElement("div");
                let title = document.createElement("p");
                let counter = document.createElement("span");
                parentdiv.classList.add("parent");
                titlediv.classList.add("title");
                parentdiv.id = e.id
                title.textContent = e.name
                counter.textContent = "(0)"
                titlediv.append(title)
                titlediv.append(counter)
                parentdiv.append(titlediv)
                main.appendChild(parentdiv)
                e.data.forEach(function(tasksevent){
                    let taskdiv = document.createElement("div");
                    taskdiv.classList.add("child");
                    taskdiv.id = tasksevent.id;
                    taskdiv.textContent = tasksevent.title;
                    parentdiv.append(taskdiv);
                })
            }

        })

    }

        let newtask = document.getElementById("newtask")
        newtask.onclick = function(){
            let index = ""
            k.forEach(function(e,index){
                if(e.pageid == currentboard){
                    pageindex = index
                }
        })
        //  k[pageindex].data[0].data = k[pageindex].data[0].data.concat([{ id: 4, title: "task4" }])
         parents = Array.from(document.querySelectorAll(".parent"))
         parents.forEach(function(e){
                console.log("e")

         },10)
        }

    function addboard(pageid,title,currentboard){
        let boardsmenu = document.getElementById("boards");
        let board = document.createElement("div");
        let boardIcon = document.createElement("i");
        let boardName = document.createElement("span");
        board.classList.add("nav-item");
        if(pageid == currentboard){
            board.classList.add("active")
        }
        board.setAttribute("id",pageid)
        boardIcon.classList.add("fa");
        boardIcon.classList.add("fa-columns");
        boardName.classList.add("bordname");
        boardName.textContent = title;
        
        board.append(boardIcon);
        board.append(boardName);
        boardsmenu.insertBefore(board,newboardbutton)
    
    
    }
    
    
    function changeboard(id){
        currentboard = id;
        let boards = document.querySelectorAll(".nav-item");
        boards.forEach(function(boardsloop){
            if(boardsloop.id == id){
                boardsloop.classList.add("active")
            }else{
                boardsloop.classList.remove("active")
    
            }
        })
        // currentboard = id;
        loadtasks()

    }
    function close(div){
        mainn.style.opacity = 1;
        div.remove();
    }










 
let newBoardBtn = document.getElementById("newboardbutton")
newBoardBtn.onclick = function(){
    mainn.style.opacity = 0.5;
    let newpopup = document.createElement("div")
    let newform = document.createElement("form")
    let newp = document.createElement("p")
    let newinput = document.createElement("input")
    let newbtn = document.createElement("button")
    let newbtnclose = document.createElement("span")
    newpopup.classList.add("popup");
    newbtn.classList.add("btn");
    newbtnclose.classList.add("btn");
    newbtnclose.style.backgroundColor = "#dc3545";
    newp.textContent = "Create new board";
    newbtn.textContent = "Create!";
    newbtnclose.textContent = "close";
    newinput.setAttribute("type","text")
    newinput.setAttribute("required","true");
    newinput.setAttribute("maxlength","10")
    newinput.setAttribute("placeholder","Board name")
    newbtn.setAttribute("type","submit")
    newpopup.append(newform)
    newform.append(newp)
    newform.append(newinput)
    newform.append(newbtn)
    newform.append(newbtnclose)
    document.body.append(newpopup)
    
    newform.onsubmit = function(e){
        e.preventDefault()
        let id = new Date().getTime();
        let newboard = [{pageid:id,title:e.value,data:""}];
        k = k.concat(newboard);
        changeboard(id)
        addboard(id,newinput.value,currentboard)
        close(newpopup)
    }
    newbtnclose.onclick = function(){
        close(newpopup)
    }

     
}

