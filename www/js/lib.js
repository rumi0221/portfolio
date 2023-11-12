
// ローカルストレージ操作関数群
function getStorage() {
    let list = localStorage.getItem("ToDoist");
  
    if (list === null) {
        return [];
    } else {
        return JSON.parse(list);
    }
}
function addStorage(item) {
    let list = getStorage();
    list.push(item);
    setStorage(list)
}
function setStorage(list){
    localStorage.setItem("ToDoList", JSON.stringify(list));  
}
function deleteStorage(index) {
    let list = getStorage();
    list.splice(index, 1);
    localStorage.setItem("ToDoList", JSON.stringify(list));
}