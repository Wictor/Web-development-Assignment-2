var modal = document.getElementById('preOrderModal');
var modalBtn = document.getElementById('preOrderBtn');
var closeBtn = document.getElementsByClassName('closeBtn')[0];


modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', closeOutside);



function openModal(){
    modal.style.display = 'block';
}
function closeModal(){
    modal.style.display = 'none';
}
function closeOutside(e) {
    if(e.target == modal){
        modal.style.display = 'none'
    }
}





