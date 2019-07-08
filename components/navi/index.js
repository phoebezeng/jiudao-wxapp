// components/nav/nav.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    first: Boolean,
    latest: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    leftSrc:"imags/triangle@left.png",
    disLeftSrc: "imags/triangle.dis@left.png",
    rightSrc: "imags/triangle@right.png",
    disRightSrc: "imags/triangle.dis@right.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLeft:function(event){
      if(!this.properties.latest){
      this.triggerEvent('left', {}, {})
      }
    },
    onRight:function(event){
      if(!this.properties.first){
      this.triggerEvent('right', {}, {})
      }
    }
  }
})
