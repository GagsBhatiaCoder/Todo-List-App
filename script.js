const inputBox = document.getElementById('input-box')
const todoList = document.getElementById('todo-list')
const addBtn = document.getElementById('btn')
function addTask(){
    if(inputBox.value === ''){
        alert('Please write something')
    }
  else{
    let li = document.createElement('li')
    li.innerHTML = inputBox.value;
    todoList.appendChild(li)
    let span = document.createElement('span')
    span.innerHTML = "\u00d7"
    li.appendChild(span)
  }
  inputBox.value = '';
  saveData()
}
addBtn.addEventListener('click', addTask)

todoList.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false)
function saveData(){
    localStorage.setItem('data', todoList.innerHTML)
}
function showData(){
    todoList.innerHTML = localStorage.getItem('data')
}
inputBox.addEventListener('keypress',function(e){
if(e.key === 'Enter'){
    addBtn.click();
}})
showData()