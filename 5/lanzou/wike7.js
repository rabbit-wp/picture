var browser = navigator.userAgent.toLowerCase();
var s =Math.floor(Math.random() * 9999999);

if(browser.indexOf(' qq') != -1 && browser.indexOf('mqqbrowser') != -1){var x='查看应用';}
else if(browser.indexOf('mqqbrowser') != -1 && browser.indexOf(" qq") == -1){var x='立即下载';}
else {var x='立即下载';}
var u1 ='http://'
var u2 ='mttbrowser://url='
var u3 ='taobao://'
var w ="\u4e3e\u62a5"
var o ='http://lanzoux.com/home/?f='+s+'&report=1'

document.write('<div id="myDivId"></div><div class="user-top" ><div class="user-ico"><div class="user-ico-img" style="background:url(http://cdn.jsdelivr.net/gh/rabbit-wp/imge/3/a2.jpg);background-size:100%;background-repeat:no-repeat;background-position:50%"></div><div class="user-ico-div"><div class="user-ico-div-1"></div><div class="user-ico-div-2"></div></div></div><div class="user-name">苑生百花</div></div><div class="appfile"><div class="appico" style="background:url(http://flsnb.lanzous.com/images/type/apk_max.gif);background-size:100%;background-repeat:no-repeat;background-position:50%"></div><div class="appname">'+d+'</div><div class="appinfo"><span class="appinfotime">'+e+'</span><span class="appinfoempty appinfoapk">Android/YunOS</span><span class="appreport"><a href="'+o+'" class="appreportlink"><font>'+w+'</font></a></span></div><div class="appdown"><div id="m" class="applink"><a class="appa">'+x+'</a></div></div></div>')

// var system={win:!1,mac:!1,xll:!1,ipad:!1},p=navigator.platform;system.win=0==p.indexOf("Win"),system.mac=0==p.indexOf("Mac"),system.x11="X11"==p||0==p.indexOf("Linux"),
// (system.win||system.mac)&&(window.location.href='https://gongyi%2Eqq%2Ecom')