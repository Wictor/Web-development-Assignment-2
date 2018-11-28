let btn = document.getElementsByClassName("modalButton");
let closeBtn = document.getElementById("closeBtn");

closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', closeOutside);

for(let i=0; i<btn.length; i++) {
    btn[i].addEventListener("click", loadModal);
}

function loadModal(e) {
    id = e.target.id;
    let newContent = '';

    if (id == 'subscribe') {

        newContent += '<form method="post" id="subscribeForm">';
        newContent += '<label>Email:</label>';
        newContent += '<input required type="email" id="subscriberEmail" name="subscriberEmail" placeholder="Your email:">';
        newContent += '<input type="submit" value="Send" id="subscribeSubmit">';
        newContent += '<p id="submitedText">Please enter your email</p>';
        newContent += '</form>';


        document.getElementById('modal-update').innerHTML = newContent;

        openModal();
    }
    else if (id == 'test') {

        newContent += '<form id="testForm">';
        newContent += '<p id="testQuestion"></p>';
        newContent += '<input type="radio" name="answer" id="1">';
        newContent += '<input type="radio" name="answer" id="2">';
        newContent += '<input type="radio" name="answer" id="3">';

        if (question = 1) {
            newContent += '<input type="submit" value="Next" id="testNext">';
        }
        else if (question = 10) {
            newContent += '<input type="submit" value="Next" id="testNext">';
            newContent += '<input type="submit" value="Finish" id="testFinish">';
        }
        else {
            newContent += '<input type="submit" value="Next" id="testNext">';
            newContent += '<input type="submit" value="Next" id="testNext">';
        }
        newContent += '</form>';

        document.getElementById('modal-update').innerHTML = newContent;

        openModal();
    }
}


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
