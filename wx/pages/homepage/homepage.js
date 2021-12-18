// pages/homepage/homepage.js

let appData = getApp().globalData;//全局数据

Page({
    data: {
      list:[],
      tmplist: [{
        name: "闽南话的魅力",
        author: "陈建新",
        articleId: 1
      },
      {
        name: "学听闽南话",
        author: "黄岑",
        articleId: 2
      },
      {
        name: "闽南语抗疫热词TOP9",
        author: "小南",
        articleId: 3
      },
      {
        name: "一片冰心在玉壶",
        author: "世界华声音",
        articleId: 4
      },
      {
        name: "澎湃海丝情",
        author: "晋江电视台",
        articleId: 5
      },
      {
        name: "闽南听语",
        author: "文学顾事",
        articleId: 6
      },
      {
        name: "闽南三江知青红",
        author: "闽南旅游",
        articleId: 7
      }
    ],
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
    toContent: function(e) {
      appData.articleId = this.data.list[e.currentTarget.dataset.idx].articleId;
      // console.log(this.data.list[e.currentTarget.dataset.idx].articleId)
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
        data: {cnt: 6},
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
          that.setData({
            list:that.data.tmplist
          })
        },
        complete: () => {
        },
        
      });
      if(this.data.list.length==0){
        this.setData({
          list:this.data.tmplist
        })
      }
      
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