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
function mysearchFunction() {
    var y = document.getElementById("my-search-Dropdown");
    if (y.style.display === "block") {
        y.style.display = "none";
    } else {
        y.style.display = "block";
    }
}


function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("my-search-Dropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}
//
function mysearchFunction1() {
    var z = document.getElementById("my-search-Dropdown1");
    if (z.style.display === "block") {
        z.style.display = "none";
    } else {
        z.style.display = "block";
    }
}


function filterFunction1() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput1");
    filter = input.value.toUpperCase();
    div = document.getElementById("my-search-Dropdown1");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

