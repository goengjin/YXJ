var vipLogin = {
    data : {
        viplist :
            [

            ],


    },
    render : function () {
        document.getElementById('vipLoginShow').innerHTML = template('vipLoginTemplate', { data: ticket.data });

    },


}