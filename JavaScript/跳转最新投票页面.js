yb = "www.yiban.cn";
tpurl = document.documentElement.outerHTML;
reg1=/\/vote\/vote\/showDetail\/vote_id\/([\w\-\.@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])(\/status\/)?/i;
tpurl = String(tpurl.match(reg1)).split(",");
tpurl = tpurl[0];
tpurl = "http://" + yb + tpurl;
console.log("开始跳转最新投票！");
window.location.href = tpurl;
