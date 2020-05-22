var Payment ={
    data:{
        mixpayway1:'0',
        mixpayway2:'0',
        sumpayable:'90',
        AliPayment1:{
            ercode:'../../layuiadmin/layui/images/code.png',
            AliPaylink:'Http://uibguyef'
        },
        balancepayment:{

        },
        VxPayment:{
            ercode:'../../layuiadmin/layui/images/code.png',
            VxPaylink:'Http://uibguyef'
        },
        Thirdpayment:{
            v1:'1',
            v2:'2',
            v3:'3',
            f1:'k',
            f2:'l',
            f3:'e'
        },
        hometicketpayment:{
            ticketsum:'100',
            enough:'不足'
        },

        banklist:[
        {
            bid:'01',
            bank:'招商银行'
        },
        {
            bid:'02',
            bank:'招商银行'
        },
        {
            bid:'03',
            bank:'招商银行'
        },
            {
                bid:'04',
                bank:'招商银行'
            },
            {
                bid:'05',
                bank:'招商银行'
            },
            {
                bid:'06',
                bank:'招商银行'
            },
            {
                bid:'07',
                bank:'招商银行'
            },
            {
                bid:'08',
                bank:'招商银行'
            },
            {
                bid:'09',
                bank:'招商银行'
            },
            {
                bid:'10',
                bank:'招商银行'
            },
            {
                bid:'11',
                bank:'招商银行'
            },
            {
                bid:'12',
                bank:'招商银行'
            },
            {
                bid:'13',
                bank:'招商银行'
            },
            {
                bid:'14',
                bank:'招商银行'
            },
            {
                bid:'15',
                bank:'招商银行'
            },
        ]
    },
    render: function () {
        document.getElementById('PaymentShow').innerHTML = template('PaymentTemplate', { data: Payment.data });
        document.getElementById('cashpaymentShow').innerHTML = template('cashpaymentTemplate', { data: Payment.data });
        document.getElementById('balancepaymentShow').innerHTML = template('balancepaymentTemplate', { data: Payment.data });
        document.getElementById('alipaymentShow').innerHTML = template('alipaymentTemplate', { data: Payment.data });
        document.getElementById('VxpaymentShow').innerHTML = template('VxpaymentTemplate', { data: Payment.data });
        document.getElementById('BankcardpaymentShow').innerHTML = template('BankcardpaymentTemplate', { data: Payment.data });
        document.getElementById('ThirdpaymentShow').innerHTML = template('ThirdpaymentTemplate', { data: Payment.data });
        document.getElementById('hometicketpaymentShow').innerHTML = template('hometicketpaymentTemplate', { data: Payment.data });
        document.getElementById('monthlybalanceShow').innerHTML = template('monthlybalanceTemplate', { data: Payment.data });
        document.getElementById('SmallwhiteboxpaymentShow').innerHTML = template('SmallwhiteboxpaymentTemplate', { data: Payment.data });
        document.getElementById('rechargeShow').innerHTML = template('rechargeTemplate', { data: Payment.data });
        Payment.bindCashPayment();
        Payment.bindBalancePayment();
        Payment.bindAliPayment();
        Payment.bindVxPayment();
        Payment.bindWhiteBoxPayment();
        Payment.bindBankCardPayment();
        Payment.bindThirdPayment();
        Payment.bindVoucherPayment();
        Payment.bindMonthlyBalance();
        Payment.bindQuChongZhi();
        Payment.bindMixPayment();

    },
    bindMixPayment:function(){
        $(function () {
            $('#mixpayway').click(function () {
                $('#payment').hide()
                $('#rerurnPay').css("visibility","visible")
                $('#hunhezhifu').show()

            });
        })
        $('#chose1').click(function () {
            $('.find-div-body1').toggle();
        });
        $('#chose1').click(function (event) {
            event.stopPropagation();
            $('.find-div-body1').toggle();
            return false;
        });
        //点击空白处隐藏弹出层，下面为滑动消失效果和淡出消失效果。
        $(document).click(function(event){
            var _con = $('#surebt');  // 设置目标区域
            if(!_con.is(event.target) && _con.has(event.target).length === 0){
                $('.find-div-body1').hide();
            }
        });

        $('#chose2').click(function (event) {
            event.stopPropagation();
            $('.find-div-body').toggle();
            return false;
        });
        $(document).click(function(event){
            var _con = $('#surebt');
            if(!_con.is(event.target) && _con.has(event.target).length === 0){
                $('.find-div-body').hide();
            }
        });


    },
    bindQuChongZhi : function (){
        layui.use('layer', function () {
            var $ = layui.jquery, layer = layui.layer;
            var active = {
                offset: function (othis) {
                    var type = othis.data('type')
                        , text = othis.text();
                    layer.open({
                        type: 1
                        , offset: type
                        , title: 0
                        , area: ['66%', '100%']
                        , id: 'recharge' + type //防止重复弹出
                        , content: $("#rechargeShow").html()
                        , btn: 0
                        , closeBtn: 0
                        , btnAlign: 'c' //按钮居中
                        , shade: 0.3
                        , yes: function () {
                            layer.closeAll();
                        }
                    });
                }
            };

            $('#recharge .layui-btn').on('click', function () {
                var othis = $(this), method = othis.data('method');
                active[method] ? active[method].call(this, othis) : '';
            });


        });

    },
    bindCashPayment:function () {
        layui.use('layer', function(){
            var $ = layui.jquery, layer = layui.layer;
            var active = {
                offset: function(othis){
                    var type = othis.data('type')
                        ,text = othis.text();
                    layer.open({
                        type: 1
                        ,offset: 'auto'
                        ,title:'现金支付'
                        ,area: ['600px', '450px']
                        ,id: 'CashPayM'+type
                        ,content: $("#cashpayment").html()
                        ,btn: 0
                        ,btnAlign: 'c'
                        ,shade: 0.3
                        ,yes: function(){
                            layer.closeAll();
                        }
                    });
                }
            };
            $('#CashPayM .layui-btn').on('click', function(){
                var othis = $(this), method = othis.data('method');
                active[method] ? active[method].call(this, othis) : '';
            });

        });
    },
    bindCashPayment1:function () {
        layui.use('layer', function(){
            var $ = layui.jquery, layer = layui.layer;
            var active = {
                offset: function(othis){
                    var type = othis.data('type')
                        ,text = othis.text();
                    layer.open({
                        type: 1
                        ,offset: 'auto'
                        ,title:'现金支付'
                        ,area: ['600px', '450px']
                        ,id: 'CashPayM1'+type
                        ,content: $("#cashpayment1").html()
                        ,btn: 0
                        ,btnAlign: 'c'
                        ,shade: 0.3
                        ,yes: function(){
                            layer.closeAll();
                        }
                    });
                }
            };
            $('#CashPayM1 .layui-btn').on('click', function(){
                var othis = $(this), method = othis.data('method');
                active[method] ? active[method].call(this, othis) : '';
            });

        });
    },
    bindBalancePayment:function () {
        layui.use('layer', function(){
            var $ = layui.jquery, layer = layui.layer;
            var active = {
                offset: function(othis){
                    var type = othis.data('type')
                        ,text = othis.text();
                    layer.open({
                        type: 1
                        ,offset: 'auto'
                        ,title:'余额支付'
                        ,area: ['520px', '400px']
                        ,id: 'BalanceM'+type
                        ,content: $("#balancepayment").html()
                        ,btn: 0
                        ,btnAlign: 'c'
                        ,shade: 0.3
                        ,yes: function(){
                            layer.closeAll();
                        }
                    });
                }
            };
            $('#BalanceM .layui-btn').on('click', function(){
                var othis = $(this), method = othis.data('method');
                active[method] ? active[method].call(this, othis) : '';
            });

        });
    },
    bindAliPayment:function () {
        layui.use(["form","table"], function(){
            var form = layui.form;
            form.render();
        });
        layui.use('layer', function(){
            var $ = layui.jquery, layer = layui.layer;
            var active = {
                offset: function(othis){
                    var type = othis.data('type')
                        ,text = othis.text();
                    layer.open({
                        type: 1
                        ,offset: 'auto'
                        ,title:'支付宝支付'
                        ,area: ['520px', '400px']
                        ,id: 'AliPayM'+type
                        ,content: $("#alipayment").html()
                        ,btn: 0
                        ,btnAlign: 'c'
                        ,shade: 0.3
                        ,yes: function(){
                            layer.closeAll();
                        }
                    });
                }
            };
            $('#AliPayM .layui-btn').on('click', function(){
                var othis = $(this), method = othis.data('method');
                active[method] ? active[method].call(this, othis) : '';
            });

        });
    },
    bindAliPayment1:function () {
        layui.use(["form","table"], function(){
            var form = layui.form;
            form.render();
        });
        layui.use('layer', function(){
            var $ = layui.jquery, layer = layui.layer;
            var active = {
                offset: function(othis){
                    var type = othis.data('type')
                        ,text = othis.text();
                    layer.open({
                        type: 1
                        ,offset: 'auto'
                        ,title:'支付宝支付'
                        ,area: ['520px', '400px']
                        ,id: 'AliPayM1'+type
                        ,content: $("#alipayment1").html()
                        ,btn: 0
                        ,btnAlign: 'c'
                        ,shade: 0.3
                        ,yes: function(){
                            layer.closeAll();
                        }
                    });
                }
            };
            $('#AliPayM1 .layui-btn').on('click', function(){
                var othis = $(this), method = othis.data('method');
                active[method] ? active[method].call(this, othis) : '';
            });

        });
    },
    bindVxPayment:function () {

        layui.use('layer', function(){
            var $ = layui.jquery, layer = layui.layer;
            var active = {
                offset: function(othis){
                    var type = othis.data('type')
                        ,text = othis.text();
                    layer.open({
                        type: 1
                        ,offset: 'auto'
                        ,title:'微信支付'
                        ,area: ['520px', '400px']
                        ,id: 'VxPayM'+type
                        ,content: $("#vxpayment").html()
                        ,btn: 0
                        ,btnAlign: 'c'
                        ,shade: 0.3
                        ,yes: function(){
                            layer.closeAll();
                        }
                    });
                }
            };
            $('#VxPayM .layui-btn').on('click', function(){
                var othis = $(this), method = othis.data('method');
                active[method] ? active[method].call(this, othis) : '';
            });

        });
    },
    bindVxPayment1:function () {

        layui.use('layer', function(){
            var $ = layui.jquery, layer = layui.layer;
            var active = {
                offset: function(othis){
                    var type = othis.data('type')
                        ,text = othis.text();
                    layer.open({
                        type: 1
                        ,offset: 'auto'
                        ,title:'微信支付'
                        ,area: ['520px', '400px']
                        ,id: 'VxPayM1'+type
                        ,content: $("#vxpayment1").html()
                        ,btn: 0
                        ,btnAlign: 'c'
                        ,shade: 0.3
                        ,yes: function(){
                            layer.closeAll();
                        }
                    });
                }
            };
            $('#VxPayM1 .layui-btn').on('click', function(){
                var othis = $(this), method = othis.data('method');
                active[method] ? active[method].call(this, othis) : '';
            });

        });
    },
    bindWhiteBoxPayment:function () {
        layui.use(["form","table"], function(){
            var form = layui.form;
            form.render();
        });

        layui.use('layer', function(){
            var $ = layui.jquery, layer = layui.layer;
            var active = {
                offset: function(othis){
                    var type = othis.data('type')
                        ,text = othis.text();
                    layer.open({
                        type: 1
                        ,offset: 'auto'
                        ,title:'小白盒支付'
                        ,area: ['520px', '400px']
                        ,id: 'SmallwhiteboxPayM'+type
                        ,content: $("#Smallwhiteboxpayment").html()
                        ,btn: 0
                        ,btnAlign: 'c'
                        ,shade: 0.3
                        ,yes: function(){
                            layer.closeAll();
                        }
                    });
                }
            };
            $('#SmallwhiteboxPayM .layui-btn').on('click', function(){
                var othis = $(this), method = othis.data('method');
                active[method] ? active[method].call(this, othis) : '';
            });

        });
    },
    bindBankCardPayment:function () {
        layui.use('layer', function(){
            var $ = layui.jquery, layer = layui.layer;
            var active = {
                offset: function(othis){
                    var type = othis.data('type')
                        ,text = othis.text();
                    layer.open({
                        type: 1
                        ,offset: 'auto'
                        ,title:'银行卡支付'
                        ,area: ['520px', '400px']
                        ,id: 'BankCardPayM'+type
                        ,content: $("#Bankcardpayment").html()
                        ,btn: 0
                        ,btnAlign: 'c'
                        ,shade: 0.3
                        ,yes: function(){
                            layer.closeAll();
                        }
                    });
                }
            };
            $('#BankCardPayM .layui-btn').on('click', function(){
                var othis = $(this), method = othis.data('method');
                active[method] ? active[method].call(this, othis) : '';
            });

        });
    },
    bindBankCardPayment1:function () {
        layui.use('layer', function(){
            var $ = layui.jquery, layer = layui.layer;
            var active = {
                offset: function(othis){
                    var type = othis.data('type')
                        ,text = othis.text();
                    layer.open({
                        type: 1
                        ,offset: 'auto'
                        ,title:'银行卡支付'
                        ,area: ['520px', '400px']
                        ,id: 'BankCardPayM1'+type
                        ,content: $("#Bankcardpayment1").html()
                        ,btn: 0
                        ,btnAlign: 'c'
                        ,shade: 0.3
                        ,yes: function(){
                            layer.closeAll();
                        }
                    });
                }
            };
            $('#BankCardPayM1 .layui-btn').on('click', function(){
                var othis = $(this), method = othis.data('method');
                active[method] ? active[method].call(this, othis) : '';
            });

        });
    },
    bindThirdPayment:function () {
        layui.use('layer', function(){
            var $ = layui.jquery, layer = layui.layer;
            var active = {
                offset: function(othis){
                    var type = othis.data('type')
                        ,text = othis.text();
                    layer.open({
                        type: 1
                        ,offset: 'auto'
                        ,title:'第三方支付'
                        ,area: ['1100px', '630px']
                        ,id: 'ThirdPayM'+type
                        ,content: $("#Thirdpayment").html()
                        ,btn: 0
                        ,btnAlign: 'c'
                        ,shade: 0.3
                        ,yes: function(){
                            layer.closeAll();
                        }
                    });
                }
            };
            $('#ThirdPayM .layui-btn').on('click', function(){
                var othis = $(this), method = othis.data('method');
                active[method] ? active[method].call(this, othis) : '';
            });

        });
    },
    bindVoucherPayment:function () {
        layui.use('layer', function(){
            var $ = layui.jquery, layer = layui.layer;
            var active = {
                offset: function(othis){
                    var type = othis.data('type')
                        ,text = othis.text();
                    layer.open({
                        type: 1
                        ,offset: 'auto'
                        ,title:'宅配券支付'
                        ,area: ['520px', '400px']
                        ,id: 'hometicketPayM'+type
                        ,content: $("#hometicketpayment").html()
                        ,btn: 0
                        ,btnAlign: 'c'
                        ,shade: 0.3
                        ,yes: function(){
                            layer.closeAll();
                        }
                    });
                }
            };
            $('#hometicketPayM .layui-btn').on('click', function(){
                var othis = $(this), method = othis.data('method');
                active[method] ? active[method].call(this, othis) : '';
            });

        });
    },
    bindMonthlyBalance:function () {
        layui.use('layer', function(){
            var $ = layui.jquery, layer = layui.layer;
            var active = {
                offset: function(othis){
                    var type = othis.data('type')
                        ,text = othis.text();
                    layer.open({
                        type: 1
                        ,offset: 'auto'
                        ,title:'月结'
                        ,area: ['1100px', '630px']
                        ,id: 'monthlybalanceM'+type
                        ,content: $("#monthlybalance").html()
                        ,btn: 0
                        ,btnAlign: 'c'
                        ,shade: 0.3
                        ,yes: function(){
                            layer.closeAll();
                        }
                    });
                }
            };
            $('#monthlybalanceM .layui-btn').on('click', function(){
                var othis = $(this), method = othis.data('method');
                active[method] ? active[method].call(this, othis) : '';
            });
        });
        layui.use(["form","table"], function(){
            var form = layui.form;
            form.render();
        });
    },




}