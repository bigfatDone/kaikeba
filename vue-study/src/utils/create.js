import Vue from 'vue'

export default function create(components,props) {
  // 创建vue实例化
  let vm = new Vue({
    render: h => h(components,{props}) // 在内存中生成虚拟dom，生成字符串模板
  }).$mount()

  // 获取当前组件的模板
  let com = vm.$children[0];

  // 往当前body页面追加当前的模板字符串
  document.body.appendChild(vm.$el)

  // 组件进入销毁状态
  com.remove = () => {
    // 删除页面追加的模板字符串
    document.body.removeChild(vm.$el);
    // 销毁创建的vue实例化
    vm.$destroy()
  }

  return com;
}