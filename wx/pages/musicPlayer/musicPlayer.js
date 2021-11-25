// pages/musicPlayer/musicPlayer.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    innerAudioContext:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  pause: function() {
    let innerAudioContext = this.innerAudioContext;
    console.log("AAAA");
    console.log(innerAudioContext);
    if (innerAudioContext.paused) {
      innerAudioContext.play();
    }
    else {
      innerAudioContext.pause();
    }
},
  onLoad: function (options) {
    this.innerAudioContext = wx.createInnerAudioContext();
    this.innerAudioContext.src = 'http://music.163.com/song/media/outer/url?id=1869929814.mp3';

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
    this.innerAudioContext.destroy();
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