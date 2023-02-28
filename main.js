const form = document.querySelector("#form");
const textInput = document.querySelector("#textInput");
const list = document.querySelector("#list");

const todoAppText =[];
function createHtmlElementes(e) {
    e.preventDefault();
    todoAppText.push(`${textInput.value}`);
    let result ="";
    todoAppText.forEach((item)=>{
        result =result + `<li class="list-item" id="item">${item} <div class="card"><img class="card__img" src="./img/circele-img.png" alt=""><img src="./img/recucle-img.png" alt="" class="card__img"></div></li>`;
    });
     console.log(result);
     list.innerHTML = result;
}
 
form.addEventListener("submit", createHtmlElementes);