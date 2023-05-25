function addItem(){
    let item = document.querySelector("#addSomething");
    let list = document.querySelector(`ul`);
    list.innerHTML += `<li><span class="deleteIcon" onclick="deleteItem()"><i class="fa-sharp fa-solid fa-trash"></i></span><span onclick="overLine()" class="itemText">${item.value}</span></li>` 
}

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