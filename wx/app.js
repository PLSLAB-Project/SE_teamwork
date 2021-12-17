// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    musicList: [], // 音乐列表
    articleList: [], //推文列表
    articleId: 10032, //当前推文的id
    musicid: Number,
    session: '19859092005', //手机号
    score:"nothing"//评分
  }
})
