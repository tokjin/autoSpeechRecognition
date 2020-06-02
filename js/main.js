/* 参考にさせて頂いたサイト様
Chrome - SpeechRecognition API :「聞きっぱなし」実装のためのイベント周りの挙動まとめ
https://blog.rocky-manobi.com/entry/2018/12/10/052436

Webページでブラウザの音声認識機能を使おう - Web Speech API Speech Recognition
https://qiita.com/hmmrjn/items/4b77a86030ed0071f548
*/ 

const divResult = document.querySelector('#result');
const divPendingText = document.querySelector('.pendingText');
const divFinalText = document.querySelector('.finalText');

document.querySelector('title').text = 'aSR '+currentVer;

SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'ja-JP';
recognition.interimResults = true;
recognition.continuous = false;

recognition.onresult = (event) => {
    let pendingText = '';
    let finalText = '';
    
    for (let i = event.resultIndex; i < event.results.length; i++) {
        let transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
            finalText += transcript;
        } else {
            pendingText = transcript;
        }
    }
    
    divResult.innerHTML = '<div class="finalText" style="color: #'+finalTextColor+';'+strokeTag+'">'+finalText+'</div>';
    if(!pendingNone) divResult.innerHTML += '<div class="pendingText" style="color: #'+pendingTextColor+';">'+pendingText+'</div>';
}

recognition.onerror = (e) => {
    console.log('onerror', e)
    if (e.error == 'no-speech') { // 無音
        try { recognition.stop(); } catch (e) {}
        setTimeout(() => {
            try { recognition.start(); } catch (e) {}
        }, 500);

    } else {
        try { recognition.stop(); } catch (e) {}
        setTimeout(() => {
            try { recognition.start(); } catch (e) {}
        }, 500);
    }
}

recognition.onspeechend = (e) => {
    setTimeout(() => {
        try { recognition.start(); } catch (e) {}
    }, 500);
}

if(verticalMode){
    divResult.style.top = '30px';
    divResult.style.right = '15px';
    divResult.style.writingMode = 'vertical-rl';
    divResult.style.bottom = 'initial';
    divResult.style.left = 'initial';
}

if(fontSize){
    divResult.style.fontSize = fontSize+'px';
}

let strokeTag = '';

if(!strokeNone){
    strokeTag = '-webkit-text-stroke: '+strokeSize+'px #'+strokeColor+'; text-stroke: '+strokeSize+'px #'+strokeColor+';'
}

if(bgColor){
    document.querySelector('body').style.backgroundColor = '#'+bgColor;
}

recognition.start();

setInterval(() => {
    try { recognition.start(); } catch (e) {}
}, 2000)