let getParam = (name, url) => {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    let results = regex.exec(url);
    if(!results) return null;
    if(!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

const currentVer = 'v1.0.4';

// 文字の大きさを変更
const fontSize = getParam('fontSize') || 51;

// 未確定の文字を表示しない
const pendingNone = getParam('pendingNone') || false;

// 文字の色(未確定)
const pendingTextColor = getParam('pendingTextColor') || '#999';

// 文字の色(確定済み)
const finalTextColor = getParam('finalTextColor') || 'white';

// 縦書きモード
const verticalMode = getParam('tategaki') || false;

