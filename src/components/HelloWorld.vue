<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr />
    <h1>{{ message }}</h1>
    <h1>{{ message.split('') }}</h1>
    <h1>{{ message.split('').reverse() }}</h1>
    <h1>{{ message.split('').reverse().join('') }}</h1>
    <h1>{{ reverse_message }}</h1>
    <hr />
    <h1>{{ search_view }}</h1>
    <input v-model ="search" type="text" placeholder="검색어" id="search" name ="search" />
    <h1>{{ search_reverse }}</h1>
    <hr />
    <h1>{{ name }}</h1>
    <h1>{{ age }}</h1>
    <h1>{{ person }}</h1>
    <input v-model = "name" placeholder="name"/>
    <input v-model = "age" placeholder="age"/>
    <hr />
    <h1>{{ car_info }}</h1>
    <input v-model = "car_model" placeholder="자동차 기종" />
    <input v-model = "car_price" placeholder="가격" />

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      message : "Hi World",
      search : '',
      search_view : '',
      name : '',
      age : '',
      person : '',
      car_model : 'OOO',
      car_price : 1000,
    }
  },
  computed : {
    reverse_message(){
      return this.message.split('').reverse().join('');
    },
    search_reverse(){
      return this.search_view.split('').reverse().join('');
    },
    car_info(val){
      return `${this.car_model}의 가격은 ${this.car_price}달러입니다.`;
    }

  },
  watch: {
    search : function(){
      this.search_view += this.search.at(-1);
      this.search_view += '-';
    },
    name : function(){
      this.person = this.name + '***' + this.age;
    },
    age : function(){
      this.person = this.name + '***' + this.age;
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
