// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

let getAllArticleObj = axios
  .get("https://lambda-times-api.herokuapp.com/articles")
  .then((res) => {
    let allArticles = res.data.articles;
    console.log(allArticles);

    let allArticleObj = [];
    allArticles["bootstrap"].forEach((e) => allArticleObj.push(e));
    allArticles["javascript"].forEach((e) => allArticleObj.push(e));
    allArticles["jquery"].forEach((e) => allArticleObj.push(e));
    allArticles["node"].forEach((e) => allArticleObj.push(e));
    allArticles["technology"].forEach((e) => allArticleObj.push(e));

    return allArticleObj;
  });

console.log(getAllArticleObj);

function createArticleCards(key) {
  let getCard = document.createElement("div");
  let getHeadline = document.createElement("div");
  let author = document.createElement("div");
  let imgCtn = document.createElement("div");
  let image = document.createElement("img");
  let getAuthorName = document.createElement("span");

  getCard.classList.add("card");
  getHeadline.classList.add("headline");
  author.classList.add("author");
  imgCtn.classList.add("img-container");

  getHeadline.textContent = key.headline;
  image.src = key.authorPhoto;
  getAuthorName.textContent = `By ${key.authorName}`;

  getCard.appendChild(getHeadline);
  getCard.appendChild(author);
  author.appendChild(imgCtn);
  imgCtn.appendChild(image);
  author.appendChild(getAuthorName);
  document.querySelector(div.cards - container).appendChild(getCard);

  getCard.addEventListener("click", () => {
    console.log(headline);
  });

  return getCard;
}

//createArticleCards(getAllArticleObj);

getAllArticleObj.forEach((e) => {
  let a = createArticleCards(getAllArticleObj[e]);
  document.querySelector("div.cards - container").appendChild(a);
});
