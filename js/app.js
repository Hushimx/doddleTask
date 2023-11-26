// let data = [{boardId:1,boardTitle:"Platform Lunch",boardData:
// [{colId:createid() + 1,coltitle:"column1",colData:[{id:createid() + 2,title:"task1"}]},{colId:createid() + 7,coltitle:"column2",colData:
// [{id:createid() + 4,title:"task2"}]
// }]}
// ]
// let currentboard = 1;
// let pageindex = ""
// //load items first time
// loadboards()
fadeIn(document.body)



// function loadboards(){
//     let boards = document.querySelectorAll(".nav-item");
//     boards.forEach(function(e){
//         close(e)
//     })

//     data.forEach(function(e){
//         let boardslist = document.getElementById("boards");
//         let board = createElementWithAttrubites("div",{class:"nav-item",onclick:"changeboard(event)",id:e.boardId})
//         let boardIcon = createElementWithAttrubites("i",{class:"fa fa-columns"});
//         let boardName = createElementWithAttrubites("span",{class:"bordname",textContent:e.boardTitle});
//         board.append(boardIcon);
//         board.append(boardName);
//         boardslist.insertBefore(board,newboardbutton)
//         changeboard()

//     })
//     changeboard()
//     bdscount.textContent = data.length


// }

// function changeboard(e){
//     let boards = document.querySelectorAll(".nav-item");
//     let target = e ? (e.target.parentElement.classList.contains("nav-item") ? e.target.parentElement : e.target) : "";
//     currentboard = target != "" ? target.id : currentboard;
//         boards.forEach(function(board){
//             board.classList.toggle("active",board.id == currentboard)

//         })
//         loadboard()

// }

// function loadboard(){
//     let main = document.querySelector("article");
//     let newColBtn = createElementWithAttrubites("div",{class:"newcol",onclick:"newCol()"})
//     data.forEach(function(e,index){
//         if(e.boardId == currentboard){
//             pageindex = index
//         }
// })
//     boardName.textContent = data[pageindex].boardTitle
//     main.innerHTML = ""
//     newColBtn.append(createElementWithAttrubites("p",{textContent:"+ New Column"}))
//     main.append(newColBtn)
//     fadeIn(newColBtn)

//     data[pageindex].boardData.forEach(function(e){
//         if(e){
//             let parentdiv = document.createElement("div");
//             let titlediv = document.createElement("div");
//             let title = document.createElement("p");
//             let counter = document.createElement("span");
//             parentdiv.classList.add("parent");
//             parentdiv.setAttribute("ondragover","allowDrop(event)")
//             parentdiv.setAttribute("ondrop","drop(event)")
//             titlediv.classList.add("title");
//             parentdiv.id = e.colId
//             title.textContent = e.coltitle
//             counter.textContent = `(${e.colData.length})`
//             titlediv.append(title)
//             titlediv.append(counter)
//             parentdiv.append(titlediv)
//             main.insertBefore(parentdiv,document.querySelector(".newcol"))
//             e.colData.forEach(function(tasksevent){
//                 let taskdiv = document.createElement("div");
//                 taskdiv.classList.add("child");
//                 taskdiv.setAttribute("ondragstart","drag(event)")
//                 taskdiv.setAttribute("draggable","true")
//                 taskdiv.setAttribute("onclick","showTask(event)")
//                 taskdiv.id = tasksevent.id;
//                 taskdiv.textContent = tasksevent.title;
//                 parentdiv.append(taskdiv);
//             })
//         }

//     })
// }


// function newCol() {
//     id = createid();
//     let newcol = [{ colId: id, coltitle: "newColumn", colData: []}]
//     data[pageindex].boardData = data[pageindex].boardData.concat(newcol);
//             let main = document.querySelector("article");
//             let parentdiv = createElementWithAttrubites("div",{class:"parent",ondragover:"allowDrop(event)",ondrop:"drop(event)",id:id});
//             let titlediv = createElementWithAttrubites("div",{class:"title"});
//             let title = createElementWithAttrubites("p",{textContent:"newColumn",});
//             let counter = createElementWithAttrubites("span",{textContent:"(0)"});

