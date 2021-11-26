// pages/musicPlayer/musicPlayer.js
let appDate = getApp().globalData;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    innerAudioContext:Object
  },
  setToid: function() {
    let that = this;
    that.innerAudioContext = wx.createInnerAudioContext();
    that.innerAudioContext.autoPlay = true;
    that.innerAudioContext.src = appDate.musicList[appDate.musicid].src;
    setTimeout(that.innerAudioContext.play(), 10);
    
    console.log(that.innerAudioContext);
    console.log(appDate.musicList[appDate.musicid].src);
  },
  goPrev: function() {
    this.innerAudioContext.destroy();
    appDate.musicid--;
    if (appDate.musicid < 0)
      appDate.musicid += 5;
    this.setToid();
  },
  goNext: function() {
    this.innerAudioContext.destroy();
    appDate.musicid++;
    if (appDate.musicid >= 5)
      appDate.musicid = 0;
    this.setToid();
  },
  pause: function() {
    let innerAudioContext = this.innerAudioContext;
    if (innerAudioContext.paused) {
      innerAudioContext.play();
    }
    else {
      innerAudioContext.pause();
    }
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
    this.setToid();
    this.innerAudioContext.onError((res)=>{
      console.log(res.errMsg);
    })
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