// pages/article/article.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      article: [
        {
          title: "闽南话的魅力",
          auth: "陈建新"
        },
        {
          title: "学听闽南话",
          auth: "黄岑"
        },
        {
          title: "闽南语抗疫热词TOP9",
          auth: "小南"
        },
        {
          title: "一片冰心在玉壶",
          auth: "世界华声音"
        },
        {
          title: "澎湃海丝情",
          auth: "晋江电视台"
        },
        {
          title: "闽南听语",
          auth: "文学顾事"
        },
        {
          title: "闽南三江知青红",
          auth: "闽南旅游"
        }
      ],
      renderImgUrl: [
        "https://cdn.jsdelivr.net/gh/Taj-x/images@main/img/首页-矩形框图片1.png",
        "https://cdn.jsdelivr.net/gh/Taj-x/images@main/img/首页-矩形框图片2.png",
        "https://cdn.jsdelivr.net/gh/Taj-x/images@main/img/首页-矩形框图片3.png",
        "https://cdn.jsdelivr.net/gh/Taj-x/images@main/img/首页-矩形框图片4.png"
      ],
  },
  toMusic: function() {
    console.log("BBB");
    wx.navigateTo({
      url: '../music/music',
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