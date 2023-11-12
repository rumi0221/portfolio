// This is a JavaScript file

//初期HTML記述をセット
var defaultHTML;
function DefaultSave(){
    defaultHTML = document.body.innerHTML;
}
//HTML記述を初期状態に戻す
function HTMLRestore(){
    document.body.innerHTML = defaultHTML;
}

function disp(){
    var msg=document.getElementById("msg");
    var kin=document.getElementById("kin").value;
    var nnkin=document.getElementById("nnkin").value;
    var element = document.getElementById("target");
    var radioNodeList = element.zutu; /*ラジオボタングループ（name="zutu"）を取得*/
    var a = radioNodeList.value; /*選択状態の値（value）を取得*/
    var nn;
    if(a == ""){
        //未選択
    }else if(a == 1){
        nn = Math.ceil(kin/nnkin);
        msg.innerHTML = nn + "日で目標金額達成です！";
    }else if(a == 2){
        nn = Math.ceil(kin/nnkin);
        msg.innerHTML = nn + "週で目標金額達成です！";
    }else{
        nn = Math.ceil(kin/nnkin);
        if(nn >= 12){
            var nen = Math.floor(nn/12);
            nn = Math.ceil(nn%12);
            msg.innerHTML = nen + "年" + nn + "ヵ月で目標金額達成です！";
        }else{
            msg.innerHTML = nn + "ヵ月で目標金額達成です！";
        }
    }
}