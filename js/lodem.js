    function copyText() {
    var d=document.getElementById("myDivId_new");
    if(d==null){
      document.getElementById('mao1').innerHTML = '你好';
        var text = document.getElementById("mao1").innerText;
          inputed.value = text;
          inputed.select();
          document.execCommand("copy");
          document.getElementById("myDivId").id = 'myDivId_new';
    }else{
}
    }