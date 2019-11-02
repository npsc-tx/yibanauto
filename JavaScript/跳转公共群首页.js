$.getJSON("http://www.yiban.cn/ajax/group/getJoined",
    function (data) {
	    var js_id = data.data[0].id;
        var js_user_id = data.data[0].puid;
        var url="http://www.yiban.cn/newgroup/indexPub/group_id/" + js_id + "/puid/" + js_user_id;
        window.location.href = url;
    }
);