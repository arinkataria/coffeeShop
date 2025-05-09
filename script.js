let menubtn=document.getElementById("menu-btn")
let navbar=document.querySelector(".nav")
menubtn.addEventListener('click',()=>{
    navbar.classList.toggle("active")
})

let cartbtn=document.getElementById("cart-btn")
let cartcontainer=document.querySelector(".cart-item-container")
cartbtn.addEventListener('click',()=>{
    cartcontainer.classList.toggle("active")
})

let searchbtn=document.getElementById("search-btn")
let searchFrom=document.querySelector(".search-form")
searchbtn.addEventListener('click',()=>{
    searchFrom.classList.toggle("active")
})

let carditem1 = document.getElementById("card-item01")
let id1 = document.getElementById("id1")

id1.addEventListener("click",()=>{
    carditem1.style.display = "none"
    cartcontainer.style.height = "fit-content"
    cartcontainer.style.padding = "10px"
})
let carditem2 = document.getElementById("card-item02")
let id2 = document.getElementById("id2")

id2.addEventListener("click",()=>{
    carditem2.style.display = "none"
    cartcontainer.style.height = "fit-content"
    cartcontainer.style.padding = "10px"
})
let carditem3 = document.getElementById("card-item03")
let id3 = document.getElementById("id3")

id3.addEventListener("click",()=>{
    carditem3.style.display = "none"
    cartcontainer.style.height = "fit-content"
    cartcontainer.style.padding = "10px"
})
let carditem4 = document.getElementById("card-item04")
let id4 = document.getElementById("id4")

id4.addEventListener("click",()=>{
    carditem4.style.display = "none"
    cartcontainer.style.height = "fit-content"
    cartcontainer.style.padding = "10px"
    
})

let btnclick = document.querySelector(".btn")
btnclick.addEventListener("click",()=>{
    
})


