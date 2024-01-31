let input_task = document.querySelector("#task");
let input_date = document.querySelector("#input-date");

let add_bttn = document.querySelector("#Add-btn");

let display_box = document.querySelector(".display");


const createNewElement = (e) => {
    e.preventDefault();

    if(input_task.value === "" || input_date.value === "" ){
        return;
    }
    let task_box = document.createElement('div');
    task_box.classList.add("task");


    let txt = document.createElement('p');
    txt.innerText = input_task.value;
    txt.classList.add("txt");
    task_box.appendChild(txt);

    let date = document.createElement('p');
    date.innerText = `(${input_date.value})`;
    date.classList.add("date");
    task_box.appendChild(date);
    

   
    let check_btn = document.createElement("button");
    check_btn.classList.add("Task-Checkbox");
    check_btn.innerHTML = "<img src='img/check-solid.svg'>"
    task_box.appendChild(check_btn);


    let cross_btn = document.createElement("button");
    cross_btn.classList.add("Task-delete");
    cross_btn.innerHTML = "<img src='img/xmark-solid.svg'>"
    task_box.appendChild(cross_btn);
    
    
    

    display_box.appendChild(task_box);

    input_task.value = "";
    storeData();
}

const UpdateList = (e) => {
    let item = e.target;

    // if(item.tagName === "IMG"){
    //     item = item.parentElement;
    // }

    if (item.classList.contains("Task-Checkbox")) {
        const box = item.parentElement;
        const para = box.querySelector('p');
        para.classList.toggle("checked");
    } else if (item.classList.contains("Task-delete")) {
        console.log("Delete clicked");
        const box = item.parentElement;
        box.remove();
    }

    storeData();
}

function storeData(){
    localStorage.setItem("data",display_box.innerHTML);
}

const showData = () => {
    display_box.innerHTML  = localStorage.getItem("data");
}

showData();



add_bttn.addEventListener("click",createNewElement);

display_box.addEventListener('click',UpdateList,true);