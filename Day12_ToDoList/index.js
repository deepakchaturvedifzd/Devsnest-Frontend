const input = document.querySelector(".inputArea");
const elements = document.querySelector("ul");
var doneBtn=document.querySelector(".doneBtn");
var deleteBtn= document.querySelector(".delete");

var todos={
    todo:localStorage.getItem('todos')
};


function loadTodos()
{
    console.log("Loaded");
    elements.innerHTML=todos.todo;
}

loadTodos();



input.addEventListener('keyup',(event)=>{
    if(event.keyCode===13)
    {
        console.log("Pressed");  // Enter keyCode === 13
        if(input.value!=="")
        {
            let newElement =`<li><div class="delete"><i class="fa fa-trash deleteBtn"></i></div><div class="addedTodo">${input.value}</div><div class="doneBtn"><i class="fa fa-check-circle"></i></div</li>`;

            elements.innerHTML+=newElement;

            localStorage.setItem('todos',elements.innerHTML);
            input.value="";
        }
        doneBtn=document.querySelector(".doneBtn");
        todos.todo=localStorage.getItem('todos');
        loadTodos();
    }
});

elements.addEventListener('click',(e)=>{
    if(e.target.tagName=="LI")
    {
        
        e.target.childNodes[1].classList.toggle("done");
        localStorage.setItem('todos',elements.innerHTML);
    }
    if(e.target.classList.contains("addedTodo"))
    {
        e.target.classList.toggle("done");
        localStorage.setItem('todos',elements.innerHTML);
    }

    if(e.target.classList.contains("delete")|| e.target.classList.contains("deleteBtn"))
    {
        e.target.parentElement.remove();
        localStorage.setItem('todos',elements.innerHTML);
    }
});

