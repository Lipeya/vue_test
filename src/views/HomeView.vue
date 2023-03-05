<template>
  <div class="home">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/book">book</router-link>
    </nav>
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>{{ storeMessage }}</h1>
    <button @click="fn_changeMessage">Click</button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  computed: {
    storeMessage(){
      return this.$store.getters.getMsg;
    }
  },
  methods:{
    fn_changeMessage(){
      this.$store.dispatch('callMutation', {newMsg: '헐랭'});
    }
  },
  components: {
    HelloWorld
  }
}
</script>
