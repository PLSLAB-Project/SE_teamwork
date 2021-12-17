// pages/article/article.js
let appData = getApp().globalData;//全局数据

Page({
  /**
   * 页面的初始数据
   */
  data: {
    article:[],
    tmpArticle: [{
        title: "闽南话的魅力",
        auth: "陈建新",
        articleId: 1
      },
      {
        title: "学听闽南话",
        auth: "黄岑",
        articleId: 2
      },
      {
        title: "闽南语抗疫热词TOP9",
        auth: "小南",
        articleId: 3
      },
      {
        title: "一片冰心在玉壶",
        auth: "世界华声音",
        articleId: 4
      },
      {
        title: "澎湃海丝情",
        auth: "晋江电视台",
        articleId: 5
      },
      {
        title: "闽南听语",
        auth: "文学顾事",
        articleId: 6
      },
      {
        title: "闽南三江知青红",
        auth: "闽南旅游",
        articleId: 7
      }
    ],
    renderImgUrl: [
      "https://cdn.jsdelivr.net/gh/Taj-x/images@main/img/首页-矩形框图片1.png",
      "https://cdn.jsdelivr.net/gh/Taj-x/images@main/img/首页-矩形框图片2.png",
      "https://cdn.jsdelivr.net/gh/Taj-x/images@main/img/首页-矩形框图片3.png",
      "https://cdn.jsdelivr.net/gh/Taj-x/images@main/img/首页-矩形框图片4.png"
    ]
  },
  //访问文章内容
  toContent: function(e) {
    let that = this;
    console.log(that.data.article);
    appData.articleId = that.data.article[e.currentTarget.dataset.idx].articleId;
    console.log(appData.articleId);
    wx.navigateTo({
      url: '../articleContent/articleContent',
    })
  },
  toMusic: function () {
    wx.navigateTo({
      url: '../music/music',
    })
  },

  setArticleList: function() {
    let that = this;
    console.log("获取文章列表");
    wx.request({
      //url: 'http://127.0.0.1:5000/alwaysRight/getRandomTextId',
      url: 'http://101.43.7.157:8000/alwaysRight/getRandomTextId',
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
        appData.articleList = [];
         for (let i = 0; i < 5; ++i) {
           appData.articleList.push(
             {
               auth: work[i].author,
               articleId: work[i].id,
               title: work[i].name
             }
           );
         }
         that.setData({
          article: appData.articleList
         });
      },
      fail: () => {
        console.log("request failed!");
      },
      complete: () => {
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    if (appData.articleList.length != 0) {
      that.setData({
        article: appData.articleList
      });
    }
    else {
      that.setData(
        {
          article: that.data.tmpArticle
        }
      )
      appData.articleList = that.data.article
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
    that.setArticleList();
    if (appData.articleList.length != 0) {
      that.setData({
        article: appData.articleList
      });
    }
    else {
      that.setData(
        {
          article: that.data.tmpArticle
        }
      )
      appData.articleList = that.data.article
    }
    console.log(that.data.tmpArticle);
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