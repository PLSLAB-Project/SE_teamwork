// pages/homepage/homepage.js
Page({

    data: {
      title1:"闽南话的魅力",
      title2:"学听闽南话",
      title3:"闽南语抗疫热词TOP9",
      title4:"听阿姆讲童谣",
      write1:"陈建新",
      write2:"黄芩",
      write3:"小南",
      write4:"小北",

    },
    turn_to_explanation(){
        wx.navigateTo({
          url: '../explanation/explanation',
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
         
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