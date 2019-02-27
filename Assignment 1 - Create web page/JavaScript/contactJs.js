let elName = document.getElementById('contactName');
let elNameMsg = document.getElementById('nameWarning');
let elEmail = document.getElementById('contactEmail');
let elEmailMsg = document.getElementById('emailWarning');
let elComment = document.getElementById('contactComment');
let elCommentMsg = document.getElementById('commentWarning');

function checkUsername() {
    var contactName = elName.value;

    if (contactName.length < 3) {
        elNameMsg.textContent = 'Only name larger than 2 letters are accepted';
    } else {
        elNameMsg.textContent = '';
    }
}

function checkEmail() {
    var contactEmail = elEmail.value;

    if (contactEmail.length < 1) {
        elEmailMsg.textContent = 'You have to write atleast 1 letter';
    } else {
        elEmailMsg.textContent = '';
    }
}

function checkComment() {
    var contactComment = elComment.value;

    if (contactComment.length < 1) {
        elCommentMsg.textContent = 'You have to write atleast 1 letter';
    } else {
        elCommentMsg.textContent = '';
    }
}

elName.addEventListener('blur', checkUsername, false);
elEmail.addEventListener('blur', checkEmail, false);
elComment.addEventListener('blur', checkComment, false);