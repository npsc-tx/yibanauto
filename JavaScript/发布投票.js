        	//随机古诗1 - 用作投票
            $.getJSON("https://v1.jinrishici.com/all.json",
            function (data) {
                gswtm1 = data.origin; //题目1
                gswnr1 = data.content; //内容1
                gswzz1 = data.author; //作者1

                $.getJSON("https://v1.jinrishici.com/all.json",
                    function (data) {
                        gswtm2 = data.origin; //题目2
                        gswnr2 = data.content; //内容2
                        gswzz2 = data.author; //作者2

                        ck = String(document.cookie);
                        var myDate = new Date();
                        n = myDate.getFullYear();
                        y = myDate.getMonth()+1;
                        r = myDate.getDate()+1;
                        datetp = n+"-" + y + "-" + r + "+23:16";

                        $.getJSON("http://www.yiban.cn/ajax/group/getJoined",
                        function (data) {
                            js_id = data.data[0].id;
                            js_user_id = data.data[0].puid;

                            // 全局填写参数
                            ybwz = "www.yiban.cn"; //易班主机地址
                            fdyid = js_user_id  ;//辅导员id（易班群主）
                            bjid = js_id  ;//班级群id
                            tpbt = "诗句“"+ gswnr1 + "”出自哪儿？" ;//投票标题
                            tpbt1 = gswzz1 + "的《" + gswtm1 + "》";//投票选项1
                            tpbt2 = gswzz2 + "的《" + gswtm2 + "》" ;//投票选项2

                            $.ajax({
                                url: "http://www.yiban.cn/vote/vote/add",
                                type: "post",
                                dataType: "json",
                                data: {
                                    puid: fdyid,
                                    scope_ids:bjid,
                                    title:tpbt,
                                    options_num:"2",
                                    scopeMin:"1",
                                    scopeMax:"1",
                                    minimum:"1",
                                    voteValue:datetp,
                                    voteKey:"2",
                                    public_type:"0",
                                    isAnonymous:"1",
                                    voteIsCaptcha:"0",
                                    istop:"1",
                                    sysnotice:"2",
                                    isshare:"1",
                                    rsa:"1",
                                    dom:".js-submit",
                                    group_id:bjid,
                                    subjectTxt_1:tpbt1,
                                    subjectTxt_2:tpbt2,
                                },
                                cache: false,
                                headers: {
                                    "Host": ybwz,
                                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:47.0) Gecko/20100101 Firefox/47.0",
                                    "Accept": "application/json, text/javascript, */*; q=0.01",
                                    "Accept-Language": "zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3",
                                    "Accept-Encoding": "gzip, deflate",
                                    "DNT": "1",
                                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                                    "X-Requested-With": "XMLHttpRequest",
                                    "Referer": "http://www.yiban.cn/my/publishvote",
                                    "Cookie": ck,
                                    "Connection":"keep-alive"
                                }
                            });
                        }
                    );
                });　
            }
        );