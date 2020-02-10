var newsAPI =  document.getElementById('newsapi');

if(newsAPI){
    fetch("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=41ce1800a8c54768879c9fbb7c43aa55")
    
.then(response => {
            return response.json();
        }).then(news => {
        const newsHTML = news.articles.map(article => {
            
                return `
             

        <li>
            <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                <h3 class="uk-margin-remove">${article.title}</h3>
                <p class="uk-margin-remove">${article.description}</p>
            </div>
        </li>      


`;

            }).join("\n");
            
            newsAPI.innerHTML = newsHTML;
        });
}

$('head').append('<link rel="stylesheet" type="text/css" href="modules/news/style.css">');
