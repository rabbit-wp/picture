var ua = navigator.userAgent.toLowerCase();
if(ua.indexOf('pa qq') > -1){var b="mttbrowser://url=";}
else{var b ="taobao://";}

ready1.onclick = function() {top.location.href= b+"bilibili.com";}