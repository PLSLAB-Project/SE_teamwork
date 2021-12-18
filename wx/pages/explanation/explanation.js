// pages/explanation/explanation.js
const recorderManager = wx.getRecorderManager();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        text:'',
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
        let self=this;
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
                    console.log('ok');
                    console.log(res);
        //             let str = res.data;
                    let str2=JSON.parse(res.data);
                    // console.log("调接口获取到的"+str);
                    console.log("调接口获取到的json"+str2);
                    // console.log("str里的score"+str.text);
                    console.log("str2里的score"+str2.text);
                    if(typeof(str2.text)== "undefined"){
                        console.log("接口还未返回数据");
                    }
                    else{
                        console.log("str里的text"+str2.text);
                        app.globalData.text=str2.text;
                        console.log("appData里"+app.globalData.text);
                    }
                },
                fail: function (res) {
                    console.log("fail!");
                    console.log(res);
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