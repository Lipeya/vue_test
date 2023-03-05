<template>
  <div class="about">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/book">book</router-link>
    </nav>
    <h1>This is an about page</h1>
    <h1>{{ getStateMessage }}</h1>
    <button @click="fn_changeMessage">Click</button>
    <hr />

    <h1>{{ getStateCommon }}</h1>
    <button @click="fn_changeCommon">Click</button>
  </div>
</template>
<script>
  export default{
    methods:{
      fn_changeMessage(){
        this.$store.dispatch('callMutation', { newMsg : '와우우우' });
      },
      fn_changeCommon(){
        this.$store.dispatch('callMutation', { newCommon : '끝'});
      }

    },
    computed :{
      getStateMessage(){
        return this.$store.getters.getMsg;
      },
      getStateCommon(){
        return this.$store.getters.getCommon;
      }
    },
  }
</script>