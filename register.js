// Clean code is for gays



//register logic
let registed = 0;
regformElem.onsubmit = function(e){
  if(registed == 1){
    e.preventDefault()
  }else{
  username.style.borderColor = "transparent";
  password.style.borderColor = "transparent";
  alertt.innerHTML = "";
  alertt.style.display = "none";


  setTimeout(function(){
    
  let userinfo = new FormData(regformElem);
  const formDataObj = {};
  userinfo.forEach((value, key) => (formDataObj[key] = value));
  
  
    if(formDataObj.username == "" || formDataObj.Password == ""){
      errors(0,"Email and password fields cannot be empty");
  
    }else{
      if(/^[a-zA-Z0-9_-]{1,8}$/.test(formDataObj.username)){
        let api =  fetch('action.php', {
          method: 'POST',
          body: new FormData(formElem)
               }).then((response) => response.text()).then((text)=>{
                console.log(text)
                let responsee = JSON.parse(text)
                if(responsee.response == 1){
                  logined = 1;
                  errors(1,"Success");  
             
                }else{
                  errors(0,"Email or password are wrong");  
           
                }
               })
      }  
   
    
    
    }

  },100)


  e.preventDefault()

}
}


function errors(status,massage){
    let inputs = Array.from(document.getElementsByTagName("input"))
    inputs.forEach(function(e){
      if(status == 0){
        if(e.value == ""){
          e.style.borderColor = "red";
        }
      }
    
    })
    if(status == 1){
      alertt.innerHTML = massage;
      alertt.classList.remove("alert-danger")
      alertt.classList.add("alert-success")
      alertt.style.display = "block";
  }else if(status == 0){
    alertt.innerHTML = massage;
    alertt.classList.remove("alert-success")
    alertt.classList.add("alert-danger")
    alertt.style.display = "block";
  
  }
  }


// Input Fields animation
let inputs = document.querySelectorAll(".inputfield");
let icons = Array.from(document.querySelectorAll("i"));
icons.forEach(function(e,id){
  inputs[id].addEventListener("focusin", (event) => {e.style.marginLeft = "-1.5rem";});
  inputs[id].addEventListener("focusout", (event) => {e.style.marginLeft = "0.5rem";});


})
