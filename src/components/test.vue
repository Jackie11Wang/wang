<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <router-link to="/" active-class="router-active">测试</router-link>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      msg: 'Welcome to test'
    }
  },
  created(){
    var params = new URLSearchParams();
    params.append('username',  localStorage.username);
    params.append('oid', localStorage.oid);
    this.$axios.post('/m/php/action.php?action=getmessage',params).then(res=>{
      console.log(res)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
