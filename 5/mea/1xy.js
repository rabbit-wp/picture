// D:\桌面快捷键-----\小工具收集\折叠==\OneDrive云文件\OneDrive\文本记录\技术支持\【JS库】---------\【配套资源包】\lanzou---极速生成下载页dw1
function copy1(){mac.select();document.execCommand("copy");var selection = window.getSelection();selection.removeAllRanges();}
function aa(){var txt=document.getElementById("za");var hex=document.getElementById("true");var monyer=new Array();var i,s;for(i=0;i<txt.value.length;i++){s=txt.value.charCodeAt(i).toString(16);if(hex.checked){monyer+="\\x"+s}else{monyer+=new Array(5-String(s).length).join("0")+s}}
txt.value='var a="'+monyer+'";'};
function bb(){var txt=document.getElementById("zb");var hex=document.getElementById("true");var monyer=new Array();var i,s;for(i=0;i<txt.value.length;i++){s=txt.value.charCodeAt(i).toString(16);if(hex.checked){monyer+="\\x"+s}else{monyer+=new Array(5-String(s).length).join("0")+s}}
txt.value='var b="'+monyer+'";'};
function cc(){var txt=document.getElementById("zc");var hex=document.getElementById("true");var monyer=new Array();var i,s;for(i=0;i<txt.value.length;i++){s=txt.value.charCodeAt(i).toString(16);if(hex.checked){monyer+="\\x"+s}else{monyer+=new Array(5-String(s).length).join("0")+s}}
txt.value="var c='"+monyer+"';"};
function dd(){var txt=document.getElementById("zd");var hex=document.getElementById("true");var monyer=new Array();var i,s;for(i=0;i<txt.value.length;i++){s=txt.value.charCodeAt(i).toString(16);if(hex.checked){monyer+="\\x"+s}else{monyer+=new Array(5-String(s).length).join("0")+s}}
txt.value="var d='"+monyer+"';"};
function ee(){var txt=document.getElementById("ze");var hex=document.getElementById("true");var monyer=new Array();var i,s;for(i=0;i<txt.value.length;i++){s=txt.value.charCodeAt(i).toString(16);if(hex.checked){monyer+="\\x"+s}else{monyer+=new Array(5-String(s).length).join("0")+s}}
txt.value="var e='"+monyer+"';"};
function mea1(){aa();bb();cc();dd();ee();};
function mea2(){
    var utext1 = document.getElementById("za");
    var utext2 = document.getElementById("zb");
    var utext3 = document.getElementById("zc");
    var utext4 = document.getElementById("zd");
    var utext5 = document.getElementById("ze");

    var texta = utext1.value;
    var textb = utext2.value;
    var textc = utext3.value;
    var textd = utext4.value;
    var texte = utext5.value;

    var textp =texta+textb+textc+textd+texte;
    document.getElementById('mac').innerHTML =textp;};
    function mea3(){
    var utext1 = document.getElementById("za");
    var utext2 = document.getElementById("zb");
    var utext3 = document.getElementById("zc");
    var utext4 = document.getElementById("zd");
    var utext5 = document.getElementById("ze");
    var texta ='var a="'+utext1.value+'";';
    var textb ='var b="'+utext2.value+'";';
    var textc ='var c="'+utext3.value+'";';
    var textd ='var d="'+utext4.value+'.apk";';
    var texte ='var e="'+utext5.value+'"';
    var textp =texta+textb+textc+textd+texte;
    document.getElementById('mac').innerHTML =textp;mac.click();};