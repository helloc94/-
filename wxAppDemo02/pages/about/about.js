//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    companyInfo: {}
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      }),
      companyInfo: {
        'phone':'15302791621',
        'email':'qwas978@163.com',
        'address':'广东省深圳市龙华区梅龙大道770'}
    })
  }
})
