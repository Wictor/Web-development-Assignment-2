$(window).resize(function() {
    let y = document.getElementById("navBar");
    if( $(this).width() > 700) {
        y.style.display = "flex";
    }
    else{
        y.style.display = "none";
    }
});