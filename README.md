# autoSpeechRecognition
 
### これは何か
マイクに向かって発音した言葉をテキストにして表示します。  
OBS等の配信ソフトでキャプチャしクロマキー処理して使うことを想定しています。  
chromeの機能でページ翻訳を使うと同時通訳する事ができるかもしれません。  

### 使い方
[このページ](https://tokjin.github.io/autoSpeechRecognition/)を開き、マイクの許可を押します。  
OBSでウィンドウキャプチャなどを使い読み込んでください。  
Chromeのキャプチャがうまくいかない場合は、設定からハードウェアアクセラレーションを無効にさせて下さい。  

### 設定
文字の大きさや色などをパラメーターで調整できます。  
[URL Generator](https://tokjin.github.io/autoSpeechRecognition/urlGenerator.html)を開き、各種設定を行ってください。  

### 注意点
カスタムして使う場合は、ローカル環境や非SSLサーバーで開くとマイク許可が延々と出続けてしまうので  
必ずSSLサーバー（github pageを使うと便利!）で実行して下さい。  
※タイムアウトした時に再開する方法が無く、かなり無茶な方法で動いています。

### 問い合わせ
[Twitter](https://twitter.com/jintokai)までご連絡ください。