for(var i=0;i<1;i++){
    url = window.location.href;
    ck = String(document.cookie);
    szb = url.split("\/");
    puid =szb[9];
    group_id = szb[11];
    vote_id = szb[7];
    actor_id = szb[13];
    minimum = "1";
    scopeMax = "1";
    vd = document.documentElement.outerHTML;
    reg3=/(table (.+?) id=\")(.*?)(\")/;
    vd = String(vd.match(reg3));
    vd = vd.split(",");
    vd =vd[3];
    $.ajax({
        url: "http://www.yiban.cn/vote/vote/act",
        type: "post",
        dataType: "json",
        data: {
            puid:puid,
                group_id:group_id,
            vote_id:vote_id,
            actor_id:actor_id,
            voptions_id:vd,
            minimum:minimum,
            scopeMax:scopeMax
        },
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
            "Referer": url,
            "Cookie": ck,
            "Connection":"keep-alive",
        }
    });
    console.log("投票完成，返回主页！");
};