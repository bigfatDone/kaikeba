/* eslint-disable */ // 禁止eslint
let Vue;
class VueRouter {
  constructor(options){ // router传入参数
    this.$options = options;
    this.routeMap = {}; // 所有的routes组件实例
    this.app = new Vue({ // 获取当前的vue
      data: {
        current: '/'
      }
    })
  }

  // vue-router初始化 任务
  init() {
    this.bindEvents();
    this.createRouteMap(this.$options);
    this.initComponent()
  }

  // 全局添加默认绑定任务
  bindEvents() {
    window.addEventListener('load',this.onHashChange.bind(this),false);
    window.addEventListener('hashchange',this.onHashChange.bind(this),false);
    // window.addEventListener('popstate',this.onHashChange.bind(this),false);
    // pushState和replaceState不会向服务器发起请求
  }

  // 获取hash地址
  onHashChange() {
    this.app.current = window.location.hash.slice(1) || '/';
  }

  // 获取路由配置里面的地址
  createRouteMap(options) {
    options.routes.forEach(item => {
        this.routeMap[item.path] = item;
    })
}
  // 初始化默认router标签
  initComponent() {
    // 声明两个全局组件
    Vue.component('router-link', {
      props: {
          to: String
      },
      render(h) {
          // 目标是：<a :href="to">xxx</a>
          return h('a', {attrs:{href: '#'+this.to}}, this.$slots.default)
          // return <a href={this.to}>{this.$slots.default}</a>
      }
    });

    // hash -> current -> render
    Vue.component('router-view', {
        // 箭头函数能保留this指向，这里指向VueRouter实例
        render: (h) => {
            const Comp = this.routeMap[this.app.current].component;
            return h(Comp);
        }
    })
  }
}

// 插件逻辑
VueRouter.install = function(_vue){
  Vue = _vue;
  Vue.mixin({
    beforeCreate() {
      if(this.$options.router){
        // Vue.prototype.$router = this.$options.router; // 原型链上添加router属性
        this.$options.router.init() // 调用vue插件中的init方法
      }
    },
  })
}
export default VueRouter
