const $mobileViewIcons = document.querySelector('.chegg__mobile-view__icons');
const $mobileViewMenu = document.querySelector('.chegg__for-mobile-view__menu');

const openMenuIcon = `<i onclick="toggleMenu()" class="fa-solid fa-bars"></i>`;

function myFunction(){
    const mediaQuerry = matchMedia("(max-width:1300px)");

    if(mediaQuerry.matches){
        $mobileViewIcons.innerHTML = openMenuIcon;
    }
    else{
        $mobileViewIcons.innerHTML = null;
        $mobileViewMenu.style.display = "none";
    }
    
}
onload = myFunction;
onresize = myFunction;

const toggleMenu = ()=>{
    if($mobileViewMenu.style.display === "none"){
        $mobileViewMenu.style.display = "flex";
    }else{
        $mobileViewMenu.style.display = "none";
    }
    
}
