import {playMode} from 'common/js/config'

const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playlist: [],
  sequenceList: [],
  mode: playMode.sequence,
  currentIndex: -1, // 当前播放索引
  disc: {}, // 歌单
  topList: {}, // 排行榜详情
  searchHistory: [] // 搜索历史
}

export default state
