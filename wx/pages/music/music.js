// pages/music/music.js
let appData = getApp().globalData;//全局数据

  
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tmpMusic: [
    {
      title: "浪子的心",
      src: "http://music.163.com/song/media/outer/url?id=1823600073.mp3",
      auth: "卓依婷"
    },
    {
      title: "用生命所爱的人",
      src: "http://music.163.com/song/media/outer/url?id=157288.mp3",
      auth: "闽南语"
    },
    {
      title: "有梦尚美",
      src: "http://music.163.com/song/media/outer/url?id=109505.mp3",
      auth: "蔡小虎"
    },
    {
      title: "爱到才知痛",
      src: "http://music.163.com/song/media/outer/url?id=221314.mp3",
      auth: "贺一航"
    },
    {
      title: "喜欢就好",
      src: "http://music.163.com/song/media/outer/url?id=33469247.mp3",
      auth: "林玉英"
    }
    ],
    music: [],
    renderImgUrl: [
      "https://cdn.jsdelivr.net/gh/Taj-x/images@main/img/首页-矩形框图片1.png",
      "https://cdn.jsdelivr.net/gh/Taj-x/images@main/img/首页-矩形框图片2.png",
      "https://cdn.jsdelivr.net/gh/Taj-x/images@main/img/首页-矩形框图片3.png",
      "https://cdn.jsdelivr.net/gh/Taj-x/images@main/img/首页-矩形框图片4.png"
    ]
  },
  //访问播放界面
  toPlay: function(e) {
    console.log(e);
    let idx = e.currentTarget.dataset.idx;
    appData.musicid = idx;
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
  setMusicList: function() {
    let that = this;
    console.log("获取播放列表");
    wx.request({
      //url: 'http://127.0.0.1:5000/alwaysRight/getRandomAudio',
      url: 'http://101.43.7.157:8000/alwaysRight/getRandomAudio',
      data: {cnt: 5},
      header: {'content-type':'application/json'},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        console.log("request success!");
        //res.data.randomWork
        //console.log(res);
        console.log(res.data.randomWork);
        let work = res.data.randomWork;
        appData.musicList = [];
        for (let i = 0; i < 5; ++i) {
          appData.musicList.push(
            {
              auth: work[i].author,
              src: work[i].workContent,
              title: work[i].workName
            }
          );
        }
        that.setData({
          music: appData.musicList
        })
      },
      fail: () => {
        console.log("request failed!");
      },
      complete: () => {
      }
    });
  },

  onLoad: function (options) {
    let that = this;
    //that.setMusicList();
    if (appData.musicList.length != 0) {
      that.setData({
        music: appData.musicList
      });
    }
    else {
      that.setData({
        music: that.data.tmpMusic
      });
      appData.musicList = that.data.music;
    }
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
    let that = this;
    that.setMusicList();
    if (appData.musicList.length != 0) {
      that.setData({
        music: appData.musicList
      });
    }
    else {
      that.setData({
        music: that.data.tmpMusic
      })
      appData.musicList = that.data.tmpMusic;
    }
    console.log(that.data.tmpMusic);
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