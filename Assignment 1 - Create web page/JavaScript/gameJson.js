
var xhr = new XMLHttpRequest();

xhr.onload = function() {
    dataObject = JSON.parse(xhr.responseText);


    var newContent = '';
    for (var i = 0; i < dataObject.games.length; i++) {
            newContent += '<div class="gameTemplate">';
            newContent += '<img src="' + dataObject.games[i].image + '" ';
            newContent += 'alt="' + dataObject.games[i].title + '" ';
            newContent += 'class="gamePicture"/>';
            newContent += '<h2 class="gameTitle">'+dataObject.games[i].title+'</h2>';
            newContent += '<p class="gameTag"><span class="'+dataObject.games[i].tag1+'">'+dataObject.games[i].tag1+'</span><span class="'+dataObject.games[i].tag2+'">'+dataObject.games[i].tag2+'</span></p>';
            newContent += '<p class="gameText">'+dataObject.games[i].text+'</p>';
            newContent += '<form class="gameForm">'
            newContent += '<input type="button" value="-" onClick="minus('+i+')" class="minusBtn">';
            newContent += '<input type="text" class="amount" value="0">';
            newContent += '<input type="button" value="+" onClick="add('+i+')" class="plusBtn">';
            newContent += '<button class="buyBtn" onClick="addToCart('+i+', event)">BUY NOW</button>';
            newContent += '</form>';
            newContent += '</div>';
        }

        document.getElementById('content').innerHTML = newContent;
    };

    xhr.open('GET', 'data/data.json', true);
    xhr.send(null);