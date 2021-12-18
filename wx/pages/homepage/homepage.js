// pages/homepage/homepage.js

let appData = getApp().globalData;//全局数据

Page({
    data: {
      list:[],
      renderImgUrl:[
        "https://cdn.jsdelivr.net/gh/Taj-x/images@main/img/首页-矩形框图片1.png",
        "https://cdn.jsdelivr.net/gh/Taj-x/images@main/img/首页-矩形框图片2.png",
        "https://cdn.jsdelivr.net/gh/Taj-x/images@main/img/首页-矩形框图片3.png",
        "https://cdn.jsdelivr.net/gh/Taj-x/images@main/img/首页-矩形框图片4.png"
      ],
    },
    turn_to_explanation(){
        wx.navigateTo({
          url: '../explanation/explanation',
        })
    },
    toContent: function() {
      wx.navigateTo({
        url: '../articleContent/articleContent',
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
      let that = this;
      console.log("获取主页文章列表");
      wx.request({
        url: 'http://101.43.7.157:8000/alwaysRight/getRandomTextId',
        data: {cnt: 1},
        header: {'content-type':'application/json'},
        method: 'POST',
        dataType: 'json',
        responseType: 'text',
        success: (res) => {
          console.log("主页request success!");
          console.log(res.data.randomWork);
           that.setData({
             list:res.data.randomWork
           })
        },
        fail: () => {
          console.log("主页request failed!");
        },
        complete: () => {
        }
      });
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