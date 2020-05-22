var lightfood = {
    data : {
        lightfoodlist :[
            {
                oid:'01',
                oimg:"../../layuiadmin/layui/images/c2.png",
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
                oimg:"../../layuiadmin/layui/images/c2.png",
                oname:'蛋糕',
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
                oimg:"../../layuiadmin/layui/images/c2.png",
                oname:'蛋糕',
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
                oimg:"../../layuiadmin/layui/images/c2.png",
                oname:'蛋糕',
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
                oimg:"../../layuiadmin/layui/images/c2.png",
                oname:'蛋糕',
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
                oimg:"../../layuiadmin/layui/images/c2.png",
                oname:'蛋糕',
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
                oimg:"../../layuiadmin/layui/images/c2.png",
                oname:'蛋糕',
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
                oimg:"../../layuiadmin/layui/images/c2.png",
                oname:'蛋糕',
                foodinformationlist: [
                    {
                        fid: '37',
                        fname: '抹茶星冰乐大杯',
                        fprice: 35,
                    }

                ]

            },
            {
                oid:'09',
                oimg:"../../layuiadmin/layui/images/c2.png",
                oname:'蛋糕',
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
                oimg:"../../layuiadmin/layui/images/c2.png",
                oname:'蛋糕',
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
                oimg:"../../layuiadmin/layui/images/c2.png",
                oname:'蛋糕',
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
                oimg:"../../layuiadmin/layui/images/c2.png",
                oname:'蛋糕'

            },
            {
                oid:'13',
                oimg:"../../layuiadmin/layui/images/c2.png",
                oname:'蛋糕'

            },
            {
                oid:'14',
                oimg:"../../layuiadmin/layui/images/c2.png",
                oname:'蛋糕'

            },
            {
                oid:'15',
                oimg:"../../layuiadmin/layui/images/c2.png",
                oname:'蛋糕'

            },
            {
                oid:'16',
                oimg:"../../layuiadmin/layui/images/c2.png",
                oname:'蛋糕'

            },
        ],
        currentOid: null

    },
    render :function () {
        document.getElementById('lightfoodShow').innerHTML = template('lightfoodTemplate', { data: lightfood.data });
        lightfood.bindfoodlist();


    },
    bindfoodlist : function () {
        layui.use('layer', function () {
            var $ = layui.jquery, layer = layui.layer;
            var active = {
                offset: function (othis) {
                    layer.open({
                        type: 1
                        , offset: 'auto'
                        , title: '选择规格'
                        , area: ['700px', '500px']
                        , id: 'foodInformationPop'
                        , content: $("#foodLayerShowl").html()
                        , btn: 0
                        , btnAlign: 'c'
                        , shade: 0.3
                        , yes: function () {
                            layer.closeAll();
                        }
                    });
                }
            };

            $('#foodinformationl .layui-upload-img').on('click', function () {
                var othis = $(this), method = othis.data('method');
                oid = othis.data('oid');
                lightfood.currentOid = oid;
                document.getElementById('foodLayerShowl').innerHTML = template('fiTemplate2', { data: lightfood });
                active[method] ? active[method].call(this, othis) : '';
                lightfood.bindFoodOrder();
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