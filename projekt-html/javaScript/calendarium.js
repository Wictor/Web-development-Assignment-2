var xhr = new XMLHttpRequest();

xhr.onload = function() {
    if(xhr.status === 200) {
        myObject = JSON.parse(xhr.responseText);

        var newContent = '';
        for (var i = 0; i < myObject.events.length; i++) {

            newContent += '<div class="something">';
            newContent += '<p id="jsdate"><b>' + myObject.events[i].calDate + '</b>';
            newContent += '<p id="jstext">' + myObject.events[i].text + '<br>';
            newContent += '<p id="jstime">' + myObject.events[i].time + '<br>';
            newContent += '</div><hr id="separator">';

        }





        document.getElementById('upcomingEvents').innerHTML = newContent;

        }
    };

xhr.open('GET', 'json/calendarium.json', true);
xhr.send(null);