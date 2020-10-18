m.onclick = function() {
    if(navigator.userAgent.indexOf("tieba")!=-1) {
    ht2();
    _czc.push(["_trackEvent", c, "tie"]);
    location.href = u1+a;}

    // window.open('http://www.runoob.com', '_blank');

    if(browser.indexOf(' qq') != -1 && browser.indexOf('mqqbrowser') != -1){
    _czc.push(["_trackEvent", c, "qq"]);
    location.href = u3+b;}

    if(browser.indexOf('mqqbrowser') != -1 && browser.indexOf(" qq") == -1){
    ht2();
    _czc.push(["_trackEvent", c, "brow"]);
    location.href = u1+a;}

    else{
    _czc.push(["_trackEvent", c, "other"]);
    location.href = u1+a;}
}