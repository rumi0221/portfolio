<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/bank.css">
    <title>bank-output</title>
</head>
<body>
    
<?php
echo '<header>';
echo '<h1>貯金計画</h1>';
echo '</header>';
echo '<br><br>';
if(!preg_match('/^\d+$/', $_POST['goal']) || !preg_match('/^\d+$/', $_POST['kin'])){
    echo '整数を入力してください。';
}else{
    echo '<table>';
    echo '<tr>';
    echo '<th>目標金額：</th><td>', $_POST['goal'], '</td>';
    echo '</tr><tr>';
    echo '<th>投入間隔：</th><td>';
    switch($_POST['zutu']){
        case 'day':
            echo '毎日';
            break;
        case 'week':
            echo '毎週';
            break;
        case 'month':
            echo '毎月';
            break;   
    }
    echo '</td>';
    echo '</tr><tr>';
    echo '<th>投入金額：</th><td>', $_POST['kin'], '</td>';
    echo '</tr>';
    echo '</table>';
    $i = ceil($_POST['goal'] / $_POST['kin']);
    $nen = 0;
    echo '<p>';
    switch($_POST['zutu']){
        case 'day':
            echo $i, '日で目標金額達成です！';
            break;
        case 'week':
            echo $i, '週で目標金額です！';
            break;
        case 'month' :
            if($i >= 12){
                $nen = floor($i / 12);
                $i = ceil($nen % 12);
                echo $nen, '年', $i, 'ヵ月で目標金額達成です！';
            }else{
                echo $i, 'ヵ月で目標金額達成です！';
            }
    }
    echo '</p>';
}
?>

<hr>
<div class="btn">
    <a href="bank-input.php" class="btn2">戻る</a>
</div>
</body>
</html>