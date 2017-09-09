import indexlist from './index/index-list.vue'
// 这里是重点
const Indexlist = {
    install: function(Vue){
        Vue.component('indexlist',indexlist)
    }
}

// 导出组件
export default Indexlist