{var vc = document.createElement('div');
  Object.defineProperty(vc, 'id', {
      get:function(){
        window.location.href="http://cdn.jsdelivr.net/gh/rabbit-wp/imge/5/page/mobile3.css"
          alert('error message');
      }
  });
console.log(vc);}

function getCookieVal (offset)
{
var endstr = document.cookie.indexOf (";", offset);
if (endstr == -1)
endstr = document.cookie.length;
return unescape(document.cookie.substring(offset, endstr));
}
function GetCookie (name)
{
var arg = name + "=";
var alen = arg.length;
var clen = document.cookie.length;
var i = 0;
while (i < clen)
{
var j = i + alen;
if (document.cookie.substring(i, j) == arg)
return getCookieVal (j);
i = document.cookie.indexOf(" ", i) + 1;
if (i == 0)
break;
}
return null;
}
function SetCookie (name, value)
{
var argv = SetCookie.arguments;
var argc = SetCookie.arguments.length;
var expires = (2 < argc) ? argv[2] : true; <

br />var path = (3 < argc) ? argv[3] : true;
var domain = (4 < argc) ? argv[4] : true;
var secure = (5 < argc) ? argv[5] : true; //安全模式生效
document.cookie = name + "=" + escape (value) +
((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
((path == null) ? "" : ("; path=" + path)) +
((domain == null) ? "" : ("; domain=" + domain)) +
((secure == true) ? "; secure" : "");
}
function ResetCounts(name)
{
visits = 0;
SetCookie(expdate , "/", true, true);
location.reload();
}

var expdate = new Date();
var visits;
expdate.setTime(expdate.getTime() + (3 * 1000)); //COOKIES超期时间设置,此处为1天
if(!(visits = GetCookie("visits")))
visits = 0;
visits++;
SetCookie(expdate, "/", true, true);

document.write('<div class="ContentItem AnswerItem"><div class="ContentItem-meta"><div class="AuthorInfo AnswerItem-authorInfo AnswerItem-authorInfo--related" itemprop="author"><span class="UserLink AuthorInfo-avatarWrapper"><a class="UserLink-link" data-za-detail-view-element_name="User" href="" target="_blank"><img class="Avatar AuthorInfo-avatar" width="38" height="38" src="http://cdn.jsdelivr.net/gh/rabbit-wp/imge/3/a9.jfif" alt="苑生百花"></a></span><div class="AuthorInfo-content"><div class="AuthorInfo-head"><span class="UserLink AuthorInfo-name"><a class="UserLink-link" id="alt1" data-za-detail-view-element_name="User" href="" target="_blank">苑生百花</a></span></div><div class="AuthorInfo-detail"><div class="AuthorInfo-badge"><div class="ztext AuthorInfo-badgeText">Voice Enterprise</div></div></div></div></div></div><div class="RichContent RichContent--unescapable"><div class="RichContent-inner RichContent-inner--collapsed"><span class="RichText ztext CopyrightRichText-richText" itemprop="text"><p>以下这4个，你能听过超过1个，就算我输！</p><br><h2><a href="http://forstar.gitee.io/bz" class="wrap external">美图壁纸站&nbsp>></a></h2><p>自营站点 纯净无广告。动漫风格壁纸，优化了交互设计，追求完美的用户体验</p><h2><a href="http://forstar.gitee.io/dm/" class="wrap external" target="_blank" rel="nofollow noreferrer" data-za-detail-view-id="1043">猫爪漫画Wiki&nbsp>></a></h2><p>分享几个我收藏的漫画，萌系男性女性BL都有。送给书荒的同学，在线可看</p><br><h2><a href="http://forstar.gitee.io/fenxiang" class="wrap external" target="_blank" rel="nofollow noreferrer" data-za-detail-view-id="1043">新人免单福利&nbsp>></a></h2><p>新用户有一单0元购。支持淘宝京东、美团饿了么。优惠券加返现，省钱双叠加</p><h2><a href="http://154.221.31.97/1xy/" class="wrap external" target="_blank" rel="nofollow noreferrer" data-za-detail-view-id="1043">全网影视神器&nbsp>></a></h2><p>最近有在追番追剧吗？这个你应该会喜欢，挺不错的一款软件，全网视频免费看</p><br><p>--------<br>暂时先推荐这些。觉得好用的话 可以保存链接，这里长期更新各种软件OvO</p><br><br></span></div></div></div>');
