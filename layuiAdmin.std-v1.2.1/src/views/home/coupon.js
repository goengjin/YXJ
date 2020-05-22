var coupon = {
    data: {
        couponlist : [
            /*{
                tid :'',
                tname :'',
                timg :'',
            },*/

        ],

    },
    render: function () {
        document.getElementById('couponShow').innerHTML = template('couponTemplate', {data: coupon.data});

    },

    addItem: function (item) {
        var exsit = 0;
        for (var key in coupon.data.couponlist) {
            if (list[key].tid === item.tid) {
                alert('您已添加该优惠！');
                exsit = 1;
            }
        }
        if(exsit==0)
            coupon.data.couponlist.push(item);
    },

    post: function () {
        console.log(coupon.data);
    }
}