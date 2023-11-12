<?php
echo '<h1>貯金計画</h1>';
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
echo '<br>';
$i = ceil($_POST['goal'] / $_POST['kin']);
$nen = 0;
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