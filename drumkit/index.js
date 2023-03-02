const kits = ["crash","kick","snare","tom"];
const containerel = document.querySelector(".container");
kits.forEach((kit)=> {
     const btnel = document.createElement("button");
containerel.appendChild(btnel);
   btnel.classList.add("btn") 
   btnel.innerText=kit;
   btnel.style.backgroundImage= "url(Images/"+ kit +".jpg )"
   const audio = document.createElement("audio")
   containerel.appendChild(audio);
   audio.src="sounds/" + kit + ".mp3";
   btnel.addEventListener
   ("click",()=>{
    audio.play();
   })
 
  

});