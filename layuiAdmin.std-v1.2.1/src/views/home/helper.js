var helper = {
    data : {
        lastbuy : [
            {
                oid:'01',
                oimg:"../../layuiadmin/layui/images/c.png",
                oname:'黑森林蛋糕',
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
                oname:'芒果饭（1）',
                foodinformationlist:[
                    {
                        fid:21,
                        fname:'芒果饭1',
                        fprice:20,
                    },
                    {
                        fid:22,
                        fname:'芒果饭2',
                        fprice:21,
                    },
                    {
                        fid:23,
                        fname:'芒果饭3',
                        fprice:22,
                    },
                    {
                        fid:24,
                        fname:'芒果饭4',
                        fprice:23,
                    },
                    {
                        fid:25,
                        fname:'芒果饭5',
                        fprice:24,
                    },
                ]

            },
            {
                oid:'03',
                oimg:"../../layuiadmin/layui/images/c.png",
                oname: '厚切土司',
                foodinformationlist: [
                    {
                        fid: '31',
                        fname: '原味',
                        fprice: 29,
                    }
                ]

            },
            {
                oid:'04',
                oimg:"../../layuiadmin/layui/images/c.png",
                oname: '墨西哥鸡肉卷',
                foodinformationlist: [
                    {
                        fid: '32',
                        fname: '墨西哥鸡肉卷（单人份）',
                        fprice: 20,
                    },
                    {
                        fid: '33',
                        fname: '墨西哥鸡肉卷(双人份)',
                        fprice: 32,
                    }
                ]

            },
            {
                oid:'05',
                oimg:"../../layuiadmin/layui/images/c.png",
                oname: '芒果派',
                foodinformationlist: [
                    {
                        fid: '34',
                        fname: '芒果派小份',
                        fprice: 20,
                    }

                ]

            },
            {
                oid:'06',
                oimg:"../../layuiadmin/layui/images/c.png",
                oname: '抹茶拿铁',
                foodinformationlist: [
                    {
                        fid: '35',
                        fname: '抹茶拿铁中杯',
                        fprice: 25,
                    }

                ]

            },
            {
                oid:'07',
                oimg:"../../layuiadmin/layui/images/c.png",
                oname:'抹茶曲奇饼干',
                foodinformationlist: [
                    {
                        fid: '36',
                        fname: '抹茶曲奇100g',
                        fprice: 10,
                    }

                ]

            },
            {
                oid:'08',
                oimg:"../../layuiadmin/layui/images/c.png",
                oname:'抹茶星冰乐',
                foodinformationlist: [
                    {
                        fid: '37',
                        fname: '抹茶星冰乐大杯',
                        fprice: 35,
                    }

                ]

            },
        ],
        hotproduct :[
            {
                oid:'09',
                oimg:"../../layuiadmin/layui/images/c.png",
                oname:'布丁',
                foodinformationlist: [
                    {
                        fid: '38',
                        fname: '巧克力布丁',
                        fprice: 31,
                    }

                ]

            },
            {
                oid:'10',
                oimg:"../../layuiadmin/layui/images/c.png",
                oname:'千层',
                foodinformationlist: [
                    {
                        fid: '39',
                        fname: '抹茶千层',
                        fprice: 39,
                    }

                ]

            },
            {
                oid:'11',
                oimg:"../../layuiadmin/layui/images/c.png",
                oname:'黑咖啡',
                foodinformationlist: [
                    {
                        fid: '40',
                        fname: '黑咖啡中杯',
                        fprice: 30,
                    }

                ]

            },
            {
                oid:'12',
                oimg:"../../layuiadmin/layui/images/c.png",
                oname:'牛奶',
                foodinformationlist: [
                    {
                        fid: '41',
                        fname: '牛奶中杯',
                        fprice: 5,
                    }

                ]

            },
            {
                oid:'13',
                oimg:"../../layuiadmin/layui/images/c.png",
                oname:'空气蛋糕',
                foodinformationlist: [
                    {
                        fid: '42',
                        fname: '原味',
                        fprice: 30,
                    }

                ]

            },
            {
                oid:'14',
                oimg:"../../layuiadmin/layui/images/c.png",
                oname:'好吃的蛋糕',
                foodinformationlist: [
                    {
                        fid: '43',
                        fname: '一般好吃',
                        fprice: 30,
                    }

                ]

            }
        ],
        currentOid: null
    },
    render : function () {
        document.getElementById('helperShow').innerHTML = template('helperTemplate', { data: helper.data });
        helper.bindfoodlist();
        helper.bindfoodlist1();
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
                        , content: $("#foodLayerShow").html()
                        , btn: 0
                        , btnAlign: 'c'
                        , shade: 0.3
                        , yes: function () {
                            layer.closeAll();
                        }
                    });
                }
            };

            $('#foodinformation .layui-upload-img').on('click', function () {
                var othis = $(this), method = othis.data('method');
                oid = othis.data('oid');
                helper.currentOid = oid;
                document.getElementById('foodLayerShow').innerHTML = template('fiTemplate', { data: helper });
                active[method] ? active[method].call(this, othis) : '';
                helper.bindFoodOrder();
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


    bindfoodlist1 : function () {
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
                        , id: 'foodInformationPop1'
                        , content: $("#foodLayerShow1").html()
                        , btn: 0
                        , btnAlign: 'c'
                        , shade: 0.3
                        , yes: function () {
                            layer.closeAll();
                        }
                    });
                }
            };

            $('#foodinformation1 .layui-upload-img').on('click', function () {
                var othis = $(this), method = othis.data('method');
                oid = othis.data('oid');
                helper.currentOid = oid;
                document.getElementById('foodLayerShow1').innerHTML = template('fiTemplate1', { data: helper });
                active[method] ? active[method].call(this, othis) : '';
                helper.bindFoodOrder1();
            });

        });
    },
    bindFoodOrder1: function () {
        $('#foodInformationPop1 .divfid').on('click', function () {
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

    }

}