//             titlediv.append(title,counter)
//             parentdiv.append(titlediv)
//             main.insertBefore(parentdiv,document.querySelector(".newcol"))
// }

// function newboard(){
//     let form = createElementWithAttrubites("form",{id:"newBoardForm"})
//     let newp = createElementWithAttrubites("p",{textContent:"Create new board"})
//     let label = createElementWithAttrubites("label",{textContent:"Name"})
//     let newinput = createElementWithAttrubites("input",{class:"popupinput",type:"text",maxlength:"10",placeholder:"Board name",required:"true",})
//     let newbtn = createElementWithAttrubites("button",{class:"btn",textContent:"Create!",type:"submit"})
//     form.append(newp,label,newinput,newbtn)
//     newPopUp(form)

//     newBoardForm.onsubmit = function(e){
//         e.preventDefault()
//         let id = createid()
//         let newboard = [{boardId:id,boardTitle:newinput.value,boardData:[{colId:createid() + 1,coltitle:"column1",colData:[]}]}];
//         data = data.concat(newboard);
//         currentboard = id;
//         loadboards()
//         close(newBoardForm.parentElement)
//         mainn.style.opacity = 1;


// }



// }


// function addTask(){
//     // mainn.style.opacity = 0.5;
//     // newTaskPopUp.style.display = "flex"
//     // Array.from(selectcol.children).forEach(function(e){
//     //     e.remove()
//     // })
//     // data[pageindex].boardData.forEach(function(e){
//     //     let option = createElementWithAttrubites("option",{value:e.colId,textContent:e.coltitle})
//     //     selectcol.append(option)
//     // })

//     // addSubTasks.onclick = function(e){
//     //     const label = createElementWithAttrubites("label")
//     //     const input = createElementWithAttrubites("input",{class:"popupinput subtasksinput",type:"text",placeholder:"e.g. Make coffee"})
//     //     const button = createElementWithAttrubites("button",{type:"button",textContent:"X"})
//     //     label.append(input,button)
//     //     subtasks.insertBefore(label,addSubTasks)
        
//     // }

//     // newtaskform.onsubmit = function(e,index){
//     //     e.preventDefault()
//     //     let colindex = ""
//     //     data[pageindex].boardData.forEach(function(e,index){
//     //         if(e.colId == selectcol.value){
//     //             colindex = index
//     //         }
//     //     })
//     //     let newtask = [{id:createid(),title:taskTitle.value}]
//     //     data[pageindex].boardData[colindex].colData = data[pageindex].boardData[colindex].colData.concat(newtask);
//     //     mainn.style.opacity = 1;
//     //     newTaskPopUp.style.display = "none"
//     //     taskTitle.value = ""
//     //     taskdes.value = ""
//     //     loadboard()
    

//     // }
//     const form = createElementWithAttrubites("form",{id:"newTaskForm"})
    
//     const popUpTitle = createElementWithAttrubites("p",{textContent:"New Task"})
    
//     const label1 = createElementWithAttrubites("label",{textContent:"Title"})
//     const titleInput = createElementWithAttrubites("input",{class:"popupinput",type:"text",placeholder:"e.g. Take coffe break",maxlength:"10",id:"taskTitle",required:"true"})
    
//     const label2 = createElementWithAttrubites("label",{textContent:"Description"});
//     const descInput = createElementWithAttrubites("textarea",{class:"popupinput",type:"text",placeholder:"E.g. It's always good to take break. This 15 minute break will recharge the batteries a little.",id:"taskDes",required:"true"})
//     descInput.style.resize = "none"

//     const label3 = createElementWithAttrubites("label",{textContent:"SubTasks"});
//     const subTasks = createElementWithAttrubites("div",{id:"subTasksDiv"});
//     const subtask = createElementWithAttrubites("div");
//     const subtask2 = createElementWithAttrubites("div");
//     const addSubTask = createElementWithAttrubites("button",{class:"btn",id:"addSubTasks",type:"button",textContent:"+ Add New Subtasks"})
//     subtask.append(createElementWithAttrubites("input",{class:"popupinput subtaskinput",type:"text",placeholder:"e.g. Make coffee"}),createElementWithAttrubites("button",{textContent:"X",type:"button",onclick:"closeSubTask(event)"}))
//     subtask2.append(createElementWithAttrubites("input",{class:"popupinput subtaskinput",type:"text",placeholder:"e.g. Make coffee"}),createElementWithAttrubites("button",{textContent:"X",type:"button",onclick:"closeSubTask(event)"}))
//     subTasks.append(subtask,subtask2,addSubTask)


