# autoSpeechRecognition
 
### これは何か
マイクに向かって発音した言葉をテキストにして表示します。  
OBS等の配信ソフトでキャプチャしクロマキー処理して使うことを想定しています。  
chromeの機能でページ翻訳を使うと同時通訳する事ができるかもしれません。  

### 使い方
[このページ](https://tokjin.github.io/autoSpeechRecognition/)を開き、マイクの許可を押します。  
OBSでウィンドウキャプチャなどを使い読み込んでください。  
Chromeのキャプチャがうまくいかない場合は、設定からハードウェアアクセラレーションを無効にさせて下さい。  

### パラメーター
以下のパラメーターに対応しています。  
* fontSize -> 文字の大きさ(例: fontSize=64)
* pendingNone -> 未確定の文字を非表示にする(例: pendingNone=true)
* pendingTextColor -> 未確定の文字の色(例: pendingTextColor=#FFFFFF)
* finalTextColor -> 確定済みの文字の色(例: finalTextColor=#000000)
* tategaki -> 縦書きモード(例: tategaki=true)

### 注意点
カスタムして使う場合は、ローカル環境や非SSLサーバーで開くとマイク許可が延々と出続けてしまうので  
必ずSSLサーバー（github pageを使うと便利!）で実行して下さい。  
※タイムアウトした時に再開する方法が無く、かなり無茶な方法で動いています。

### 問い合わせ
[Twitter](https://twitter.com/jintokai)までご連絡ください。