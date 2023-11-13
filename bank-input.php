<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/bank.css">
    <title>bank-input</title>
</head>
<body>
    <header>
        <h1>貯金計画</h1>
    </header>
    <br>
    <br>
    <form action="bank-output" method="POST">
        <div class="text">
            <input  type="text" name="goal" placeholder="目標金額を入力してください"/>
        </div>
        <fieldset class="radio-group">
            <input type="radio" id="1" name="zutu" value="day" checked>
            <label class="radio-button" for="1">毎日</label>
            <input type="radio" id="2" name="zutu" value="week">
            <label class="radio-button" for="2">毎週</label>
            <input type="radio" id="3" name="zutu" value="month">
            <label class="radio-button" for="3">毎月</label>
        </fieldset>
        <div class="text">
            <input type="text" name="kin" placeholder="投入金額を入力してください"/>
        </div>   
        <br>
        <p>目標金額まであと…</p>
        <br>
        <div class="btn">
            <input type="submit" class="btn1" value="入力">
        </div>
    </form>
</body>
</html>