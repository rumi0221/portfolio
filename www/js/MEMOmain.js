//ToDo → MEMO , addToDo → addBuy

// カテゴリ名を配列で管理
let categoryMaster = ["food", "fashion", "goods"];
// 初期化処理としてToDoを画面に表示
renderToDoList();
// フォームの情報を元にToDoを保存
function addToDo(categoryId) {
    let name= document.getElementById("name");
    let ToDo = name.value;
    name.value = "";
    if (ToDo === "") {
        return;
    }   
    addStorage(
        {
            "ToDo":ToDo,
            "returnFlag":false,
            "categoryId":categoryId,
        }
    );
    renderToDoList();
}

// // クリックされたToDoを削除する
function deleteToDo() {
    li = this.parentNode;
    if(confirm("プレゼントをもらった記憶を削除しますか？")){
        deleteStorage(li.dataset.index);
        renderToDoList();
    }
}

// // ToDoリストをHTML表示する
function renderToDoList() {
    let ul = document.getElementById("ToDoList");
    ul.innerHTML = "";
    countList();
    countReturn();

    ToDoList = getStorage();
    for (let i = 0; i < ToDoList.length; i++) {     
        let item = ToDoList[i];
        let ToDo = item.ToDo;
        let li = document.createElement("li");
        let checkbutton = document.createElement("button")
        let deletebutton = document.createElement("button")

        // ボタンの生成
        if(item.returnFlag){
            checkbutton.classList.add("check", "favorite");
        } else {
            checkbutton.classList.add("check");       
        };
        checkbutton.addEventListener("click", flagChange);
        deletebutton.classList.add("delete");
        deletebutton.addEventListener("click", deleteToDo);

        // ToDoラベル部の文字列連結とCSS Class設定
        ToDo += " ("+ categoryMaster[item.categoryId] + ")";
        li.textContent = ToDo;
        li.classList.add("categoryId" + item.categoryId);

        // 要素の追記
        li.appendChild(checkbutton);
        li.appendChild(deletebutton);
        li.dataset.index = i;
        ul.appendChild(li);
    }
}

// ステータスの変更
function flagChange(e){
    let li = this.parentNode;
    let list = getStorage();
    let index = li.dataset.index;
    list[index].returnFlag =! list[index].returnFlag;
    setStorage(list);
    renderToDoList();
}
// 貰った数を画面に表示
function countList(){
    let ToDoList = getStorage();
    document.getElementById("get").innerHTML = ToDoList.length;
}
// 返した数を画面に表示
function countReturn(){
    let ToDoList = getStorage();
    let count = 0;
    for (let i = 0; i < ToDoList.length; i++) {
        if(ToDoList[i]["returnFlag"]){
            count++;
        };
    }
    document.getElementById("return").innerHTML = count;
}