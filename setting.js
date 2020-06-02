let getParam = (name, url) => {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    let results = regex.exec(url);
    if(!results) return null;
    if(!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

const currentVer = 'v1.0.8';

// 文字の大きさを変更
const fontSize = getParam('fontSize') || 51;

// 未確定の文字を表示しない
const pendingNone = getParam('pendingNone') || false;

// 文字の色(未確定)
const pendingTextColor = getParam('pendingTextColor') || '999';

// 文字の色(確定済み)
const finalTextColor = getParam('finalTextColor') || 'FFF';

// 縦書きモード
const verticalMode = getParam('tategaki') || false;

// 確定済み文字のフチを非表示にする
const strokeNone = getParam('strokeNone') || false;

// 確定済み文字のフチの幅
const strokeSize = getParam('strokeSize') || 2;

// 確定済み文字のフチの色
const strokeColor = getParam('strokeColor') || '000';

// クロマキー用の背景の色を変更
const bgColor = getParam('bgColor') || '0F0';
