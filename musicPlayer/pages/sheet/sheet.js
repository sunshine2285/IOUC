// pages/sheet/sheet.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    songs:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */

  bindPlayAndSkip: function(e){
    app.globalData.currentSong = e.currentTarget.dataset.item;
    wx.navigateTo({
      url: '../play/play',
    })
  },

  onLoad: function (options) {
    var self = this;
    wx.request({
      url: 'https://v1.itooi.cn/tencent/songList',
      data:{
        id:'2966721720',
        format:'1'
      },
      header:{
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        self.setData({
          songs: res.data.data
        })
      }
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