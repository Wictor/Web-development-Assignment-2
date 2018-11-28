window.onload=function() {
    let mainNav = document.getElementById('js-menu');
    let navBarToggle = document.getElementById('js-navbar-toggle');

    navBarToggle.addEventListener('click', function () {

        mainNav.classList.toggle('active');
    });
}
function myFunction(id) {
    var x = document.getElementById(id);
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
function openNav() {

    document.getElementById("mySidenav").style.width = "350px";
    document.getElementById("main").style.marginRight = "350px";
    document.getElementsByClassName("dropdown-icon")[0].transform.rotate = ("-45deg");
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
}

