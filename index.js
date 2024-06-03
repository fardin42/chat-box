
$("#chatBtn").on("click",function(){
    a= true
    if (a === true) {
      $("#chatBtn").toggleClass("button-round")
      
      $("#chatBtn").toggleClass("button-flat")
      $("#ct-icon").toggleClass("fa-x")
    $("#ct-icon").toggleClass("fa-message")
  
    $("#box").toggleClass("d-none");
    $("#box").toggleClass("d-block");
        a = false
    }else{
      $("#box").toggleClass("d-block");
    }
  });




//   this code is for textarea
  $('textarea').each(function () {
    
  }).on('input', function () {
    this.style.height = 'auto';
   
    this.style.height = (this.scrollHeight - 30) + 'px'; 
  });

  
  let logMe = document.getElementById("logMe")
  let chatBase = document.getElementById("chatBase")
let send = document.getElementById("send")
let net = window.navigator.onLine
let indicator = document.getElementById("netIndi")
let music = document.getElementById("music")
send.addEventListener("click", function(){
 
    let newP = document.createElement("p")
    let newP2 = document.createElement("p")
    let myDate = document.getElementById("myDate")
    
    newP.setAttribute("class", "yellow")
    newP2.setAttribute("class", "crimson ")
    myDate = new Date()
   let  day = myDate.getHours()
    let  mins = myDate.getMinutes()
   
    music.innerHTML = `<audio autoplay src="src/multi-pop-2-188167.mp3"></audio>`
    
    if (net === true) {

      newP.innerHTML = `<span>${ logMe.value} <div> <h6 id="myDate"> ${day }:${mins} </h6> <i class="fa-solid fa-check"></i> </div></span>`;
      
       if (logMe.value === "hi") {
        function timeDelay() {
          
          newP2.innerHTML = `<span >Hello<div> <h6 id="myDate"> ${day }:${mins} </h6> <i class="fa-solid fa-check"></i> </div></span>`;
          music.setAttribute("autoplay","")
        }
       
        
      }else if (logMe.value === "how are you") {
         function timeDelay() {
           newP2.innerHTML = `<span>i am fine. how about you?<div> <h6 id="myDate"> ${day }:${mins} </h6> <i class="fa-solid fa-check"></i> </div></span>`;
        }
       
      }else if (logMe.value === "fine") {
        function timeDelay() {
          newP2.innerHTML = `<span>thats good to hear.<div> <h6 id="myDate"> ${day }:${mins} </h6> <i class="fa-solid fa-check"></i> </div></span>`;
        }
        
      }else{
        function timeDelay() {
          newP2.innerHTML = `<span class="anim-typewriter">How can i help you?<div> <h6 id="myDate"> ${day }:${mins} </h6> <i class="fa-solid fa-check"></i> </div></span>`;
        }
        
      }
    } else {
      function timeDelay() {
          newP.innerHTML = `<span>${ logMe.value} <div> <h6 id="myDate"> ${day }:${mins} </h6> <i class="fa-solid fa-clock"></i> </div></span> `;
      }
      
    }
    setTimeout(timeDelay, 1000)
    chatBase.appendChild(newP)
    chatBase.appendChild(newP2)
  
})


function indicatorNet() {
  if (net === true) {
    indicator.innerHTML = `<b class="green">&bull;</b> Online`
  } else {
    indicator.innerHTML = `<b class="red">&bull;</b> Offline`
  }
}
indicatorNet()



  
