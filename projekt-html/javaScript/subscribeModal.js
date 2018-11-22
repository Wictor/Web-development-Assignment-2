let modal = document.getElementById('subscribeModal');
let modalBtn = document.getElementById('ModalButton');
let closeBtn = document.getElementsByClassName('closeBtn')[0];
let submit = document.getElementById('subscribeSubmit');
let close = document.getElementById('subscribeClose');
let text = document.getElementById('submitedText');

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', closeOutside);
close.addEventListener('click', closeModal);


function openModal(){
    submit.style.display = 'block';
    close.style.display = 'none';
    modal.style.display = 'block';
    text.style.display = 'none';
}
function closeModal(){
    modal.style.display = 'none';
}
function closeOutside(e) {
    if(e.target == modal){
        modal.style.display = 'none'
    }
}
/*
function submitted() {
    submit.style.display = 'none';
    close.style.display = 'block';
    text.innerHTML = "You have been added";
    text.style.display = 'block';
}
*/