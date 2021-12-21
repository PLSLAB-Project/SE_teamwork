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
    title: "",
    auth: "",
    workId: ""
  },
  collect: function() {
    let that = this;
    console.log("收藏");
    wx.request({
      //url: 'http://127.0.0.1:5000/alwaysRight/addMarks',
      url: 'http://101.43.7.157:8000/alwaysRight/addMarks',
      data: {phone:appDate.session, workId: that.data.workId},
      header: {'content-type':'application/json'},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        console.log("request success!");
      },
      fail: () => {
        console.log("request failed!");
      },
      complete: () => {
      }
    });
  },
  scan: function() {
    let that = this;
    console.log("浏览");
    wx.request({
      url: 'http://127.0.0.1:5000/alwaysRight/getAudioEvent',
      //url: 'http://101.43.7.157:8000/alwaysRight/getAudioEvent',
      data: {phone:appDate.session, workId: that.data.workId},
      header: {'content-type':'application/json'},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        console.log("request success!");
      },
      fail: () => {
        console.log("request failed!");
      },
      complete: () => {
      }
    });
  },
  setToid: function() {
    let that = this;
    that.innerAudioContext = wx.createInnerAudioContext();
    that.innerAudioContext.autoPlay = true;
    that.innerAudioContext.src = appDate.musicList[appDate.musicid].src;
    that.setData({
      active: false
    });
    that.innerAudioContext.play();
    that.setData({
      auth: appDate.musicList[appDate.musicid].auth,
      title: appDate.musicList[appDate.musicid].title,
      workId: appDate.musicList[appDate.musicid].workId
    })
  },
  goPrev: function() {
    let that = this;
    that.innerAudioContext.destroy();
    appDate.musicid--;
    if (appDate.musicid < 0) 
      appDate.musicid += 5;
    that.scan();
    that.setToid();
  },
  goNext: function() {
    let that = this;
    that.innerAudioContext.destroy();
    appDate.musicid++;
    if (appDate.musicid >= 5)
      appDate.musicid = 0;
    that.scan();
    that.setToid();
  },
  pause: function() {
    let that = this;
    let innerAudioContext = that.innerAudioContext;
    sleep(10);
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