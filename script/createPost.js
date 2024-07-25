$articles = document.querySelector("#articles");

function loadDate() {
    fetch("https://blog-post-production-b61c.up.railway.app/api/v1/blogs")
        .then(Response => Response.json())
        .then(data => renderArticles(data))
}
loadDate()
const renderArticles = (data) => {
    console.log
    data.data.forEach(element => {
        const $div = document.createElement("div");
        $div.className = "card";
        $articles.innerHTML = `
        <img src="${element.image}"/>
   
      <h3>${element.title}</h3>
      <p>books enrich our spirituality and develop our ideas about artistic image${element.description} </p>
     
    <div class="avatar-wrapper">
        <img class="card__logo" src="./images/Ellipse 1.png" alt="">
        <div style=" display: flex;flex-direction: column;">
        <strong>Ibrokhim Jalalov</strong>
        <p>Author</p>

        </div>        
    </div>
        `
        $articles.appendChild($div);
    });
}

