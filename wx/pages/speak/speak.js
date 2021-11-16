// pages/speak/speak.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    InterfaceTest(e){
        console.log("hi");
        // let xmlhttp;
        // if (window.XMLHttpRequest)
        // {
        //     //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        //     xmlhttp=new XMLHttpRequest();
        // }
        // else
        // {
        //     // IE6, IE5 浏览器执行代码
        //     xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        // }
        // xmlhttp.onreadystatechange=function()
        // {
        //     if (xmlhttp.readyState==4 && xmlhttp.status==200)
        //     {
        //         console.log( xmlhttp.responseText);
        //     }
        // }
        // xmlhttp.open("POST","http://172.17.173.97:8080/api/user/login",true);
        // xmlhttp.send("student_id=031902522&password=ycyysjyjn13");
        let that = this 
        wx.request({
        method: 'GET',
        url: 'https://covid-api.mmediagroup.fr/v1/cases', 
        // url: "https://tcb-api.tencentcloudapi.com",
        header: {
            'content-type': 'application/json' // 默认值
        },
        //data: 'student_id=031902522&password=ycyysjyjn13',
        success: function (res) {
            console.log(res)
 
        },
        fail: function () {
        console.log("fail")
        },
        complete: function () {
            that.setData({
            isshow:false
            })
        } 
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})