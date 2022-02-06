let leftBtn = document.getElementById("left-btn");
let rightBtn = document.getElementById("right-btn");

rightBtn.addEventListener("click",function() {
    let active = document.querySelectorAll(".active")
    if(active.length == 4){
        if (active[3].nextElementSibling != null) {
            active[0].classList.remove("active")
            active[3].nextElementSibling.classList.add("active")
        }
    }

})
leftBtn.addEventListener("click",function() {
    let active = document.querySelectorAll(".active")
    if(active.length == 4){
        if (active[0].previousElementSibling != null) {
            active[3].classList.remove("active")
            active[0].previousElementSibling.classList.add("active")
        }
    }

})