// pages/homepage/homepage.js
Page({

    data: {
      list:[
      // {title:'闽南话的魅力',
      //   author:'陈建新',

      // },
      // {
      //   title:'学听闽南话',
      //   author:'黄芩',

      // },
      // {
      //   title:'闽南语抗疫热词TOP9',
      //   author:'小南',

      // },
      // {
      //   title:'听阿姆讲童谣',
      //   author:'小北',

      // },
      // {
      //   title:'听阿姆讲童谣',
      //   author:'小北',

      // },
      // {
      //   title:'学听闽南话',
      //   author:'黄芩',

      // }
      ],
      renderImgUrl:[
        'https://cdn.jsdelivr.net/gh/Taj-x/images@main/img/首页-矩形框图片1.png',
        'https://cdn.jsdelivr.net/gh/Taj-x/images@main/img/首页-矩形框图片2.png',
        'https://cdn.jsdelivr.net/gh/Taj-x/images@main/img/首页-矩形框图片3.png',
        'https://cdn.jsdelivr.net/gh/Taj-x/images@main/img/首页-矩形框图片4.png'
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
      let that = this 
      
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
      let that = this
      wx.request({
        url: 'http://101.43.7.157:8000/alwaysRight/getRandomTextId',
        data: {cnt: 6},
        header: {'content-type':'application/json'},
        method: 'POST',
        dataType: 'json',
        responseType: 'text',
        success: (res) => {
          console.log("request success!");
          console.log(res.data.randomWork);
          that.setData({
            list:res.data.randomWork
          })
        },
        fail: () => {
          console.log("request failed!");
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