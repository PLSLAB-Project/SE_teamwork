// pages/explanation/explanation.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        number:0,
        text1:'汝昼食何',
        text2:'壹二三肆伍六七八九十',
        text3:'11111111111111',
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    explain(){
        let that = this
        setTimeout(function(){
            let cnt=that.data.number+1
            that.setData({
                number:cnt
            })
        },5000)
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