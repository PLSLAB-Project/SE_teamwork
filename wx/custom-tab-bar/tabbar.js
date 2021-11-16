// custom-tab-bar/tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    idx: {
        type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    tabBar: [
        {
            "pagePath": "../homepage/homepage",
            "text": "首页",
            "iconPath": "../icons/首页-0.png",
            "selectedIconPath": "../icons/首页-1.png",
            "selected": false
          },
          {
            "pagePath": "../article/article",
            "text": "推送",
            "iconPath": "../icons/推送-0.png",
            "selectedIconPath": "../icons/推送-1.png",
            "selected": false
          },
          {
            "pagePath": "../speak/speak",
            "text": "说方言",
            "iconPath": "../icons/说方言-0.png",
            "selectedIconPath": "../icons/说方言-1.png",
            "selected": false
          },
          {
            "pagePath": "../mine/mine",
            "text": "我的",
            "iconPath": "../icons/我的-0.png",
            "selectedIconPath": "../icons/我的-1.png",
            "selected": false
          }
    ]
  },
  observers: {
    "idx": function(id) {
        let otbabar = this.data.tabBar;
        otbabar[id]['iconPath'] = otbabar[id]['selectedIconPath'];
        this.setData({tabBar: otbabar});
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    navigateDetail : function(e) {
        wx.reLaunch({
          url: e.currentTarget.dataset.url
        })
    }
  }
})
