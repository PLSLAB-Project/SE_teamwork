// pages/music/music.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    music: [{
        title: "浪子的心",
        auth: "卓依婷"
      },
      {
        title: "用生命所爱的人",
        auth: "闽南语"
      },
      {
        title: "有梦尚美",
        auth: "蔡小虎"
      },
      {
        title: "爱到才知痛",
        auth: "贺一航"
      },
      {
        title: "喜欢就好",
        auth: "林玉英"
      }
    ],
    renderImgUrl: [
      "https://cdn.jsdelivr.net/gh/Taj-x/images@main/img/首页-矩形框图片1.png",
      "https://cdn.jsdelivr.net/gh/Taj-x/images@main/img/首页-矩形框图片2.png",
      "https://cdn.jsdelivr.net/gh/Taj-x/images@main/img/首页-矩形框图片3.png",
      "https://cdn.jsdelivr.net/gh/Taj-x/images@main/img/首页-矩形框图片4.png"
    ]
  },
  toPlay: function() {
    wx.navigateTo({
      url: '../musicPlayer/musicPlayer',
    })
  },
  toArticle: function () {
      wx.navigateBack({
        delta: 1
      });

    },
  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function (options) {},

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