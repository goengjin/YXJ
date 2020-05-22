var ticket = {
    data : {
        discountlist : [
            {
                vid:'90',
                vimg:'../../layuiadmin/layui/images/优惠1.png',
                vname:'会员优惠',
                vipdiscountlist: [
                    {
                        tid: '17',
                        tname: '悠享家蛋糕满100减10',
                        timg:'../../layuiadmin/layui/images/图层17.png'
                    },
                    {
                        tid: '19',
                        tname: '悠享家蛋糕满90减8',
                        timg:'../../layuiadmin/layui/images/图层17.png'
                    },
                    {
                        tid: '18',
                        tname: '悠享家蛋糕满80减7',
                        timg:'../../layuiadmin/layui/images/图层17.png'
                    },
                    {
                        tid: '04',
                        tname: '悠享家蛋糕满70减6',
                        timg:'../../layuiadmin/layui/images/图层17.png'
                    },
                    {
                        tid: '05',
                        tname: '悠享家蛋糕满60减5',
                        timg:'../../layuiadmin/layui/images/图层17.png'
                    },
                    {
                        tid: '06',
                        tname: '悠享家蛋糕满50减4',
                        timg:'../../layuiadmin/layui/images/图层17.png'
                    },
                    {
                        tid: '07',
                        tname: '悠享家蛋糕满40减2',
                        timg:'../../layuiadmin/layui/images/图层17.png'
                    },
                    {
                        tid: '08',
                        tname: '悠享家蛋糕满30减1',
                        timg:'../../layuiadmin/layui/images/图层17.png'
                    }
                ],

            },
            {
                vid:'91',
                vimg:'../../layuiadmin/layui/images/优惠1.png',
                vname:'商家优惠',
                vipdiscountlist : [
                    {
                        tid: '09',
                        tname: '招商银周三五折',
                        timg:'../../layuiadmin/layui/images/图层18.png'
                    },
                    {
                        tid: '10',
                        tname: '招商银周四六折',
                        timg:'../../layuiadmin/layui/images/图层18.png'
                    },
                    {
                        tid: '11',
                        tname: '招商银周五七折',
                        timg:'../../layuiadmin/layui/images/图层18.png'
                    },
                    {
                        tid: '12',
                        tname: '招商银周三五折',
                        timg:'../../layuiadmin/layui/images/图层18.png'
                    },
                    {
                        tid: '13',
                        tname: '招商银周三五折',
                        timg:'../../layuiadmin/layui/images/图层18.png'
                    },
                    {
                        tid: '14',
                        tname: '招商银周三五折',
                        timg: '../../layuiadmin/layui/images/图层18.png'
                    },
                    {
                        tid: '15',
                        tname: '招商银周三五折',
                        timg:'../../layuiadmin/layui/images/图层18.png'
                    },
                    {
                        tid: '16',
                        tname: '招商银周三五折',
                        timg:'../../layuiadmin/layui/images/图层18.png'
                    }
                ],
            }

        ],

        ticketname: [
            {
                tid: '01',
                tname: '满100减10',
                timg: '../../layuiadmin/layui/images/图层18.png',
            },
            {
                tid: '02',
                tname: '妇女节',
                timg: '../../layuiadmin/layui/images/图层18.png',
            },

            ],
        currentVid:null


    },


    render :function () {
        document.getElementById('ticketShow').innerHTML = template('ticketTemplate', { data: ticket.data });
        ticket.bindvipdiscount();
        ticket.bindstorediscount();
        ticket.bindallowance();
        ticket.bindgiveaway();
        ticket.bindTicketChose();

    },




    bindvipdiscount: function () {
        layui.use('layer', function(){
            var $ = layui.jquery, layer = layui.layer;
            var active = {
                offset: function(othis){
                    layer.open({
                        type: 1
                        ,offset: 'auto'
                        ,title:'优惠'
                        ,area: ['600px', '400px']
                        ,id: 'vipInformationPop1'
                        ,content: $("#vipdiscountShow").html()
                        ,btn: 0
                        ,btnAlign: 'c'
                        ,shade: 0.3
                        ,yes: function(){
                            layer.closeAll();
                        }
                    });
                }
            };
            $('#vipdiscount111 #ioioio').on('click', function () {
                var othis = $(this), method = othis.data('method');
                console.log(othis)
                vid = othis.data('vid');
                ticket.currentVid = vid;
                document.getElementById('vipdiscountShow').innerHTML = template('fiTemplate5', { data: ticket });
                active[method] ? active[method].call(this, othis) : '';
                ticket.bindTicketChose1();
            });
        });
    },

    bindallowance : function () {
        layui.use('layer', function(){
            var $ = layui.jquery, layer = layui.layer;
            var active = {

                offset: function(othis){
                    var type = othis.data('type')
                        ,text = othis.text();

                    layer.open({
                        type: 1
                        ,offset: 'auto'
                        ,title:'折扣'
                        ,area: ['600px', '400px']
                        ,id: 'allowance'+type
                        ,content: $("#allowanceshow").html()
                        ,btn: 0
                        ,btnAlign: 'c' //按钮居中
                        ,shade: 0.3 //不显示遮罩
                        ,yes: function(){
                            layer.closeAll();
                        }
                    });
                }
            };

            $('#allowance .layui-btn').on('click', function(){
                var othis = $(this), method = othis.data('method');
                active[method] ? active[method].call(this, othis) : '';
            });

            $(document).on('click','.ad', function(){
                $('.youhui').attr('placeholder',"请输入优惠的折扣");
                $(this).css({'background':'#EA5433','color':'white',});
                $('.ap').css({'color':'#EA5433','background':'white','border':'#EA5433 1px solid'});
                $(".youhui").show()

            });
            $(document).on('click','.ap', function(){
                $('.youhui').attr('placeholder',"请输入优惠的金额");
                $('.ap').css({'background':'#EA5433','color':'white',});
                $('.ad').css({'color':'#EA5433','background':'white','border':'#EA5433 1px solid'});
                $(".youhui").show()

            });
        });
    },

    bindgiveaway : function () {
        layui.use('layer', function(){
            var $ = layui.jquery, layer = layui.layer;
            var active = {
                offset: function(othis){
                    var type = othis.data('type')
                        ,text = othis.text();

                    layer.open({
                        type: 1
                        ,offset: 'auto'
                        ,title:'赠送'
                        ,area: ['600px', '400px']
                        ,id: 'giveawayshow'+type
                        ,content: $("#giveaway").html()
                        ,btn: 0
                        ,btnAlign: 'c'
                        ,shade: 0.3
                        ,yes: function(){
                            layer.closeAll();
                        }
                    });
                }
            };

            $('#giveawayshow .layui-btn').on('click', function(){
                var othis = $(this), method = othis.data('method');
                active[method] ? active[method].call(this, othis) : '';
            });

            $(document).on('click','#giveaway1', function(){
                var text = $(this).text();
                var $input = $("#reason")
                $input.val($input.val() + text + '；');
            });
            $(document).on('click','#giveaway2', function(){
                var text = $(this).text();
                var $input = $("#reason")
                $input.val($input.val() + text + '；');
            });
            $(document).on('click','#giveaway3', function(){
                var text = $(this).text();
                var $input = $("#reason")
                $input.val($input.val() + text + "；");
            });
        });
    },

    bindstorediscount : function () {
        layui.use('layer', function(){
            var $ = layui.jquery, layer = layui.layer;

            var active = {

                offset: function(othis){
                    var type = othis.data('type')
                        ,text = othis.text();

                    layer.open({
                        type: 1
                        ,offset: 'auto'
                        ,title:'商家优惠'
                        ,area: ['600px', '400px']
                        ,id: 'storediscount'+type
                        ,content: $("#storediscountShow").html()
                        ,btn: 0
                        ,btnAlign: 'c'
                        ,shade: 0.3
                        ,yes: function(){
                            layer.closeAll();
                        }
                    });
                }
            };

            $('#storediscount .layui-btn').on('click', function(){
                var othis = $(this), method = othis.data('method');
                active[method] ? active[method].call(this, othis) : '';
            });

        });

    },

    bindTicketChose : function () {
        $('#ticketShow .flx1').on('click', function () {
            var othis = $(this);
            tid = parseInt( othis.data('tid'));
            tname = othis.data('tname');
            timg = othis.data('timg');
            var item = {
                tid: tid,
                tname: tname,
                timg: timg,

            };
            coupon.addItem(item);
            coupon.render();
        });

    },

    bindTicketChose1 : function () {
        $('#vipInformationPop1 .layui-col-md3').on('click', function () {
            console.log('egoierf')
            var othis = $(this);
            tid = parseInt( othis.data('tid'));
            tname = othis.data('tname');
            timg = othis.data('timg');
            var item = {
                tid: tid,
                tname: tname,
                timg: timg,

            };
            layer.closeAll();
            coupon.addItem(item);
            coupon.render();
        });
    },
}

