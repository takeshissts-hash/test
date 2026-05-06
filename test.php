<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>PHP 動作テスト</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f5f5f5;
            margin: 0;
            padding: 20px;
        }
        .container {
            background: white;
            padding: 20px;
            border-radius: 8px;
            max-width: 800px;
            margin: auto;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        h1 {
            color: #333;
            border-bottom: 2px solid #ddd;
            padding-bottom: 10px;
        }
        .status {
            padding: 10px;
            background: #e8f5e9;
            border-left: 5px solid #4caf50;
            margin-bottom: 20px;
        }
        .phpinfo-box {
            margin-top: 30px;
        }
    </style>
</head>
<body>
<div class="container">
    <h1>PHP 動作テストページ ごろべえ</h1>

    <div class="status">
        <?php
            echo "PHP は正常に動作しています。<br>";
            echo "現在の日時: " . date("Y-m-d H:i:s");
        ?>
    </div>

    <p>以下はごろべえの出力です（サーバー情報が表示されます）。</p>

    <div class="phpinfo-box">
        <?php phpinfo(); ?>
    </div>
</div>
</body>
</html>