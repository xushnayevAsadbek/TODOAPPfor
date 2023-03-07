const form = document.querySelector("#form");
const textInput = document.querySelector("#textInput");
const list = document.querySelector("#list");
const modallayer =document.querySelector("#modallayer")
const EditedInput =document.querySelector("#EditedInput")
const editForm = document.querySelector("#editForm")


let todoAppText =[
    {
        text:"salom",
        id: 99999999,
    }
];
let index = 0;
let editItem ;

renderHtmlElements()
function createHtmlElementes(e) {
    e.preventDefault();
    todoAppText.push({
        text: textInput.value,
        id: index
    });
     index++
   
   renderHtmlElements();
}
function renderHtmlElements(){
    let result ="";
    todoAppText.forEach((item , index)=>{
        result =result + `<li class="list-item" id="item">${item.text} 
        <div class="card"><img class="card__img" src="./img/circele-img.png" onclick="showModal(${item.id})" alt="">
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


        renderHtmlElements();

    }

    function showModal(id){
        modallayer.style.display ="flex";

        let findEndObject = todoAppText.find((item)=>{
            return item.id === id;
        });
        let findEndObjectIndex = todoAppText.findIndex((item)=>{
            return item.id === id;
        });
        EditedInput.value =findEndObject.text ;   
        
        editItem ={
            index: findEndObjectIndex,
            id: id,
        }
    }

    function editFormHandler(e){
        e.preventDefault();

        todoAppText.splice(editItem.index,1, {
            text:EditedInput.value,
            id:editItem.id,
        });



        modallayer.style.display ="none";

        renderHtmlElements();
    }

    editForm.addEventListener("sumbit", editFormHandler)


    modallayer.addEventListener('click',(e)=>{
        if(e.target == modallayer) modallayer.style.display = "none";

    });
    