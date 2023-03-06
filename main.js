const form = document.querySelector("#form");
const textInput = document.querySelector("#textInput");
const list = document.querySelector("#list");

let todoAppText =[];
let index = 0;
function createHtmlElementes(e) {
    e.preventDefault();
    todoAppText.push({
        text: textInput.value,
        id: index
    });
     index++
   
    let result ="";
    todoAppText.forEach((item , index)=>{
        result =result + `<li class="list-item" id="item">${item.text} 
        <div class="card"><img class="card__img" src="./img/circele-img.png" alt="">
        <img src="./img/recucle-img.png" alt="" onclick="removeTodoApp(${item.id})" class="card__img"></div>
        </li>`;
    });
     console.log(result);
     list.innerHTML = result;
}
 
form.addEventListener("submit", createHtmlElementes);


    function removeTodoApp(id){
       todoAppText = todoAppText.filter((item)=>item.id !==id);
        console.log(todoAppText);
        let result = "";

        todoAppText.forEach((item, i)=>{
            result =result + 
            `<li class="list-item" id="item">${item.text} 
            <div class="card"><img class="card__img" src="./img/circele-img.png" alt="">
            <img src="./img/recucle-img.png" alt="" onclick="removeTodoApp(${item.id})" class="card__img"></div>
            </li>`;
        });
        
         list.innerHTML = result;

    }