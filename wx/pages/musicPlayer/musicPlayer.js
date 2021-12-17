// pages/musicPlayer/musicPlayer.js
let appDate = getApp().globalData;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
Page({
  /**
   * 页面的初始数据
   */
  data: {
    innerAudioContext:Object,
    active: false,
    title: "挪威的森林",
    auth: "伍佰"
  },
  setToid: function() {
    sleep(10);
    let that = this;
    that.innerAudioContext = wx.createInnerAudioContext();
    that.innerAudioContext.autoPlay = true;
    that.innerAudioContext.src = appDate.musicList[appDate.musicid].src;
    that.setData({
      active: false
    });
    sleep(100);
    that.innerAudioContext.play();
    sleep(100);
    console.log(that.innerAudioContext);
    console.log(that.innerAudioContext.paused);
    console.log(appDate.musicList);
    console.log(appDate.musicList[appDate.musicid].src);
    that.setData({
      auth: appDate.musicList[appDate.musicid].auth,
      title: appDate.musicList[appDate.musicid].title
    })
  },
  goPrev: function() {
    let that = this;
    that.innerAudioContext.destroy();
    appDate.musicid--;
    if (appDate.musicid < 0)
      appDate.musicid += 5;
    that.setToid();
  },
  goNext: function() {
    let that = this;
    that.innerAudioContext.destroy();
    appDate.musicid++;
    if (appDate.musicid >= 5)
      appDate.musicid = 0;
    that.setToid();
  },
  pause: function() {
    let that = this;
    let innerAudioContext = that.innerAudioContext;
    sleep(100);
    if (innerAudioContext.paused) {
      innerAudioContext.play();
      that.setData({
        active: false
      })
    }
    else {
      innerAudioContext.pause();
      that.setData({
        active: true
      })
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