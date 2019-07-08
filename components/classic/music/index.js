import { classicBeh } from '../classic-beh.js'

const mMgr = wx.getBackgroundAudioManager()


Component({
  /**
   * 组件的属性列表
   */

  behaviors: [classicBeh],
  properties: {
    src:String,
  },

  /**
   * 组件的初始数据
   */
  data: {
    pauseSrc: 'imgages/player@pause.png',
    playSrc: 'images/player@play.png',
    playing: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPlay:function(event){
      if(!this.data.playing){
        this.setData({
          playing: true
        })
      }else{
        this.setData({
          playing:false
        })
      }
      mMgr.src = this.properties.src
      wx.getBackgroundAudioManager().title = '哈哈'

    }

  }
})
