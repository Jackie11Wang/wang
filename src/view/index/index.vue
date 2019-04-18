<template>
  <div>
    <header-nav :title="title" @say="say" ></header-nav>
    大萨达撒大撒
    <footer-nav v-bind:class="{'isIndex':IsNowPage}"></footer-nav>
  </div>
  
</template>

<script>
  import FooterNav from '../../components/footer.vue'
  import HeaderNav from '../../components/header.vue'
  export default{
    components:{
      FooterNav,
      HeaderNav
    },
    
    data(){
      return {
        IsNowPage : true,
        title : "首页"
      }
    },

    methods : {
      say(msg){
        this.title = msg
      }
    }
  }
</script>
