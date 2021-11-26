let appData = getApp().globalData;//全局数据

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
    //获取播放列表
    setMusicList: function() {
      console.log("获取播放列表");
      wx.request({
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
                src: work[i].Content,
                title: work[i].workName
              }
            );
          }
        },
        fail: () => {
          console.log("request failed!");
        },
        complete: () => {
        }
      });
    },
    onLoad() {
    },
    getUserProfile(e) {
      let that = this;
      // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
      // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
      wx.getUserProfile({
        desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
          that.setData({
            userInfo: res.userInfo,
            islogin: true
          })
        }
      })
      that.setMusicList();
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