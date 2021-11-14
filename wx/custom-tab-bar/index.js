Comment ({
    //组件的属性列表
    properties: {
        //接受父组件的数据
        active: {
            type: "String",
            value: ""
        }
    },
    data: {
        selected: 0,
        color: "#7A7E83",
        selectedColor: "#3cc51f",
        position: "bottom",
        borderStyle: "black",
        list: [
        {
            "pagePath": "pages/homepage/homepage",
            "text": "首页",
            "iconPath": "icons/首页-0.png",
            "selectedIconPath": "icons/首页-1.png"
        },
        {
            "pagePath": "pages/article/article",
            "text": "推送",
            "iconPath": "icons/推送-0.png",
            "selectedIconPath": "icons/推送-1.png"
        },
        {
            "pagePath": "pages/speak/speak",
            "text": "说方言",
            "iconPath": "icons/说方言-0.png",
            "selectedIconPath": "icons/说方言-1.png"
        },{
            "pagePath": "pages/mine/mine",
            "text": "我的",
            "iconPath": "icons/我的-0.png",
            "selectedIconPath": "icons/我的-1.png"
        }
        ]
    },
    attached() {

    },
    methods: {
        switchTab(e) {
            if (this.data.selected === e.currentTarget.dataset.index) {
                return false;
            }
            else {
                const url = e.currentTarget.dataset.path;
                wx.switchTab({url});
            }
        }
        },
        run() {
            console.log(this.data.active);
            this.setData({
                selected: this.data.active
            })
            console.log(this.data.selected);
        }
})