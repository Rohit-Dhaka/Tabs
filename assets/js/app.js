let tabs = document.querySelectorAll(".tab-head");
let tabContents = document.querySelectorAll(".tab-para");
tabs.forEach((tab,  index) =>{
    tab.addEventListener("click",() =>{
        tabContents.forEach((content) =>{
            content.classList.remove("active");
        })
        tabs.forEach((tab) =>{
            tab.classList.remove("active");
        })   
        tabs[index].classList.add("active");
        tabContents[index].classList.add("active");
    })
})