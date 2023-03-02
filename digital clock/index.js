const houre1 = document.getElementById("hour");
const minutes= document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const ampm = document.getElementById("ampm");
function updateclock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"
    if(h>12){
        h=h-12
        ampm = "PM"
        
    }
    h=h<10? "0" + h :h;
    houre1.innerText=h;
    minutes.innerText=m;
    seconds.innerText=s;
    ampm,(innerText=ampm);
    setTimeout(()=>{
        updateclock()

    }, 1000)
}
updateclock();
