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
    Test_reg(e){//可用
        console.log("Test_reg");
        let that = this 
        wx.request({
        method: 'POST',
        url: 'http://101.43.7.157:8000/alwaysRight/reg', 
        header: {
            'content-type': 'application/json' // 默认值
        },
        data: {
            phone: '19859092005',//这里的phone参数是某用户的电话号码
        },
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
    Test_setInfoByUserId(e){//可用
        console.log("Test_setInfoByUserId");
        let that = this 
        wx.request({
        method: 'POST',
        url: 'http://101.43.7.157:8000/alwaysRight/reg', 
        header: {
            'content-type': 'application/json' // 默认值
        },
        data: {
            phone: '19859092005',
        },
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
    Test_logIn(e){//可用
        console.log("Test_logIn");
        let that = this 
        wx.request({
        method: 'POST',
        url: 'http://101.43.7.157:8000/alwaysRight/logIn', 
        header: {
            'content-type': 'application/json' // 默认值
        },
        data:{
            Phone:'19859092005'
        },
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
    Test_logOut(e){//可用
        console.log("Test_logOut");
        let that = this 
        wx.request({
        method: 'POST',
        url: 'http://101.43.7.157:8000/alwaysRight/logOut', 
        header: {
            'content-type': 'application/json' // 默认值
        },
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
    Test_checkLogin(e){//暂不可用
        console.log("Test_checkLogin");
        let that = this 
        wx.request({
        method: 'POST',
        url: 'http://101.43.7.157:8000/alwaysRight/checkLogin', 
        header: {
            'content-type': 'application/json' // 默认值
        },
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
    Test_getRandomWork(e){//可用
        console.log("Test_getRandomWork");
        let that = this 
        wx.request({
        method: 'POST',
        url: 'http://101.43.7.157:8000/alwaysRight/getRandomWork', 
        header: {
            'content-type': 'application/json' // 默认值
        },
        data:{cnt:6},
        dataType:'json',
        responseType:'text',
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
    Test_getRandomAudio(e){//暂不可用
        console.log("Test_getRandomAudio");
        let that = this 
        wx.request({
        method: 'POST',
        url: 'http://101.43.7.157:8000/alwaysRight/getRandomAudio', 
        header: {
            'content-type': 'application/json' // 默认值
        },
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
    Test_getUserLikeById(e){//暂不可用
        console.log("Test_getUserLikeById");
        let that = this 
        wx.request({
        method: 'POST',
        url: 'http://101.43.7.157:8000/alwaysRight/getUserLikeById', 
        header: {
            'content-type': 'application/json' // 默认值
        },
        data:{
            phone:'19859092005'
        },
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
    Test_saveUserIcon(e){
        console.log("Test_saveUserIcon");
        let that = this 
        wx.request({
        method: 'POST',
        url: 'http://101.43.7.157:8000/alwaysRight/saveUserIcon', 
        header: {
            'content-type': 'application/json' // 默认值
        },
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
    Test_getSomethingByUrl(e){
        console.log("Test_getSomethingByUrl");
        let that = this 
        wx.request({
        method: 'POST',
        url: 'http://101.43.7.157:8000/alwaysRight/getSomethingByUrl', 
        header: {
            'content-type': 'application/json' // 默认值
        },
        success: function (res) {
            console.log(res)

        },
        data:{
            url:''
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
    Test_uploadAudio4Score(e){
        console.log("Test_uploadAudio4Score");
        let that = this 
        wx.request({
        method: 'POST',
        url: 'http://101.43.7.157:8000/alwaysRight/uploadAudio4Score', 
        header: {
            'content-type': 'multipart/form-data' // 默认值
        },
        data:{
            key:'audio'
        },
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
    Test_uploadAudio4text(e){
        console.log("Test_uploadAudio4text");
        let that = this 
        wx.request({
        method: 'POST',
        url: 'http://101.43.7.157:8000/alwaysRight/reg', 
        header: {
            'content-type': 'application/json' // 默认值
        },
        data: {
            phone: '19859092005',
        },
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
    Test_getUserHistory(e){//暂不可用
        console.log("Test_getUserHistory");
        let that = this 
        wx.request({
        method: 'POST',
        url: 'http://101.43.7.157:8000/alwaysRight/getUserHistory', 
        header: {
            'content-type': 'application/json' // 默认值
        },
        data:{
            phone:'19859092005'
        },
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