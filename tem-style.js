

// navbar toggle button style ( menu button style )

const menu = document.getElementById("menu-btn");
menu.onclick = function(){
    menu.classList.toggle('open-menu');

}



// header scroll effects 

window.addEventListener("scroll", function() {
    var header = document.getElementById("navbar");
    header.classList.toggle("header-1", window.scrollY > 0);    

});



