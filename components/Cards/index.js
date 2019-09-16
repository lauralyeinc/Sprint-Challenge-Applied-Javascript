// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function makeArticle(eachArticle) {  
  eachArticle[1].forEach(article => {
    // create the elements
    let articleDiv = document.createElement("div");
    let  HeadlineDiv= document.createElement("div");
    let authorDiv = document.createElement("div");
    let imgContainer = document.createElement("div");
    let authorImg = document.createElement("img");
    let authorSpan = document.createElement("span");

    // set up structure of section
    articleDiv.appendChild(HeadlineDiv);
    articleDiv.appendChild(authorDiv);
    imgContainer.appendChild(authorImg);

    // styles
    articleDiv.classList.add("card");
    HeadlineDiv.classList.add("headline");
    authorDiv.classList.add("author");
    imgContainer.classList.add("img-container");


    // add content 
    articleDiv.setAttribute('data-topic', eachArticle[0]);
    HeadlineDiv.textContent = `${article.headline}`;


    // authorSpan.textContent = `By ${article.authorName}`;
    authorSpan.setAttribute('data-top', eachArticle[0]);
    
    authorImg.src = `${article.authorPhoto}`;

  

    // add to the DOM
    articleArea.appendChild(articleDiv);
  });

}

async function requestArticles() {
  let articles = await axios.get('https://lambda-times-backend.herokuapp.com/articles');
  console.log(articles)

  articles = articles.data.articles;

  let articlesArray = Object.entries
  (articles);

  articlesArray.forEach(article => makeArticle(article));
}

console.log(requestArticles());

let articleArea = document.querySelector(".cards-container");


requestArticles();

/* notes:  // /*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries/
*/