//     const label4 = createElementWithAttrubites("label",{textContent:"Column"});
//     const selectColumn = createElementWithAttrubites("select",{id:"selectcol"});
//     data[pageindex].boardData.forEach(function(e){
//         let option = createElementWithAttrubites("option",{value:e.colId,textContent:e.coltitle})
//         selectColumn.append(option)
//     })

//     let newbtn = createElementWithAttrubites("button",{class:"btn mainbtn",textContent:"Create!",type:"submit"})

//     form.append(popUpTitle,label1,titleInput,label2,descInput,label3,subTasks,label4,selectColumn,newbtn)
//     newPopUp(form)
    
//     addSubTasks.onclick = function(e){
//     const subtask = createElementWithAttrubites("div");
//     subtask.append(createElementWithAttrubites("input",{class:"popupinput subtaskinput",type:"text",placeholder:"e.g. Make coffee"}),createElementWithAttrubites("button",{textContent:"X",type:"button",onclick:"closeSubTask(event)"}))
//     subTasksDiv.insertBefore(subtask,addSubTasks)

//     }


//     newTaskForm.onsubmit = function(e){
//         e.preventDefault()
//         let colindex = ""
//         data[pageindex].boardData.forEach(function(e,index){
//             if(e.colId == selectcol.value){
//                 colindex = index
//             }
//         })
//         let subTasksArray = []
//         document.querySelectorAll(".subtaskinput").forEach(function(subtasks){
//             subTasksArray.push({subtaskid:createid(),subtasktitle:subtasks.value,status:false})
//         })
//         let newtask = [{id:createid(),title:taskTitle.value,des:taskDes.value,subtasks:subTasksArray}]
//         data[pageindex].boardData[colindex].colData = data[pageindex].boardData[colindex].colData.concat(newtask);
//         loadboard()
//         close(newTaskForm.parentElement)
//         mainn.style.opacity = 1;
        
    


// }


//     }


// function newPopUp(form){
//     mainn.style.opacity = 0.5;
//     let newpopup = createElementWithAttrubites("div",{class:"popup"})
//     newpopup.append(form)
//     document.body.append(createElementWithAttrubites("div",{id:"escapeBlock"}))
//     document.body.append(newpopup)
//     fadeIn(newpopup)
//     newpopup.style.display = "block";
//     escapeBlock.onclick = function(){
//         mainn.style.opacity = 1;
//         document.querySelector(".popup").remove()
//         escapeBlock.remove()
    
//     }
// }




// function closeSubTask(e){
//         e.target.parentElement.remove()
// }

// function close(event) {
//     let block = document.querySelector("#escapeBlock")
//     mainn.style.opacity = 1;
//     event.remove();
//     if(block){
//         block.remove()
//     }
// }

// function createid(){
//     let id = new Date().getTime();
//     return id;
// }


// //Drag and drop
// let dragEle = "";
// function allowDrop(e) {
// e.preventDefault();


// }
// function drag(e) {
    
