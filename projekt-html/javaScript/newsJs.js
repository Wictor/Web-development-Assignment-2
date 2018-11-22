let xmlhttp, data, x, url, newContent = "";

xmlhttp = new XMLHttpRequest();
url = 'php/news.php';


xmlhttp.open("GET", url , true);
xmlhttp.send();

xmlhttp.onreadystatechange = function()
{
    if (this.readyState == 4 && this.status == 200)
    {
        data = JSON.parse(this.responseText);

        for (x in data)
        {
            newContent += '<article class="newsArticle">';
            newContent += '<img src="' + data[x].ArticleImage + '" ';
            newContent += 'alt="' + data[x].ArticleTitle + '" ';
            newContent += 'class="newsImage"/>';
            newContent += '<h2 class="newsTitle">' + data[x].ArticleTitle+'</h2>';
            if(data[x].ArticleText.length > 50) {

                let articleText = data[x].ArticleText.substr(0,50);
                articleText = articleText.substr(0, Math.min(articleText.length, articleText.lastIndexOf(" ")));

                let readMore = data[x].ArticleText.substr(articleText.lastIndexOf(""));

                newContent += '<p class="newsText">' + articleText +'</p>';
                newContent += '<p class="readMoreText">' + readMore +'</p>';

            }
            else{
                newContent += '<p class="newsText">' + data[x].ArticleText+'</p>';
            }

            newContent += '</article>';
        }
        document.getElementById("news").innerHTML = newContent;
    }
};





