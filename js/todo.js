// Todo list - localStorage la save aagum

const form = document.getElementById("todoForm");
const input = document.getElementById("todoInput");
const list = document.getElementById("todoList");
const emptyMsg = document.getElementById("todoEmpty");

let todos = JSON.parse(localStorage.getItem("todos") || "[]");

function save() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function render() {
  list.innerHTML = "";
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    if (todo.done) li.classList.add("done");

    const text = document.createElement("span");
    text.textContent = todo.text;
    text.addEventListener("click", () => {
      todos[index].done = !todos[index].done;
      save();
      render();
    });

    const del = document.createElement("button");
    del.textContent = "Delete";
    del.className = "btn delete";
    del.addEventListener("click", () => {
      todos.splice(index, 1);
      save();
      render();
    });

    li.append(text, del);
    list.appendChild(li);
  });
  emptyMsg.style.display = todos.length ? "none" : "block";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value.trim();
  if (!value) return;
  todos.push({ text: value, done: false });
  input.value = "";
  save();
  render();
});

render();
