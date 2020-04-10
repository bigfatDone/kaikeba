<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <HelloWorld1 msg="Welcome to Your Vue.js App"/>
    <k-input v-model="name"></k-input>
    <h2>{{name}}</h2> -->
    <!-- <s-lote> -->
      <!-- 匿名插槽 -->
      <!-- <p>this is default slot</p> -->
      <!-- 具名插槽 -->
      <!-- <template v-slot:content1>this is content<br></template> -->
      <!-- 作用域插槽 -->
      <!-- <template v-slot:content="data">this is slot-content{{data.foo}}</template> 
    </s-lote>
    <test></test> -->
    <router-link to="/home">这是跳到home</router-link><br>
    <router-link to="/list">这是跳到list</router-link>
    <router-view></router-view>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import HelloWorld1 from './components/HelloWorld1.vue'
// import KInput from './components/KInput'
// import SLote from './components/SLote'
// import test from './components/test/test'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    // HelloWorld1,
    // KInput,
    // SLote,
    // test
  },
  data() {
    return {
      name: ''
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
