var Address = {
    data:{
        AddressCost: 0,
        AddressSelectId: 1,
        AddressDataTime: "2020-04-12",
        AddressMenu: "无",
        AddressList: [
            {
                uid: 01,
                uname: '童盈盈',
                uphone: '13588890876',
                uaddress: '瓯海区华中科技研究院C506瓯海区华中科技研究院C506瓯海区华中科技研究院C506',
                selected: 0
            },
            {
                uid: 02,
                uname: '童盈盈',
                uphone: '13588890876',
                uaddress: '瓯海区华中科技研究院C506瓯海区华中科技研究院C506瓯海区华中科技研究院C506',
                selected: 0
            },
            {
                uid: 03,
                uname: '童盈盈',
                uphone: '13588890876',
                uaddress: '瓯海区华中科技研究院C506瓯海区华中科技研究院C506瓯海区华中科技研究院C506',
                selected: 0
            },
        ]
    },

    render: function () {
        document.getElementById('AddressShow').innerHTML = template('AddressTemplate', { data: Address.data });
        Address.bindDel();
        Address.bindMemo();
        Address.bindDate();
        Address.bindAddAndEdit();
        Address.bindJump();
    },
    bindJump : function (){
        $("#xiadanbutton").click(function () {

            window.location.href = "./pagePay.html";

        });
        $("#guadanbutton").click(function () {
            window.location.href ="./pageRestingOrder.html";

        });
    },


    bindDel: function () {
        $("div#addresslistshow .del").click(function () {
            var uid =parseInt ( $(this).attr('data-id'));
            Address.deleteItem(uid, Address.data.AddressList);
                Address.render();
        });
    },




    bindMemo: function () {

        $("#mixpay1").click(function () {
            var text = $(this).text();
            var $input = $(".layui-textarea")
            $input.val($input.val() + text + '；');
        });
        $("#mixpay2").click(function () {
            var text = $(this).text();
            var $input = $(".layui-textarea")
            $input.val($input.val() + text + '；');
        });
        $("#mixpay3").click(function () {
            var text = $(this).text();
            var $input = $(".layui-textarea")
            $input.val($input.val() + text + "；");
        });
    },
    bindDate: function () {
        layui.use('laydate', function () {
            var laydate = layui.laydate;
            //日期时间有效范围的设定:
            laydate.render({
                elem: '#test3' // 绑定元素的id
                , type: 'datetime' // 设置格式：日期时间
                , min: '1994-1-1 12:30:00' // 设置日期时间的最小值
                , max: '2100-1-1 12:30:00' // 设置日期时间的最大值
                , trigger: 'click'
                , theme: '#393D49' // 自定义主题颜色
                , calendar: false // 显示公历节假日
            });
        });
        layui.use('laydate', function () {
            var laydate = layui.laydate;
            laydate.render({
                elem: '#test1' //指定元素
            });
        });
    },
    bindAddAndEdit: function () {

        layui.use('layer', function () {
            var $ = layui.jquery, layer = layui.layer;
            var active = {
                offset: function (othis) {
                    var type = othis.data('type')
                        , text = othis.text();
                    layer.open({
                        type: 1
                        , offset: 'auto'
                        , title: '编辑'
                        , area: ['650px', '450px']
                        , id: 'layerDemo21' + type
                        , content: $("#AddressEdit").html()
                        , btn: 0
                        , btnAlign: 'c'
                        , shade: 0.3
                        , yes: function () {
                            layer.closeAll();
                        }
                    });
                }
            };

            $('#layerDemo21 .layui-upload-img').on('click', function () {
                var othis = $(this), method = othis.data('method');
                active[method] ? active[method].call(this, othis) : '';
            });

        });

        layui.use('layer', function () {
            var $ = layui.jquery, layer = layui.layer;
            var active = {
                offset: function (othis) {
                    var type = othis.data('type')
                        , text = othis.text();
                    layer.open({
                        type: 1
                        , offset: 'auto'
                        , title: '新增地址'
                        , area: ['650px', '450px']
                        , id: 'layerDemo22' + type
                        , content: $("#AddressEdit").html()
                        , btn: 0
                        , closeBtn: 1
                        , btnAlign: 'c'
                        , shade: 0.3
                        , yes: function () {
                            layer.closeAll();
                        }
                    });
                }
            };

            $('#layerDemo22 .layui-btn').on('click', function () {
                var othis = $(this), method = othis.data('method');
                active[method] ? active[method].call(this, othis) : '';
            });

        });

    },
    deleteItem: function (item, list) {
        for (var key in list) {
            if (list[key].uid === item) {
                list.splice(key, 1)
            }
        }
    },
    post: function () {
        console.log(Address.data);

    }


}