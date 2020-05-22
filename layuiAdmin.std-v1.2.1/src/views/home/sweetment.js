var sweetment = {
    data : {
        sweetmentlist: [
            {
                oid:'01',
                oimg:"../../layuiadmin/layui/images/c.png",
                oname:'蛋糕',
                foodinformationlist:[
                    {
                        fid:10,
                        fname:'黑森林蛋糕小号',
                        fprice:20,
                    },
                    {
                        fid:11,
                        fname:'黑森林蛋糕大号',
                        fprice:31,
                    }
                ]

            },
            {
                oid:'02',
                oimg:"../../layuiadmin/layui/images/c.png",
                oname:'蛋糕',
                foodinformationlist:[
                    {
                        fid:10,
                        fname:'黑森林蛋糕小号',
                        fprice:20,
                    },
                    {
                        fid:11,
                        fname:'黑森林蛋糕大号',
                        fprice:31,
                    }
                ]

            }, {
                oid:'03',
                oimg:"../../layuiadmin/layui/images/c.png",
                oname:'蛋糕',
                foodinformationlist:[
                    {
                        fid:10,
                        fname:'黑森林蛋糕小号',
                        fprice:20,
                    },
                    {
                        fid:11,
                        fname:'黑森林蛋糕大号',
                        fprice:31,
                    }
                ]

            }, {
                oid:'04',
                oimg:"../../layuiadmin/layui/images/c.png",
                oname:'蛋糕',
                foodinformationlist:[
                    {
                        fid:10,
                        fname:'黑森林蛋糕小号',
                        fprice:20,
                    },
                    {
                        fid:11,
                        fname:'黑森林蛋糕大号',
                        fprice:31,
                    }
                ]

            },
        ],
        currentOid: null

    },
    render : function () {
        document.getElementById('sweetmentShow').innerHTML = template('sweetmentTemplate', { data: sweetment.data });
        sweetment.bindfoodlist();
    },
    bindfoodlist : function () {
        layui.use('layer', function () {
            var $ = layui.jquery, layer = layui.layer;
            var active = {
                offset: function (othis) {
                    //var type = othis.data('type')
                    // text = othis.text();
                    layer.open({
                        type: 1
                        , offset: 'auto'
                        , title: '选择规格'
                        , area: ['700px', '500px']
                        , id: 'foodInformationPop'
                        , content: $("#foodLayerShows").html()
                        , btn: 0
                        , btnAlign: 'c'
                        , shade: 0.3
                        , yes: function () {
                            layer.closeAll();
                        }
                    });
                }
            };

            $('#foodinformations .layui-upload-img').on('click', function () {
                var othis = $(this), method = othis.data('method');
                oid = othis.data('oid');
                sweetment.currentOid = oid;
                document.getElementById('foodLayerShows').innerHTML = template('fiTemplates', { data: sweetment });
                active[method] ? active[method].call(this, othis) : '';
                sweetment.bindFoodOrder();
            });

        });
    },
    bindFoodOrder: function () {
        $('#foodInformationPop .divfid').on('click', function () {
            var othis = $(this)
            fid = parseInt( othis.data('fid'));
            fprice = parseInt( othis.data('fprice'));
            fname = othis.data('fname');
            var item = {
                fid: fid,
                fimg: '../../layuiadmin/layui/images/kiko.png',
                fname: fname,
                fprice: fprice,
                preprice: '57',
                fnum: 1,
                /*  fpic: '图片',
                  fbeizhu: '备注'*/
            };
            layer.closeAll();
            Food.addItem(item);
            Food.render();


        });

    },

}