let appData = getApp().globalData;
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
      issessioned:true,
      isreged:true,
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
    // 获得输入框里的session
    getsession(res){
      let that =this;
      appData.session=res.detail.value
      console.log(appData.session)
      if(res.detail.value.length==11){
         that.setData({
           issessioned:false
         })
      }
      else{
        that.setData({
          issessioned:true
        })
      }
    },
    // 获得收藏
    getuserlike(){
      wx.request({
        url: 'http://101.43.7.157:8000/alwaysRight/getUserLikeById',
        method: 'POST',
          header: {
              'content-type': 'application/json' // 默认值
          },
          dataType:'json',  
          data:{phone:appData.session},
          success:function(res){
            console.log('请求收藏成功：'+res)
          },
          fail:function(){
            console.log('请求收藏失败：'+res)
          }
      })
    },
    // 获得历史
    gethistroy(){
      wx.request({
        url: 'http://101.43.7.157:8000/alwaysRight/getUserHistory',
        method: 'POST',
          header: {
              'content-type': 'application/json' // 默认值
          },
          dataType:'json',  
          data:{phone:appData.session},
          success:function(res){
            console.log('请求历史成功：'+res)
          },
          fail:function(){
            console.log('请求历史失败：'+res)
          }
      })
    },
    // 注册
    reg(){
      console.log('输入的session为：'+appData.session)
      let that = this;

      ////////////
      //   wx.request({
      //     method: 'POST',
      //     url: 'http://101.43.7.157:8000/alwaysRight/reg', 
         
      //     header: {
      //         'content-type': 'application/json' // 默认值
      //     },
      //     // dataType:'json',  
      //     data:{phone:'17828796627'},//这里的phone参数是某用户的电话号码
      //     success: function (res) {
      //       console.log("reg success");
      //       console.log(res);
      //       that.setData({
      //         isreged:false
      //       })
      //       wx.showToast({
      //         title: '注册成功',
      //       })
      //     },
      //     fail:function(res){
      //       console.log("reg 失败");
      //       console.log(res);
      //       wx.showToast({
      //         title: '注册失败',
      //       })
      //     },
      //  })
       ////////////
      
       wx.request({
        method: 'POST',
        url: 'http://101.43.7.157:8000/alwaysRight/reg', 
        header: {
            'content-type': 'application/json' // 默认值
        },
        data: {
            phone: appData.session,//这里的phone参数是某用户的电话号码
        },
        success: function (res) {
            console.log("reg success");
            console.log(res);
            that.setData({
              isreged:false
            })
            wx.showToast({
              title: '注册成功',
            })
        },
        fail: function (res) {
        console.log("fail"+res)

        },
        complete: function () {
            that.setData({
            isshow:false
            })
        } 
        })
    },
    //登录 
    login(){
      console.log(appData.session.length)
      console.log(appData.session)
      let that = this
      wx.request({
            url: 'http://101.43.7.157:8000/alwaysRight/logIn', 
            method: 'POST',
            header: {
                'content-type': 'application/json' // 默认值
            },
            dataType:'json',  
            data:{phone:appData.session},//这里的phone参数是某用户的电话号码
            success: function (res) {
              console.log("login success");
              console.log(res);
              that.getuserlike();
              that.gethistroy();
            },
            fail:function(res){
              console.log("登录失败");
            },
      })
      wx.getUserProfile({
        desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
          that.setData({
            userInfo: res.userInfo,
            islogin: true
          })
        }
      })
    },
    // 登出
    logout() {
          this.setData({
            islogin: false
          })
          wx.request({
            url: 'http://101.43.7.157:8000/alwaysRight/logOut',
            method: 'POST',
            header: {
                'content-type': 'application/json' // 默认值
            },
            dataType:'json',  
            success: function (res) {
              console.log("logout success");
              console.log(res);
            },
            fail:function(res){
              console.log("登出失败");
            },
          })
    },
    // 检测是否登录态，返回msg为1表示已登录。
    check(){
      console.log('checking');
      wx.request({
        url: 'http://101.43.7.157:8000/alwaysRight/checkLogin',
        method:'POST',
        header: {
          'content-type': 'application/json' // 默认值
        },
        dataType:'json',
        success: (res) => {
          console.log("检测成功!");
          console.log(res.data);
        },
        fail: () => {
          console.log("检测失败");
        },
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
      this.getuserlike();
      this.setData({
        isCollect:true,
      })
    },

    record(){
      this.gethistroy();
      this.setData({
        isCollect:false,
      })
    },
})