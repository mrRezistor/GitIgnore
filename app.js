let todoArr = [];
const ul = document.querySelector("#todo-list");


const renderUl = () => {
  ul.innerHTML = "";
  todoArr.forEach((elem) => {
    const text = 
      `<li id = "nr_${elem.id}">
      <span>${elem.text}</span>
      <div>
      <button class = "done">DONE</button>
      <button class = "remove">REMOVE</button>
      </div>
      </li>`;
    ul.innerHTML += text;
  });
};

const addingTodo = document.querySelector("#todo-add");
addingTodo.addEventListener("submit", (event) => {
  event.preventDefault();
  let text = document.querySelector("#todo-field").value;
  text = text.trim();
  if (!text) {
    alert("Please, put some Text here!");
    return;
  }
  const todoItem = {
    text: text,
    isDone: false,
    id: todoArr.length,
  };
  todoArr.push(todoItem);
  console.log(todoArr);
  document.querySelector("#todo-field").value = "";
  renderUl();
  todoListeners();
});


const todoListeners = () => {
ul.querySelectorAll("li").forEach((element) => {
  const done = element.querySelector(".done");
  const remove = element.querySelector(".remove");
  done.addEventListener("click", () => {
    element.classList.add("done-li");
  });
  remove.addEventListener("click", () => {
    todoArr = todoArr.filter( elm => {
      elm.id != element.id.split("_")[1];
      console.log(elm, element)
    });
    element.remove();
  });
})
}