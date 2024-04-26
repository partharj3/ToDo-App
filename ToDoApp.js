let container = document.querySelector('.container');
console.log(container);

let list = document.querySelector('#add-list');
console.log(list);

let input = document.querySelector('#create');
console.log(input);

let button = document.getElementsByClassName('add')[0];
console.log(button);

let enterArea = document.querySelector('#placeholder');
console.log(enterArea);

let body = document.querySelector('body');
console.log(body);

button.addEventListener('click', () => {
    addTask();
})

//! add task:

let addTask = () => {
    console.log(input.value);
    console.log(input.value.length);
    if (input.value.length == 0) {
        alert("Please write to add the task");
    }
    else {
        let newTask = document.createElement('li');
        newTask.innerText = input.value;
        list.appendChild(newTask);

        let removeIcon = document.createElement('span');
        removeIcon.innerHTML="\u00d7"
        newTask.appendChild(removeIcon);
    }
    input.value = "";
    saveToStorage();
}

list.addEventListener('click', (event) => {
    if (event.target.tagName==='LI') {
        event.target.classList.toggle('checked');
        saveToStorage();
    }
    else if (event.target.tagName == 'SPAN') {
        event.target.parentElement.remove();
        saveToStorage();
    }

},false)

let saveToStorage = () => {
    localStorage.setItem('data', list.innerHTML);
    console.log(localStorage.getItem('data'));
}

let movePlaceholder = (event) => {
    enterArea.style.top = "30px";
    enterArea.style.fontSize = "12px";
    input.style.border = "2px solid #004e92"
    enterArea.style.padding = "0px 4px";
    enterArea.style.background = 'transparent';
    enterArea.style.backgroundColor = "white";
    enterArea.style.transition = "all 0.5s";
}

let backToNormal = () => {
    enterArea.style.top = "52px";
    enterArea.style.left = "40px";
    input.style.border = "1px solid grey"
    enterArea.style.transition = "all 0.5s";
}

let checkClick = (event) => {
    console.log(event.target.tagName);
    if (event.target.tagName === 'INPUT')
        return movePlaceholder();
    else
        return backToNormal();
}

(function() {
    list.innerHTML = localStorage.getItem('data')
    console.log(list);
})();