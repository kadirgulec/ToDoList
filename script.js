function addItem(){
    let item = document.querySelector("#addSomething");
    let list = document.querySelector(`ul`);
    list.innerHTML += `<li><span class="deleteIcon" onclick="deleteItem()"><i class="fa-sharp fa-solid fa-trash"></i></span><span onclick="overLine()" class="itemText">${item.value}</span></li>` 
    item.value = "";
}

//trigger addItem() if enter is clicked
let textarea = document.getElementById("addSomething");
textarea.addEventListener("keypress", ({key}) => {
    if (key == "Enter"){
        addItem();
    }
})

//to delete item (actually to hide them :))
 
function deleteItem(){
    let list = document.querySelectorAll(".deleteIcon");
    var i;
    for (i = 0 ; i < list.length; i++){
        list[i].onclick = function(){
            let item = this.parentElement;
            item.style.display = "none";
        }
    }
}
    
function overLine(){
    let list = document.querySelectorAll(".itemText");
    var i;
    for (i = 0 ; i < list.length; i++){
        list[i].onclick = function(){
            let item = this.parentElement;
            item.classList.toggle("checked");
        }
    }
    console.log("clicked");
}
var cssRoot = document.querySelector(":root");
function changeMode(){
    let button = document.querySelector(".modesButton");
    if (button.innerHTML == "Light Mode"){
        cssRoot.style.setProperty('--headerBackground','white');
        cssRoot.style.setProperty('--headerColor','black');
        cssRoot.style.setProperty('--bodyColor','white');
        button.innerHTML= "Dark Mode";
    }else{
        cssRoot.style.setProperty('--headerBackground','black');
        cssRoot.style.setProperty('--headerColor','white');
        cssRoot.style.setProperty('--bodyColor','gray');
        button.innerHTML= "Light Mode";
    }
}