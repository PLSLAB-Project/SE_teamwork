// pages/explanation/explanation.js
const recorderManager = wx.getRecorderManager();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        text:'请点击录音说话，说完点击转换',
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    startRecord(){
        let that = this;
        const options = {
            duration: 61000,//指定录音的时长，单位 ms
            sampleRate: 16000,//采样率
            numberOfChannels: 1,//录音通道数
            encodeBitRate: 96000,//编码码率
            format: 'wav',//音频格式，有效值 aac/mp3
            frameSize: 50,//指定帧大小，单位 KB
        }
        // 开始录音
        recorderManager.start(options);
        recorderManager.onStart(() => {
        console.log('recorder start')
        });
        let self=this;
        //错误回调
        recorderManager.onError((res) => {
            console.log(res);
        })
    },

    translate(){
        let that=this;
        recorderManager.stop();
        recorderManager.onStop((res) => {
            this.tempFilePath = res.tempFilePath;
            console.log('停止录音', res.tempFilePath)
             wx.uploadFile({
                url: 'http://101.43.7.157:8000/alwaysRight/uploadAudio4text',
                filePath: res.tempFilePath,
                name: 'file',
                header: {
                          'content-type': 'multipart/form-data'
                },
                formData:{     
                    key: 'audio'//这里是为文件设置上传后的文件名
                }, 
                success: function (res) {
                    console.log('请求转换接口成功');
                    console.log(res);
                    that.setData({
                        text:res.data.text
                    })
                },
                fail: function (res) {
                    console.log("请求转换接口失败!");
                    that.setData({
                        text:'请求接口失败，请登录后再尝试'
                    })
                }                      
            });
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