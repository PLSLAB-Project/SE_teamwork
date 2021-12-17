Page({
    data: {
      list1:[{title:'闽南话的魅力',
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
    }],
      list2:[{title:'闽南话的魅力',
      write:'陈建新',
      src:'https://cdn.jsdelivr.net/gh/Taj-x/images@main/img/首页-矩形框图片1.png',
      time:"2021-11-19"
    },
    {
      title:'学听闽南话',
      write:'黄芩',
      src:'https://cdn.jsdelivr.net/gh/Taj-x/images@main/img/首页-矩形框图片2.png',
      time:"2021-11-19"
    },
    {
      title:'闽南语抗疫热词TOP9',
      write:'小南',
      src:'https://cdn.jsdelivr.net/gh/Taj-x/images@main/img/首页-矩形框图片3.png',
      time:"2021-11-19"
    },
    {
      title:'听阿姆讲童谣',
      write:'小北',
      src:'https://cdn.jsdelivr.net/gh/Taj-x/images@main/img/首页-矩形框图片1.png',
      time:"2021-11-19"
    },
    {
      title:'听阿姆讲童谣',
      write:'小北',
      src:'https://cdn.jsdelivr.net/gh/Taj-x/images@main/img/首页-矩形框图片4.png',
      time:"2021-11-19"
    },
    {
      title:'学听闽南话',
      write:'黄芩',
      src:'https://cdn.jsdelivr.net/gh/Taj-x/images@main/img/首页-矩形框图片2.png',
      time:"2021-11-19"
    }],
      

      session:"",
      userInfo: {},
      islogin:false,
      tab: ["收藏记录","浏览历史"],
      currentIndex:"0",
      left:"",
      isCollect:true,
    },
    
    onLoad() {
      this.changeline();
    },

    getsession(res){
      this.setData({
        session:res.detail.value
      })
      console.log(this.data.session)
    },

    getUserProfile(e) {

      console.log(this.data.session)
        let that = this 
        wx.request({
        method: 'POST',
        url: 'http://101.43.7.157:8000/alwaysRight/logIn', 
        header: {
            'content-type': 'application/json' // 默认值
        },
        data: {
          Phone: that.data.session,//这里的phone参数是某用户的电话号码
        },
        success: function (res) {
          console.log(that.data.session)
        },
        })

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