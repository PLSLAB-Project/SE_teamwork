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
      isCollect:true,
    },
    onLoad() {
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
    },
    noUserProfile(e) {
          this.setData({
            islogin: false
          })
    },
    collect(){
      this.setData({
        isCollect:true
      })
    },
    record(){
      this.setData({
        isCollect:false
      })
    },
})