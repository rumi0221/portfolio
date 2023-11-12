// This is a JavaScript file
//myhtml/reidai28にhp例がある。

let counter, btnAdd;
let n;

function addCount(){
    n+= 100;
    counter.innerHTML = n;
}

window.addEventListener("load", ()=>{
    //起動時の処理
    counter = document.getElementById("counter");
    btnAdd100 = document.getElementById("btnAdd100");
    n = 0;
    btnAdd100.addEventListener("click", addCount)
});