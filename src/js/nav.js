function nav_show(){
    document.getElementById('sidebar').style.display='flex';
    document.getElementById('nav__open-btn').style.display='none';
    document.getElementById('nav__close-btn').style.display='block';
}

function nav_close(){
    document.getElementById('sidebar').style.display='none';
    document.getElementById('nav__open-btn').style.display='block';
    document.getElementById('nav__close-btn').style.display='none';
}