let xmlhttp, data, url, newContent = "";
let newsSection = document.getElementById("newsSection");
let newsSite = document.getElementById("newsSite");



xmlhttp = new XMLHttpRequest();
url = 'php/news.php';


xmlhttp.open("GET", url , true);
xmlhttp.send();

xmlhttp.onreadystatechange = function()
{
    if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText);

        //News site
        if(newsSite){

        for (let y in data) {
            if (y < 2) {

                newContent += '<article class="newsArticle">';
                newContent += '<img src="' + data[y].ArticleImage + '" ';
                newContent += 'alt="' + data[y].ArticleTitle + '" ';
                newContent += 'class="newsImage"/>';

                newContent += '<h2 class="newsTitle">' + data[y].ArticleTitle + '</h2>';

                if (data[y].ArticleText.length > 200) {

                    let articleText = data[y].ArticleText.substr(0, 200);
                    articleText = articleText.substr(0, Math.min(articleText.length, articleText.lastIndexOf(" ")));
                    let readMore = data[y].ArticleText.substr(articleText.lastIndexOf(""));

                    articleText = articleText + '...';
                    newContent += '<p class="newsText">' + articleText + '</p>';
                    newContent += '<button class="readMore" id="'+y+'">Read More</button>';
                    newContent += '<p class="readMoreText">' + readMore + '</p>';

                }
                else {
                    newContent += '<p class="newsText">' + data[y].ArticleText + '</p>';
                }

                newContent += '</article>';
            }

            else {

                newContent += '<article class="newsArticle">';
                newContent += '<h2 class="newsTitle">' + data[y].ArticleTitle+'</h2>';
                newContent += '</article>';
            }
            document.getElementById("newsSite").innerHTML = newContent;
        }
        }
            //NewsSection
        if(newsSection){

        for (let x = 0; x < 3; x++)
        {
            newContent += '<article class="newsArticle">';
            newContent += '<img src="' + data[x].ArticleImage + '" ';
            newContent += 'alt="' + data[x].ArticleTitle + '" ';
            newContent += 'class="newsImage"/>';
            newContent += '<h2 class="newsTitle">' + data[x].ArticleTitle+'</h2>';
            if(data[x].ArticleText.length > 100) {

                let articleText = data[x].ArticleText.substr(0,100);
                articleText = articleText.substr(0, Math.min(articleText.length, articleText.lastIndexOf(" ")));
                let readMore = data[x].ArticleText.substr(articleText.lastIndexOf(""));

                newContent += '<p class="newsText" id="newsText' + x + '" >' + articleText + '</p>';
                newContent += '<p class="readMoreText" id="readMore' + x + '" >' + readMore + '</p>';
                newContent += '<button class="readMoreBtn" id="newsBtn' + x + '">Read More</button>';


            }
            else{
                newContent += '<p class="newsText">' + data[x].ArticleText+'</p>';
            }

            newContent += '</article>';

            document.getElementById("newsSection").innerHTML = newContent;
        }
    }

    }

};

setTimeout(function () {
    let readMore = document.getElementsByClassName("readMoreBtn");
    for (let l = 0; l < readMore.length; l++) {
        readMore[l].addEventListener("click", function() {

            let x = document.getElementById("readMore" +l);
            console.log(x);
            if(x.style.display === 'inline')
            {
               x.style.display = 'none';
            }
            else {
                x.style.display = 'inline';
            }
        });

    }
}, 1000);






