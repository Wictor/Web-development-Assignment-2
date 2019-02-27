function iconChange(x) {
    x.classList.toggle("change");

    let y = document.getElementById("navBar");

    if (y.style.display === "flex") {
        y.style.display = "none";
    } else {
        y.style.display = "flex";
    }

    var z = window.matchMedia("(min-width: 700px)");
    if(z === true)
    {
        y.style.display = "flex";
    }
}