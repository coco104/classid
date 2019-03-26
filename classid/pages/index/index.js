//index.js
//获取应用实例
Page({
    data: {
    student_id: '',
    course_id: ""
  },
  //获取用户输入的学号
  student_idInput: function (e) {
    this.setData({
      student_id:e.detail.value  
    
    })

   },
  class_idInput: function (e) {
    this.setData({
      course_id: e.detail.value
    })
  },
  //获取用户输入的密码
  loginBtnClick: function (e) {
    console.log("学号：" + this.data.student_id + " 课程id：" + this.data.course_id);
  }
  ,
  // 用户点击右上角分享
  onShareAppMessage: function () {

  },
  sentNumber : function(){
    var that = this
    wx.request({
      url: 'http://localhost:3000/demo', // 仅为示例，并非真实的接口地址
      data: {
        student_id: that.data.student_id/*''*/,
        course_id: that.data.course_id/*''*/
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data);
        that.setData({screenData:res.data});
      },
    })
      }
    
  

})

