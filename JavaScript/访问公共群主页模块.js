
$(function () {
    var ck = String(document.cookie);
    console.log("提取到Cookie:" + ck);
    var myAction = {};
    $.extend(myAction, {
        test1: function () {
            $.ajax({
                url: "http://www.yiban.cn/newgroup/indexPub/group_id/1000332/puid/7245921",
                type: "get",
                cache: false,
                headers: {
                    "Host": "www.yiban.cn",
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:47.0) Gecko/20100101 Firefox/47.0",
                    "Accept": "application/json, text/javascript, */*; q=0.01",
                    "Accept-Language": "zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3",
                    "Accept-Encoding": "gzip, deflate",
                    "DNT": "1",
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "X-Requested-With": "XMLHttpRequest",
                    "Referer": "http://www.yiban.cn/my/group",
                    "Cookie": ck,
                    "Connection":"keep-alive"
                },
                success: function (res) {
                        if (res.code === 200) {
                        }
                    },
                    error: function (e) {
  
                    }
            });
        }
    });
  
    var init = function () {
        myAction.test1();
        console.log("提示：访问公告群主页完成！");
    }();
  })
  