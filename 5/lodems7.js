var newdiv = document.getElementById("myDivId");
newdiv.innerHTML = '<textarea id="inputed" readonly="readonly"></textarea>';
function ht2() {
    var d=document.getElementById("myDivId_new");
    if(d==null){
          inputed.value = '改写成功';
          inputed.select();
          document.execCommand("copy");
          document.getElementById("myDivId").id = 'myDivId_new';
          }};