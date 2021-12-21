// pages/articleContent/articleContent.js
let appData =  getApp().globalData;
 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tmpContent: [ "俗说:齐人有女，二人求见。东家子丑而富，西家子好而贫。父母疑不能决，问其女，定所欲适，难指斥言者，偏袒，令我知之。女便两袒。怪问其故。曰：“欲东家食，而西家宿。”此为两袒者也。", "    闽南语：", "    有一个故事：齐国有一户人有一之作妇囝，有两家人来提亲。东家之丈夫囝生之歹看但是家庭好，西家之丈夫囝生之好看但是家庭歹。", "    伊父母无法行做决定，就想问尹作妇囝：“汝想欲嫁给谁（diang，“底人”的合音字的代字，谁的意思），若是歹势明说，就给肩头露出来，给阮知影汝之意思。”", "    作妇囝就露出两之肩头，尹父母感觉正奇怪就问此是啥物意思。伊说：“我想置东家食饭，置西家睏瞑。”", "    此就是所谓之两袒者啊。", ""],
    content: [],
    auth: "",
    title: ""

  },
  getArticleContent: function () {
    console.log("获取文章内容");
    let val = null;
    let that = this;
    wx.request({
      url: 'http://101.43.7.157:8000/alwaysRight/getRandomText',
      //url: 'http://127.0.0.1:5000/alwaysRight/getRandomText',
      data: {workid: appData.articleId, phone: appData.session},
      header: {'content-type':'application/json'},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        console.log("request success!");
        //res.data.randomWork
        //console.log(res);
        console.log(res.data);
        val = res.data.randomWork[0].workContent;
        val = val.split('\n');
        appData.articleList = [];
        let auth = val[1];
        let title = val[0];
        for (let i = 2; i < val.length; ++i)
          appData.articleList.push(val[i]);
          //console.log(appData.articleList);
        that.setData({
          content: appData.articleList,
          auth: auth,
          title: title
        });
      },
      fail: (err) => {
        console.log("request failed!");
        console.log(err);
      },
      complete: () => {
      }
    });
  },
  test: function () {
    let content = this.data.content;
    let qq = content.split('\n');
    console.log(qq);
    this.setData({
      content:qq
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    that.getArticleContent();
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
    let that = this;
    that.getArticleContent();
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