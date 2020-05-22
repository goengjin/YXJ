var User = {

    data: {
        id:0,
        phone: /*'1278789798',*/'',
        balance: 78,
        img1: "../../layuiadmin/layui/images/组12.png",
        img2: "../../layuiadmin/layui/images/组11.png",

        viplist : [
            {
                img1:'../../layuiadmin/layui/images/face2.png',
                id:1,
                phone: '22222',
                balance: 90,
                isfacebind: 1,
                selected: 0
            },
            {
                img1: '../../layuiadmin/layui/images/face2.png',
                id: 2,
                phone: '1111111',
                balance: 90,
                isfacebind: 0,
                selected: 0
            },
            {
                img1: '../../layuiadmin/layui/images/face2.png',
                id: 3,
                phone: '1359871088',
                balance: 90,
                isfacebind: 1,
                selected: 0
            },
            {
                img1: '../../layuiadmin/layui/images/face2.png',
                id: 4,
                phone: '444444',
                balance: 90,
                isfacebind: 1,
                selected: 0
            },

        ]
    },



    render: function () {

        document.getElementById('UserShow').innerHTML = template('UserTemplate', { data: User.data });
        document.getElementById('UserListShow').innerHTML = template('UserListTemplate', { data: User.data });
        User.bindVip();

    },
    render2: function () {

      
        $("#vipbindList #UserListShow").html(template('UserListTemplate', { data: User.data }));
      
       

    },

    bindVip : function () {
        layui.use('layer', function() {
            var $ = layui.jquery, layer = layui.layer;
            var active = {

               
                offset: function (othis) {
                   
                    var type = othis.data('type')
                        , text = othis.text();
                    layer.open({
                        type: 1
                        , offset: 'auto'
                        , title: '会员绑定'
                        , area: ['1000px', '600px']
                        , id: 'vipbindList' 
                        , content: $("#facebindPop").html()
                        , btn: 0
                        , btnAlign: 'c'
                        , shade: 0.3
                        , yes: function () {
                            layer.closeAll();
                        }
                    });
                }
            };

            $('#vipbind .layui-btn').on('click', function () {
                var othis = $(this), method = othis.data('method');
                active[method] ? active[method].call(this, othis) : '';
            });

            $(document).on('click', '#already', function () {
                var othis = $(this);
                var data = {

                    img1: othis.data('img1'),
                    id: parseInt(othis.data('id')),
                    phone: othis.data('phone')
                };
                var html = template('bindAgainTemplate', { data: data });
                window.alreadyLayerIndex=layer.open({
                    type: 1
                    , offset: 'auto'
                    , title: '重新绑定'
                    , area: ['600px', '500px']
                    , content: html
                    , btn: 0
                    , btnAlign: 'c'
                    , shade: 0.3
                    , yes: function () {
                        layer.closeAll();
                    },

                });
            });

            $(document).on('click', '#bindAgainConfirm', function () {
                var othis = $("#bindAgainPhone");
                var vip = {

                    img1: othis.data('img1'),
                    id: parseInt(othis.data('id')),
                    phone: $("#bindAgainPhone").val(),
                    isfacebind: 1
                }

                User.updateVipBind(vip, User.data.viplist);
                User.render2();
                layer.close(window.alreadyLayerIndex);


            });
            $(document).on('click', '#bindConfirm', function () {
                var othis = $("#bindphone1");
                var vip = {

                    img1: othis.data('img1'),
                    id: parseInt(othis.data('id')),
                    phone: $("#bindphone1").val(),
                    isfacebind:1
                }

                User.updateVipBind(vip, User.data.viplist);
                User.render2();
                layer.close(window.noalreadyLayerIndex);
                

            });

            $(document).on('click', '#noalready', function () {
                var othis = $(this);
                var data = {

                    img1: othis.data('img1'),
                    id: parseInt(othis.data('id')),
                    phone: othis.data('phone')
                };
                var html = template('PhoneNumberTemplate', { data: data });
                window.noalreadyLayerIndex= layer.open({
                    type: 1
                    , offset: 'auto'
                    , title: '人脸绑定'
                    , area: ['600px', '500px']
                    , content: html
                    , btn: 0
                    , btnAlign: 'c'
                    , shade: 0.3
                    , yes: function () {
                        layer.closeAll();
                    },

                });





                /* var item = {
                     fid: fid,
                     fimg: '../../layuiadmin/layui/images/kiko.png',
                     fname: fname,
                     fprice: fprice,
                     preprice: '57',
                     fnum: 1,
                     /!*  fpic: '图片',
                       fbeizhu: '备注'*!/
                 };
                 layer.closeAll();
                 Food.addItem(item);
                 Food.render();*/
            });
            $(document).on('click', '#userimg', function () {
                var othis = $(this);
                
                id=parseInt(othis.data('id'))
                    
                User.updateVipSelected(id, User.data.viplist);
               
                User.render2();
            });
            $(document).on('click', '#userConfirm', function () {
                User.confirmUser(User.data.viplist);
                layer.closeAll();
                User.render();

            });
          

        })

    },

    updateVipSelected: function (id,list) {

        for (var key in list) {
            if (list[key].id == id) {

                list[key].selected = 1;
            }
            else {
                list[key].selected = 0;
            }
        }
    },
    updateVipBind: function (vip, list) {

        for (var key in list) {
            if (list[key].id == vip.id) {
                list[key].isfacebind = vip.isfacebind;
                list[key].phone = vip.phone;
            }
        }
    },
    confirmUser: function (list) {
        for (var key in list) {
            if (list[key].selected == 1) {
                User.data.id = list[key].id;
                User.data.phone = list[key].phone;
                User.data.img1 = list[key].img1;
                User.data.balance = list[key].balance;
               

                
            }
            
        }
    }



}