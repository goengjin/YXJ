var MixPay ={
    data:{
        mixpayway1:'0',
        mixpayway2:'0',
        sumpayable1:'90',
        AliPayment1:{
            ercode:'../../layuiadmin/layui/images/code.png',
            AliPaylink:'Http://uibguyef'
        },
        balancepayment1:{
           'price':12
        },
        VxPayment1:{
            ercode:'../../layuiadmin/layui/images/code.png',
            VxPaylink:'Http://uibguyef'
        },

        AliPayment2:{
            ercode:'../../layuiadmin/layui/images/code.png',
            AliPaylink:'Http://uibguyef'
        },
        balancepayment2:{
            'price':13

        },
        VxPayment2:{
            ercode:'../../layuiadmin/layui/images/code.png',
            VxPaylink:'Http://uibguyef'
        },
    },
    render: function () {
        document.getElementById('MixPayShow').innerHTML = template('MixPayTemplate', { data: MixPay.data });

        MixPay.bindCashPayment1();
        MixPay.bindMixPayment1();
        MixPay.bindAliPayment2();
        MixPay.bindBankCardPayment2();
        MixPay.bindVxPayment2();

        document.getElementById('cashpaymentShow1').innerHTML = template('cashpaymentTemplate1', { data: MixPay.data });

        document.getElementById('alipaymentShow2').innerHTML = template('alipaymentTemplate2', { data: MixPay.data });

        document.getElementById('VxpaymentShow2').innerHTML = template('VxpaymentTemplate2', { data: MixPay.data });

        document.getElementById('BankcardpaymentShow2').innerHTML = template('BankcardpaymentTemplate2', { data: MixPay.data });


    },
    bindMixPayment1:function(){

        $('#chose1').click(function () {
            $('.find-div-body1').toggle();
        });

       oneinput=function (x){
            var y=document.getElementById(x).value;
            var t=$('#shouldpay').html();
            var g=t-y;
            $('#mixtwo').attr('value',g);
            $('#cashpaymentShow1 #g').attr('value',y);
           $('.alivalue').attr('value',y)
           $('#cashpaymentShow2 #c').attr('value',g);
           $('.alivalue2').attr('value',g)
       }

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







    bindAliPayment2:function () {
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
                        ,id: 'AliPayM2'+type
                        ,content: $("#alipayment2").html()
                        ,btn: 0
                        ,btnAlign: 'c'
                        ,shade: 0.3
                        ,yes: function(){
                            layer.closeAll();
                        }
                    });
                }
            };
            $('#AliPayM2 .layui-btn').on('click', function(){
                var othis = $(this), method = othis.data('method');
                active[method] ? active[method].call(this, othis) : '';
            });

        });
    },



    bindVxPayment2:function () {

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
                        ,id: 'VxPayM2'+type
                        ,content: $("#vxpayment2").html()
                        ,btn: 0
                        ,btnAlign: 'c'
                        ,shade: 0.3
                        ,yes: function(){
                            layer.closeAll();
                        }
                    });
                }
            };
            $('#VxPayM2 .layui-btn').on('click', function(){
                var othis = $(this), method = othis.data('method');
                active[method] ? active[method].call(this, othis) : '';
            });

        });
    },


    bindBankCardPayment2:function () {
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
                        ,id: 'BankCardPayM2'+type
                        ,content: $("#Bankcardpayment2").html()
                        ,btn: 0
                        ,btnAlign: 'c'
                        ,shade: 0.3
                        ,yes: function(){
                            layer.closeAll();
                        }
                    });
                }
            };
            $('#BankCardPayM2 .layui-btn').on('click', function(){
                var othis = $(this), method = othis.data('method');
                active[method] ? active[method].call(this, othis) : '';
            });

        });
    },




}