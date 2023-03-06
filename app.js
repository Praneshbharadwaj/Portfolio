const hamburger = document.querySelector('#hamburger')
const menu = document.querySelector('#menu')
const moon = document.querySelector('#moon')
const body = document.querySelector('body')
const hlink = document.querySelectorAll('#hlink')
hamburger.addEventListener('click',()=>{
    menu.classList.toggle("hidden")
    hamburger.classList.toggle('bg-white')
})
hlink.forEach(link=>{
    link.addEventListener('click',()=>{
        menu.classList.toggle("hidden")
        hamburger.classList.toggle('bg-white') 
    })

    

}) 
