var allfood = {
    data : {
       allfoodlist :[
           {
               oid:'01',
               oimg:"../../layuiadmin/layui/images/c1.png",
               oname:'黑森林蛋糕',
               foodinformationlist:[
                   {
                       fid:10,
                       fname:'黑森林蛋糕小小号',
                       fprice:20,
                   },
                   {
                       fid:11,
                       fname:'黑森林蛋糕大大号',
                       fprice:31,
                   }
               ]

           },
           {
               oid:'02',
               oimg:"../../layuiadmin/layui/images/c1.png",
               oname:'黑森林蛋糕(1)',
               foodinformationlist:[
                   {
                       fid:12,
                       fname:'黑森林蛋糕小小号(1)',
                       fprice:20,
                   },
                   {
                       fid:13,
                       fname:'黑森林蛋糕大大号(2)',
                       fprice:31,
                   }
               ]

           },
           {
               oid:'03',
               oimg:"../../layuiadmin/layui/images/c1.png",
               oname:'黑森林蛋糕',
               foodinformationlist:[
                   {
                       fid:14,
                       fname:'黑森林蛋糕小小号(1)',
                       fprice:20,
                   },
                   {
                       fid:15,
                       fname:'黑森林蛋糕大大号(2)',
                       fprice:31,
                   }
               ]

           },
           {
               oid:'04',
               oimg:"../../layuiadmin/layui/images/c1.png",
               oname:'黑森林蛋糕',
               foodinformationlist:[
                   {
                       fid:16,
                       fname:'黑森林蛋糕小小号(1)',
                       fprice:20,
                   },
                   {
                       fid:17,
                       fname:'黑森林蛋糕大大号(2)',
                       fprice:31,
                   }
               ]

           },
           {
               oid:'05',
               oimg:"../../layuiadmin/layui/images/c1.png",
               oname:'黑森林蛋糕',
               foodinformationlist:[
                   {
                       fid:18,
                       fname:'黑森林蛋糕小小号(1)',
                       fprice:20,
                   },
                   {
                       fid:19,
                       fname:'黑森林蛋糕大大号(2)',
                       fprice:31,
                   }
               ]

           },
           {
               oid:'06',
               oimg:"../../layuiadmin/layui/images/c1.png",
               oname:'黑森林蛋糕',
               foodinformationlist:[
                   {
                       fid:20,
                       fname:'黑森林蛋糕小小号(1)',
                       fprice:20,
                   },
                   {
                       fid:21,
                       fname:'黑森林蛋糕大大号(2)',
                       fprice:31,
                   }
               ]

           },
           {
               oid:'07',
               oimg:"../../layuiadmin/layui/images/c1.png",
               oname:'黑森林蛋糕',
               foodinformationlist:[
                   {
                       fid:22,
                       fname:'黑森林蛋糕小小号(1)',
                       fprice:20,
                   },
                   {
                       fid:23,
                       fname:'黑森林蛋糕大大号(2)',
                       fprice:31,
                   }
               ]

           },
           {
               oid:'08',
               oimg:"../../layuiadmin/layui/images/c1.png",
               oname:'黑森林蛋糕',
               foodinformationlist:[
                   {
                       fid:24,
                       fname:'黑森林蛋糕小小号(1)',
                       fprice:20,
                   },
                   {
                       fid:25,
                       fname:'黑森林蛋糕大大号(2)',
                       fprice:31,
                   }
               ]

           },
           {
               oid:'09',
               oimg:"../../layuiadmin/layui/images/c1.png",
               oname:'黑森林蛋糕',
               foodinformationlist:[
                   {
                       fid:26,
                       fname:'黑森林蛋糕小小号(1)',
                       fprice:20,
                   },
                   {
                       fid:27,
                       fname:'黑森林蛋糕大大号(2)',
                       fprice:31,
                   }
               ]

           },
           {
               oid:'10',
               oimg:"../../layuiadmin/layui/images/c1.png",
               oname:'黑森林蛋糕',
               foodinformationlist:[
                   {
                       fid:29,
                       fname:'黑森林蛋糕小小号(1)',
                       fprice:20,
                   },
                   {
                       fid:30,
                       fname:'黑森林蛋糕大大号(2)',
                       fprice:31,
                   }
               ]

           },
           {
               oid:'11',
               oimg:"../../layuiadmin/layui/images/c1.png",
               oname:'黑森林蛋糕',
               foodinformationlist:[
                   {
                       fid:31,
                       fname:'黑森林蛋糕小小号(1)',
                       fprice:20,
                   },
                   {
                       fid:32,
                       fname:'黑森林蛋糕大大号(2)',
                       fprice:31,
                   }
               ]

           },
           {
               oid:'12',
               oimg:"../../layuiadmin/layui/images/c1.png",
               oname:'黑森林蛋糕'

           },
           {
               oid:'13',
               oimg:"../../layuiadmin/layui/images/c1.png",
               oname:'黑森林蛋糕'

           },
           {
               oid:'14',
               oimg:"../../layuiadmin/layui/images/c1.png",
               oname:'黑森林蛋糕'

           },
           {
               oid:'15',
               oimg:"../../layuiadmin/layui/images/c1.png",
               oname:'黑森林蛋糕'

           },
           {
               oid:'16',
               oimg:"../../layuiadmin/layui/images/c1.png",
               oname:'黑森林蛋糕'

           },
           {
               oid:'17',
               oimg:"../../layuiadmin/layui/images/c1.png",
               oname:'黑森林蛋糕'

           },
           {
               oid:'18',
               oimg:"../../layuiadmin/layui/images/c1.png",
               oname:'黑森林蛋糕'

           },

       ],
        currentOid: null


    },
    render :function () {
        document.getElementById('allfoodShow').innerHTML = template('allfoodTemplate', { data: allfood.data });
        allfood.bindallfoodlist();
    },
    bindallfoodlist : function () {
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
                        , content: $("#foodLayerShowa").html()
                        , btn: 0
                        , btnAlign: 'c'
                        , shade: 0.3
                        , yes: function () {
                            layer.closeAll();
                        }
                    });
                }
            };

            $('#foodinformationa .layui-upload-img').on('click', function () {
                var othis = $(this), method = othis.data('method');
                oid = othis.data('oid');
                allfood.currentOid = oid;
                document.getElementById('foodLayerShowa').innerHTML = template('fiTemplatea', { data: allfood });
                active[method] ? active[method].call(this, othis) : '';
                allfood.bindFoodOrder();
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

    }

}