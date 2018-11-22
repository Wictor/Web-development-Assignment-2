$(function () {
    let form = $('#subscribeForm');

    $(form).submit(function (e) {
        e.preventDefault();

        let formData = $(form).serialize();

            $.ajax({
                type: "POST",
                url: $(form).attr('action'),
                data: formData
            })
                .done(function () {

                    $('#subscriberEmail').val('');
                    $('#submitedText').innerHTML = ('You have been added');

                })
    })
});