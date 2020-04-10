<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="noticeData()">这是自定义弹框</button>
  </div>
</template>

<script>
import Notice from './Notice';
import create from '../utils/create.js'
export default {
  name: 'HelloWorld',
  components: {
  },
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  mounted() {
    this.$parent.$on('touch',()=> {
      console.log(22222)
    })
  },
  methods: {
    noticeData() {
      let notice = create(Notice,{
        title: '弹框',
        des: '这是自定义弹框组件',
        duration: 2000
      });
      notice.show();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
