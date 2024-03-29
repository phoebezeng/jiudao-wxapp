import { HTTP } from '../util/http.js'

class ClassicModel extends HTTP {
  getLatest(sCallback){
    this.request({
      url:'classic/latest',
      success:(res)=>{
        sCallback(res)
        this._setLatestIndex(res.index)
        let key = this._getKey(res.index)
        wx.setStorageSync(key, res)
      }
    })
  }

  getClassic(index,nextOrPrevious, sCallback){
    let key = nextOrPrevious == 'next' ? this._getKey(index+1) : this._getKey(index-1)
    let classic = wx.getStorageSync(key)
    if(!classic) {
      this.request({
        url: 'classic/' + index + '/' + nextOrPrevious,
        success: (res) => {
          wx.setStorageSync(
            this._getKey(res.index), res)
          sCallback(res)
        }
      })   
    }
    else{
      sCallback(classic)
    }
  }
  // getPrevious(index, sCallback){
  //   this.request({
  //     url:'classic/'+ index + '/previous',
  //     success:(res)=>{
  //       sCallback(res)
  //     }
  //   })
  // }

  // getNext(index, sCallback){
  //   this.request({
  //     url:'classic/'+ index + '/next',
  //     success:(res)=>{
  //       sCallback(res)
  //     }
  //   })
  // }

  isFirst(index) {
    return index == 1 ? true : false
  }

  isLatest(index) {
    let latest = this._getLatestIndex(index)
    return  latest == index ? true : false
  }

  _setLatestIndex(index){
    wx.setStorageSync('latest', index)
  }

  _getLatestIndex(){
    let index = wx.getStorageSync('latest')
    return index
  }

  _getKey(index){
    let key = 'classic-' + index
    return key
  }
}



export {ClassicModel}