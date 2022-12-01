//Prevent Downloading images from website
// onContextMenu = "return false";
//#5DA7DB

//Add  and remove active link
let activeLink = document.querySelectorAll(".links li a");
for(let i = 0 ; i < activeLink.length ; i++) {
    activeLink[i].onclick = function(){
        resetLink();
        this.classList.add("active");
    }
}
function resetLink() {
    for(let i = 0 ; i < activeLink.length ; i++){
        activeLink[i].classList.remove("active");
    }
}


//hide and show sidebar
var sidebar = document.getElementById("mob-list");

function closeMenu(){
    sidebar.style.right="-200px";
}

function openMenu(){
    sidebar.style.right="0px";
}