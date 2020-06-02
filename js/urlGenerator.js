const url = location.href.split(/#/)[0];
const urlPath = url.substring(0, url.lastIndexOf("/"));
const baseUrl = urlPath+'/index.html'
      
class urlParam {
    constructor() {
        this.fontSize = 51;
        this.pendingNone = false;
        this.pendingTextColor = '#999999';
        this.finalTextColor = '#FFFFFF';
        this.strokeNone = false;
        this.strokeSize = 2;
        this.strokeColor = '#000000';
        this.bgColor = '#00FF00';
        this.tategaki = false;
    }
    reload() {
        let paramText = '?fontSize='+this.fontSize;
        if(this.pendingNone) paramText += '&pendingNone='+this.chatInUserName;
        paramText += '&pendingTextColor='+this.pendingTextColor.slice(1);
        paramText += '&finalTextColor='+this.finalTextColor.slice(1);
        if(this.strokeNone) paramText += '&strokeNone='+this.strokeNone;
        paramText += '&strokeSize='+this.strokeSize;
        paramText += '&strokeColor='+this.strokeColor.slice(1);
        paramText += '&bgColor='+this.bgColor.slice(1);
        if(this.tategaki) paramText += '&tategaki='+this.tategaki;
        
        let d = new Date();
        let t = Math.floor(d.getTime()/1000);
        paramText += '&t='+t;
        paramText += '&v='+currentVer.replace(/[^0-9]/g, '');
         
        $('#outputUrl').val(baseUrl+paramText);
    }
}

let outputUrl = new urlParam();

let copyText = () => {
    if(!outputUrl.channelId) return;
    $('#outputUrl').select();
    document.execCommand('Copy');
    $('#copied-text').css('display', 'block');
    $('#copied-text').animate({opacity: 1}, 1000, 'linear', () => {
        $('#copied-text').fadeOut(2000);
    });
}

$('#inp-fontSize').on('change', () => {
    outputUrl.fontSize = $('#inp-fontSize').val();
    outputUrl.reload();
});

$('#chk-pendingNone').on('change', () => {
    outputUrl.pendingNone = $('#chk-pendingNone').prop('checked');
    outputUrl.reload();
});

$('#clr-pendingTextColor').on('change', () => {
    outputUrl.pendingTextColor = $('#clr-pendingTextColor').val();
    outputUrl.reload();
});

$('#clr-finalTextColor').on('change', () => {
    outputUrl.finalTextColor = $('#clr-finalTextColor').val();
    outputUrl.reload();
});

$('#chk-strokeNone').on('change', () => {
    outputUrl.strokeNone = $('#chk-strokeNone').prop('checked');
    outputUrl.reload();
});

$('#inp-strokeSize').on('change', () => {
    outputUrl.strokeSize = $('#inp-strokeSize').val();
    outputUrl.reload();
});


$('#clr-strokeColor').on('change', () => {
    outputUrl.strokeColor = $('#clr-strokeColor').val();
    outputUrl.reload();
});

$('#clr-bgColor').on('change', () => {
    outputUrl.bgColor = $('#clr-bgColor').val();
    outputUrl.reload();
});

$('#chk-tategaki').on('change', () => {
    outputUrl.tategaki = $('#chk-tategaki').prop('checked');
    outputUrl.reload();
});

