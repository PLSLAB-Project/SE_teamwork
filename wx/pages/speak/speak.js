// pages/speak/speak.js

const recorderManager = wx.getRecorderManager();
const innerAudioContext = wx.createInnerAudioContext();
let audioPath='';
let app = getApp();


//新增
var value=0;
let myTimer;
let mygrade=-1;

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

        this.progressView2 = this.selectComponent("#progressView2");
 
        //this.progressView.showCanvasRing(value, 100); //绘制环形进度
        this.progressView2.drawProgressBar(value, 60); //绘制环形进度
    },

    //开始录音的时候
    start: function () {

        value=0;
        this.progressView2.drawProgressBar(value, 100);

        this.setData({
            isActive:false
        })
        const options = {
        duration: 61000,//指定录音的时长，单位 ms
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

        let self=this;
        myTimer = setInterval(function(){
            value++;
            self.progressView2.drawProgressBar(value, 60);
            console.log(value);
            if(value>60){
                console.log("超时停止");
                self.stop();
            }
        },1000)

        //错误回调
        recorderManager.onError((res) => {
        console.log(res);
        })
    },
     //停止录音
     stop: function () {

        clearInterval(myTimer);

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


        ////新增
       // this.uploadAudio();
    },

    //播放声音
    play: function () {
        innerAudioContext.autoplay = true
        // innerAudioContext.src = this.tempFilePath,
        innerAudioContext.src = audioPath,
        innerAudioContext.onPlay(() => {
        console.log('开始播放')
        })
        innerAudioContext.onError((res) => {
        console.log(res.errMsg)
        console.log(res.errCode)
        })
    },

    respeak: function(){
        value=0;
        this.progressView2.drawProgressBar(value, 100);
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
                 let str = res.data;
                console.log("调接口获取到的"+str);
                //appData.score = str.score;
                
                if(typeof(str.score)== "undefined"){
                    console.log("接口还未返回数据");
                }
                else{
                    console.log("str里的score"+str.score);
                    console.log("appData里"+app.globalData.score);
                }
                
            },
            fail: function (res) {
                 console.log(res);
            }
            
        });

        if(app.globalData.score!="nothing"){
            wx.navigateTo({
                url: '../mark/mark',
            })
        }
       

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
        if(value>60){
            console.log("超时停止");
            this.stop();
        }

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