//     dragEle = e;
// }
// function drop(e) {
//     e.preventDefault();
//     if(e.target.classList.contains("parent") && e.target != dragEle.target.parentElement){
//         let columnOne = data[pageindex].boardData.find(col=>col.colId == dragEle.target.parentElement.id).colData
//         let columnTwo = data[pageindex].boardData.find(col=>col.colId == e.target.id).colData
//         let dragedTask = columnOne[columnOne.indexOf(columnOne.find(task=>task.id == dragEle.target.id))]    
//         columnOne.splice(columnOne.indexOf(dragedTask),1)
//         columnTwo.splice(columnTwo.length,0,dragedTask)
//         e.target.append(dragEle.target)

    
//     }else if(e.target.classList.contains("child")){ 
//         let inserBefore = dragEle.target.offsetTop < e.target.offsetTop ? true : false;
//         if(e.target.parentElement == dragEle.target.parentElement){
//             let column = data[pageindex].boardData.find(col=>col.colId == e.target.parentElement.id).colData
//             let dragedTask = column[column.indexOf(column.find(task=>task.id == dragEle.target.id))]    
//             let dropedOnTask = column[column.indexOf(column.find(task=>task.id == e.target.id))]    
//             column.splice(column.indexOf(dragedTask),1)
//             if(inserBefore == true){
//                 e.target.parentElement.insertBefore(dragEle.target,e.target.nextSibling)
//                 column.splice(column.indexOf(dropedOnTask) + 1,0,dragedTask)
        
//             }else{
//                 e.target.parentElement.insertBefore(dragEle.target,e.target)
//                 column.splice(column.indexOf(dropedOnTask),0,dragedTask)
        
//             }

            
    
//         }else{
//         let columnOne = data[pageindex].boardData.find(col=>col.colId == dragEle.target.parentElement.id).colData
//        let columnTwo = data[pageindex].boardData.find(col=>col.colId == e.target.parentElement.id).colData
//        let dragedTask = columnOne[columnOne.indexOf(columnOne.find(task=>task.id == dragEle.target.id))]    
//        let dropedOnTask = columnTwo[columnTwo.indexOf(columnTwo.find(task=>task.id == e.target.id))]
//         columnOne.splice(columnOne.indexOf(dragedTask),1)
//         if(inserBefore == true){
//             e.target.parentElement.insertBefore(dragEle.target,e.target.nextSibling)
//             columnTwo.splice(columnTwo.indexOf(dropedOnTask) + 1,0,dragedTask)
    
//         }else{
//             e.target.parentElement.insertBefore(dragEle.target,e.target)
//             columnTwo.splice(columnTwo.indexOf(dropedOnTask),0,dragedTask)
    
//         }
        
//     } 


// }

//  }

//  function showTask(e){
//     let column = data[pageindex].boardData[data[pageindex].boardData.indexOf(data[pageindex].boardData.find(cols=> cols.colId == e.target.parentElement.id))].colData
//     let task = column[column.indexOf(column.find(task=>task.id == e.target.id))]
//     let form = createElementWithAttrubites("form");
//     let title = createElementWithAttrubites("h2",{textContent:task.title,class:"title"});
//     let threeDots = createElementWithAttrubites("button",{class:"threedots",type:"button"});
//     let des = createElementWithAttrubites("p",{textContent:task.des});
//     let label = createElementWithAttrubites("label",{textContent:"Sub Tasks"})
//     let subtasks = createElementWithAttrubites("div");
//     task.subtasks.forEach(function(ee){
//         let label = createElementWithAttrubites("label",{class:"containerr",id:ee.subtaskid,textContent:ee.subtasktitle})
//         let input = createElementWithAttrubites("input",{type:"checkbox"});
//         label.append(input,createElementWithAttrubites("span",{class:"checkmark"}))
//         subtasks.append(label)
//         input.onclick = function(eee){
//             if(eee.target.checked){
//                 ee.status = true

//             }else{
//                 ee.status = false

//             }
//             console.log(task)
//         }
//     })
//     form.append(title,threeDots,des,label,subtasks)
//     newPopUp(form)
//  }


 function fadeIn(element, duration = 1000) {
    element.style.display = '';
    element.style.opacity = 0;
    var last = +new Date();
    var tick = function() {
        console.log("worked")
      element.style.opacity = +element.style.opacity + (new Date() - last) / duration;
      console.log()
      last = +new Date();
      if (+element.style.opacity < 1) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
      }
    };
    tick();
  }

 function createElementWithAttrubites(tag,attubites){
    const element = document.createElement(tag);
    if(attubites){
        for (const key in attubites) {
            if(key === "textContent"){
            element.textContent = attubites[key]
            }else{
                element.setAttribute(key,attubites[key])
            }
    
        }
        if(attubites.class){
            element.classList.add(...attubites.class.split(" "))
        }
    }
    return element

 }

