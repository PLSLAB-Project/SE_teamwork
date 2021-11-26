// pages/speak/speak.js

const recorderManager = wx.getRecorderManager();
const innerAudioContext = wx.createInnerAudioContext();
let audioPath='';

Page({

    /**
     * 页面的初始数据
     */
    data: {
        isActive:true
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    //开始录音的时候
    start: function () {

        this.setData({
            isActive:false
        })
        const options = {
        duration: 10000,//指定录音的时长，单位 ms
        sampleRate: 16000,//采样率
        numberOfChannels: 1,//录音通道数
        encodeBitRate: 96000,//编码码率
        format: 'wav',//音频格式，有效值 aac/mp3
        frameSize: 50,//指定帧大小，单位 KB
        }
        //开始录音
        recorderManager.start(options);
        recorderManager.onStart(() => {
        console.log('recorder start')
        });
        //错误回调
        recorderManager.onError((res) => {
        console.log(res);
        })
    },
     //停止录音
     stop: function () {

        this.setData({
            isActive:true
        })
        recorderManager.stop();
        recorderManager.onStop((res) => {
            this.tempFilePath = res.tempFilePath;
            console.log('停止录音', res.tempFilePath)
            const { tempFilePath } = res
            audioPath=res.tempFilePath;

        //     if((typeof res.tempFilePath==='string' )){
        //         console.log("yes");
        //     }else{
        //         console.log("no");
        //     }

        //     console.log("test");
        //      wx.uploadFile({
        //         url: 'http://101.43.7.157:8000/alwaysRight/uploadAudio4Score',
        //         filePath: res.tempFilePath,
        //         name: 'file',
        //         header: {
        //              'content-type': 'multipart/form-data'
        //         },
        //         formData:{     
        //             key: 'audio'//这里是为文件设置上传后的文件名
                
        //         },
                
        //         success: function (res) {
        //             console.log(res);
        //              var str = res.data;
        //         },
        //         fail: function (res) {
        //              console.log(res);
        //         }
        //         
        //     });


        //     this.setData({
        //         mypath: ''+res.tempFilePath
        //     })
        })
    },

    //播放声音
    play: function () {
        innerAudioContext.autoplay = true
        innerAudioContext.src = this.tempFilePath,
        innerAudioContext.onPlay(() => {
        console.log('开始播放')
        })
        innerAudioContext.onError((res) => {
        console.log(res.errMsg)
        console.log(res.errCode)
        })
    },

    uploadAudio:function(){
         console.log("Test_uploadAudio4Score");
         wx.uploadFile({
            url: 'http://101.43.7.157:8000/alwaysRight/uploadAudio4Score',
            filePath: audioPath,
            name: 'audio',
            header: {
                 'content-type': 'multipart/form-data'
                    // 'content-type': 'application/x-www-form-urlencoded' 
            },
            success: function (res) {
                console.log(res);
                 var str = res.data;
            },
            fail: function (res) {
                 console.log(res);
            }
            
        });

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