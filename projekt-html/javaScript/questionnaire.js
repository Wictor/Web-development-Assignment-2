$( '#testForm').submit(function(e) {
    //Testa med addeventlistener
    e.preventDefault();

    let question = document.getElementById("questionCount").innerHTML;

    let answers = [];


    let next = document.getElementById("testNext");
    let prev = document.getElementById("testPrev");
    let finish = document.getElementById("testFinish");



    if(next) {
        next.addEventListener('click', nextQuestion);
    }
    if (prev) {
        prev.addEventListener('click', prevQuestion);
    }
    if (finish) {
        finish.addEventListener('click', finishQuestion);
    }


    function answer(question) {
        answers[question] = document.querySelector('input[name="rate"]:checked').value;
    }

    function nextQuestion() {

        let questionAnswer = answer();
        answers.push(questionAnswer);


        question++;

        loadModal(question);

    }

    function prevQuestion(question) {
        question--;
        loadModal(question);
        return question;
    }

    function finishQuestion() {

    }

});