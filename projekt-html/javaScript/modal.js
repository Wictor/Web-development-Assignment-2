let btn = document.getElementsByClassName("modalButton");
let closeBtn = document.getElementById("closeBtn");

    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', closeOutside);

    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", loadModal);
    }


function loadModal() {
        let id = this.id;
        let newContent = '';

        if (id == 'subscribe') {

            newContent += '<form method="post" id="subscribeForm">';
            newContent += '<label>Email:</label>';
            newContent += '<input required type="email" id="subscriberEmail" name="subscriberEmail" placeholder="Your email:" />';
            newContent += '<input type="submit" value="Send" id="subscribeSubmit" />';
            newContent += '<p id="submitedText">Please enter your email</p>';
            newContent += '</form>';


            document.getElementById('modal-update').innerHTML = newContent;

            openModal();
        }
        else if (id == 'test') {
            let xhr = new XMLHttpRequest();

            xhr.onload = function () {
                if (xhr.status === 200) {
                    let data = JSON.parse(xhr.responseText);

                    let newContent = '';

                    newContent += '<form id="testForm">';
                    newContent += '<input type="hidden" id="questionCount" value="' + 0 + '">';
                    newContent += '<p id="testQuestion">' + data.questions[0].id + '</p>';
                    newContent += '<input type="radio" name="answer" id="1"><label>' + data.questions[0].option1 + '</label>';
                    newContent += '<input type="radio" name="answer" id="2"><label>' + data.questions[0].option2 + '</label>';
                    newContent += '<input type="radio" name="answer" id="3"><label>' + data.questions[0].option3 + '</label>';

                    if (0 == 1) {
                        newContent += '<input type="submit" value="Next" id="testNext">';
                    }
                    else if (0 == 10) {
                        newContent += '<input type="submit" value="Next" id="testNext">';
                        newContent += '<input type="submit" value="Finish" id="testFinish">';
                    }
                    else {
                        newContent += '<input type="submit" value="Next" id="testNext">';
                        newContent += '<input type="submit" value="Prev" id="testPrev">';
                    }

                    newContent += '</form>';

                    document.getElementById('modal-update').innerHTML = newContent;

                    openModal();

                }
            };
            xhr.open('GET', 'json/questions.json', true);
            xhr.send(null);
        }

    }


    function openModal() {
        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    function closeOutside(e) {
        if (e.target == modal) {
            modal.style.display = 'none'
        }
    }
