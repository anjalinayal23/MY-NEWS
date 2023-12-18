let key = "35d55d13b98b478394b1e679a2459321";
let boxData = document.querySelector(".boxData");
let SearchBtn = document.getElementById("searchBtn");
let inputData = document.getElementById("inputData");
let searchType = document.getElementById("type");


const getData = async (input) => {
    let res = await fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=${key}`);
    
    let jsonData = await res.json();
    console.log(jsonData.articles);

    searchType.innerText = "Search : " + input ;
    inputData.value= ""
    boxData.innerHTML = "";

    jsonData.articles.forEach(function (article) {
        console.log(article);

        let divs = document.createElement("div")
        divs.classList.add("card");
        boxData.appendChild(divs);

    divs.innerHTML = `
    <img src="${article.urlToImage}" alt="">
    <h2>${article.title}</h2>
    <p>${article.description}</p>
    <h3> Read full article <a target = "_blank" href = "${article.url}">&#8594;</a></h3>

    `
    })

}

window.addEventListener("load",function(){
    getData("India")
})
SearchBtn.addEventListener("click",function(){
    let inputText = inputData.value;
    getData(inputText);
})