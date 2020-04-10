<!--  -->
<template>
  <div class="notice" v-if="isShow">
    <p>{{title}}</p>
    <p>{{des}}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    des: {
      type: String,
      default: ''
    },
    duration: {
      type: Number,
      default: 0
    },
  },
  data() {
    return {
      isShow: false
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {

  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {

  },
  methods: {
    show() {
      this.isShow = true;
      setTimeout(() => {
        this.close();
        },this.duration)
    },
    close() {
      this.isShow = false
      this.remove() // 这个方法是调用了原型链的方法
    }
  },
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.notice {
  position: fixed;
  display: flex;
  height: 200px;
  width: 100%;
  top:0;
  left: 0;
  justify-content: center;
  align-items: center;
  background-color: lightpink;
  z-index: 99;
}
</style>