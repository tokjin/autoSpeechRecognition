/* 参考にさせて頂いたサイト様
Chrome - SpeechRecognition API :「聞きっぱなし」実装のためのイベント周りの挙動まとめ
https://blog.rocky-manobi.com/entry/2018/12/10/052436

Webページでブラウザの音声認識機能を使おう - Web Speech API Speech Recognition
https://qiita.com/hmmrjn/items/4b77a86030ed0071f548
*/ 

const div = document.querySelector('#result');
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
    div.innerHTML = '<div class="finalText">'+finalText+'</div><div class="pendingText">'+pendingText+'</div>';
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

recognition.start();

setInterval(() => {
    try { recognition.start(); } catch (e) {}
}, 2000)