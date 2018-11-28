$( document ).ready(function() {
    let form = $('#subscribeForm');

    $(document).on('submit', form, function(e) {
        e.preventDefault();

        let formData = $('#subscribeForm').serialize();

        $.ajax({
            type: "POST",
            url: "php/subscribe.php",
            data: formData
        }).done(function () {
                $('#subscriberEmail').val('');
                document.getElementById('submitedText').innerHTML = ('You have been added');


            });
    });
});