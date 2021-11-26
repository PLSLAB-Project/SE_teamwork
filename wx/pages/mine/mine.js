Page({
    data: {
      title1:"闽南话的魅力",
      title2:"学听闽南话",
      title3:"闽南语抗疫热词TOP9",
      title4:"听阿姆讲童谣",
      title5:"一片冰心在玉壶",
      write1:"陈建新",
      write2:"黄芩",
      write3:"小南",
      write4:"小北",
      write5:"世界华声",
      time1:"2021-11-19",
      time2:"2021-11-19",
      time3:"2021-11-19",
      time4:"2021-11-19",
      userInfo: {},
      islogin:false,
      tab: ["收藏记录","浏览历史"],
      currentIndex:"0",
      left:"",
      isCollect:true,
    },

    onLoad() {
      this.changeline(e);
    },

    getUserProfile(e) {
      // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
      // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
      wx.getUserProfile({
        desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
          this.setData({
            userInfo: res.userInfo,
            islogin: true
          })
        }
      })
      // wx.request({
      //   url: '',
      // })
    },

    noUserProfile(e) {
          this.setData({
            islogin: false
          })
    },
    
    changeTab:function(e){
      this.setData({
       currentIndex: e.currentTarget.dataset.aa
      });
      if(e.currentTarget.dataset.aa==0){
        this.setData({
          isCollect:true,
        })
      };
      if(e.currentTarget.dataset.aa==1){
        this.setData({
          isCollect:false,
        })
      };
      this.changeline(e);
      // console.log('e.currentTarget.dataset.aa:'+e.currentTarget.dataset.aa);
     },

     changeline:function(){
      const query = wx.createSelectorQuery()
      var _this = this
      query.select('.tabTrue').boundingClientRect()
      query.exec(function (res) {
       _this.setData({
        left: res[0].left
       })
      })
     },

    collect(){
      this.setData({
        isCollect:true,
      })
    },

    record(){
      this.setData({
        isCollect:false,
      })
    },
})