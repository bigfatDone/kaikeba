<!--  -->
<template>
<div>
  <input type="text" :value="value" @input="Input">
</div>
</template>

<script>
export default {
data() {
return {
  value: ''
}
},
//生命周期 - 创建完成（访问当前this实例）
created() {

},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

},
methods: {
  Input(e){ // 数据双向绑定原理
    this.$emit('input',e.target.value)
    var data = e.target.value;
    var reg = /^[1-9]\d*$/g;
      console.log(reg.test(data))
  }
}
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>