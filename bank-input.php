<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>bank-input</title>
</head>
<body>
    <header>
        <h1>貯金計画</h1>
    </header>
    <form action="bank-output" method="POST">
        <input type="text" name="goal" placeholder="目標金額を入力してください"/>
        <br>
        <input type="radio" name="zutu" value="day">毎日
        <input type="radio" name="zutu" value="week">毎週
        <input type="radio" name="zutu" value="month">毎月
        <br>
        <input type="text" name="kin">投入金額を入力してください
        <br>
        <input type="submit">

        目標金額まであと…

    </form>
</body>
</html>