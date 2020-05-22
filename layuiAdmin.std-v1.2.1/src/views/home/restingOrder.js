var restingOrder = {
    data :{
        restinglist : [
            {
                mid:1,
                mimg:"../../layuiadmin/layui/images/moon.png",
                mprice:'134',
                mtime:'18:00',
            },
            {
                mid:2,
                mimg:"../../layuiadmin/layui/images/moon.png",
                mprice:'19',
                mtime:'18:08',
            },
            {
                mid:3,
                mimg:"../../layuiadmin/layui/images/moon.png",
                mprice:'80',
                mtime:'19:00',
            },
            {
                mid:4,
                mimg:"../../layuiadmin/layui/images/moon.png",
                mprice:'190',
                mtime:'22:00',
            },
            {
                mid:5,
                mimg:"../../layuiadmin/layui/images/moon.png",
                mprice:'134',
                mtime:'18:00',
            },
            {
                mid:6,
                mimg:"../../layuiadmin/layui/images/moon.png",
                mprice:'134',
                mtime:'18:00',
            },
            {
                mid:7,
                mimg:"../../layuiadmin/layui/images/moon.png",
                mprice:'134',
                mtime:'18:00',
            },{
                mid:8,
                mimg:"../../layuiadmin/layui/images/moon.png",
                mprice:'134',
                mtime:'18:00',
            },
            {
                mid:9,
                mimg:"../../layuiadmin/layui/images/moon.png",
                mprice:'134',
                mtime:'18:00',
            },
            {
                mid:10,
                mimg:"../../layuiadmin/layui/images/moon.png",
                mprice:'19',
                mtime:'18:08',
            },
            {
                mid:11,
                mimg:"../../layuiadmin/layui/images/moon.png",
                mprice:'80',
                mtime:'19:00',
            },
        ],


            },

    render: function () {
       

        document.getElementById('restingOrderShow').innerHTML = template('restingOrderTemplate', { data: restingOrder.data });
        restingOrder.bindDel();

    },

    bindDel : function () {
        $("div#restingOrderShow .del").click(function () {
            var mid =parseInt ( $(this).attr('data-id'));
            restingOrder.deleteItem(mid, restingOrder.data.restinglist);
                restingOrder.render();
        });
    },
    deleteItem: function (item, list) {
        for (var key in list) {
            if (list[key].mid === item) {
                list.splice(key, 1)
            }
        }
    },
}