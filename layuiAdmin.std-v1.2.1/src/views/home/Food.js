var Food = {

    data: {

        totalMoney: 0,
        benefitMoney: 0,
        logisticsMoney: 11,
        payMoney: 0,

        basket: [
            {
                fid: 0,
                fimg: '../../layuiadmin/layui/images/kiko.png',
                fname: '意大利面',
                fprice: '38',
                preprice: '47',
                fnum: 1

            },
            {
                fid: 1,
                fimg: '../../layuiadmin/layui/images/kiko.png',
                fname: '定制蛋糕',
                fprice: '40',
                preprice: '57',
                fnum: 1,
                fpic:'图片',
                fbeizhu:'备注'

            },
            {
                fid: 2,
                fimg: '../../layuiadmin/layui/images/kiko.png',
                fname: '牛角包',
                fprice: '17',
                preprice: '19',
                fnum: 1

            },
            {
                fid: 3,
                fimg: '../../layuiadmin/layui/images/kiko.png',
                fname: '橙汁儿',
                fprice: '8',
                preprice: '11',
                fnum: 1
            },
            {
                fid:4,
                fimg: '../../layuiadmin/layui/images/kiko.png',
                fname: '黑森林蛋糕',
                fprice: '30',
                preprice: '35',
                fnum: 1

            },
            {
                fid:5,
                fimg: '../../layuiadmin/layui/images/kiko.png',
                fname: '牛奶',
                fprice: '7',
                preprice: '10',
                fnum: 1

            },
            {
                fid: 6,
                fimg: '../../layuiadmin/layui/images/kiko.png',
                fname: '巧克力',
                fprice: '9',
                preprice: '18',
                fnum: 1

            }]
    },
   

   
    render: function () {

        Food.caluOrder(Food.data);
        document.getElementById('FoodShow').innerHTML = template('FoodTemplate', { data: Food.data });
        Food.bindNum();
        Food.bindDel();
        Food.bindOrder();
        Food.bindJump();
        document.getElementById('couponShow').innerHTML = template('couponTemplate', {data: coupon.data});
        coupon.render();


    },

    bindDel: function () {
        $("div#FoodShow .dell").click(function () {
            var foodid =parseInt ( $(this).attr('data-id'));
            Food.deleteItem(foodid, Food.data.basket),
            Food.render();
        });
    },

    bindJump : function (){
        $("#xiadanbutton").click(function () {
            var os = $("#selecteatway").val();
            if (os === '01') {
                window.location.href = "./pagePay.html";
            }
           if (os === '02') {
                window.location.href = "./pageAddress.html";
            }
            if (os === '03') {
                window.location.href = "./pageAddress.html";
            }
        });
        $("#guadanbutton").click(function () {
            window.location.href ="./pageRestingOrder.html";

        });
    },

    bindNum: function () {
        $("div#FoodShow .add").click(function () {
            var foodid = parseInt( $(this).attr('data-id'));
            Food.addNum(foodid, Food.data.basket),
            Food.render();
        });

        $("div#FoodShow .minus").click(function () {
            var foodid = parseInt( $(this).attr('data-id'));
            Food.minusNum(foodid, Food.data.basket),
           Food.render();
        });

    },
    
    bindOrder: function () {
        $("div#FoodShow .order").click(function () {
            Food.post();
        });
    },

    caluOrder: function (data) {
        data.benefitMoney = 0;
        data.totalMoney = 0;
        list = data.basket;

        for (var key in list) {
            data.totalMoney += list[key].fprice * list[key].fnum;
            data.benefitMoney += (list[key].preprice - list[key].fprice)* list[key].fnum;;
        }
        data.payMoney = data.totalMoney - data.benefitMoney - data.logisticsMoney;

    },

    deleteItem: function (item, list) {
        for (var key in list) {
            if (list[key].fid === item) {
                list.splice(key, 1)
            }
        }
    },
    addNum: function (item, list) {
        for (var key in list) {
            if (list[key].fid === item) {
                list[key].fnum++;
            }
        }
    },
    minusNum: function (item, list) {
        for (var key in list) {
            if (list[key].fid === item) {
                list[key].fnum--;
            }
        }
    },
    addItem: function (item) {
        var exsit = 0;
        for (var key in Food.data.basket) {
            if (list[key].fid === item.fid) {
                list[key].fnum++;
                exsit = 1;
            }
        }
        if(exsit==0)
        Food.data.basket.push(item);

    },
    post: function () {
        console.log(Food.data);
        
    }



}