// pages/homepage/homepage.js
Page({

    data: {
      list:[
      {title:'闽南话的魅力',
        write:'陈建新',
        src:'https://cdn.jsdelivr.net/gh/Taj-x/images@main/img/首页-矩形框图片1.png'
      },
      {
        title:'学听闽南话',
        write:'黄芩',
        src:'https://cdn.jsdelivr.net/gh/Taj-x/images@main/img/首页-矩形框图片2.png'
      },
      {
        title:'闽南语抗疫热词TOP9',
        write:'小南',
        src:'https://cdn.jsdelivr.net/gh/Taj-x/images@main/img/首页-矩形框图片3.png'
      },
      {
        title:'听阿姆讲童谣',
        write:'小北',
        src:'https://cdn.jsdelivr.net/gh/Taj-x/images@main/img/首页-矩形框图片1.png'
      },
      {
        title:'听阿姆讲童谣',
        write:'小北',
        src:'https://cdn.jsdelivr.net/gh/Taj-x/images@main/img/首页-矩形框图片4.png'
      },
      {
        title:'学听闽南话',
        write:'黄芩',
        src:'https://cdn.jsdelivr.net/gh/Taj-x/images@main/img/首页-矩形框图片2.png'
      }
      ],
    },
    turn_to_explanation(){
        wx.navigateTo({
          url: '../explanation/explanation',
        })
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      let that = this 
        wx.request({
        method: 'POST',
        url: 'http://101.43.7.157:8000/alwaysRight/getRandomWork', 
        header: {
            'content-type': 'application/json' // 默认值
        },
        data:{},
        success: function (res) {
            console.log(res)
            
        },
        fail: function () {
        console.log("fail")
        },
        })
         
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