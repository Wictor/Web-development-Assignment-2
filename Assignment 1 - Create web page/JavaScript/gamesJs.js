function add(id){
    let amount = document.getElementsByClassName("amount")[id].value;
    amount++;
    document.getElementsByClassName("amount")[id].value = amount;
}

function minus(id){
    let amount = document.getElementsByClassName("amount")[id].value;

    if (amount > 0) {

        amount--;
        document.getElementsByClassName("amount")[id].value = amount;
    }
}


var shopGameTitle = '';
var shopAmount = '';
function addToCart(id, event) {
    let gameTitle = document.getElementsByClassName("gameTitle")[id].textContent;
    let amount = document.getElementsByClassName("amount")[id].value;

    shopGameTitle = gameTitle;
    shopAmount = amount;

    var currentCart = JSON.parse(localStorage.getItem("Cart")) || {};
    console.log(localStorage.length);

    if(amount < 1) {
        delete currentCart[id];

    }else {
        currentCart[id] = {
            Game: shopGameTitle,
            Amount: shopAmount,
        };
    }
    localStorage.setItem("Cart", JSON.stringify(currentCart));

    event.preventDefault();
}

