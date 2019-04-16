<template>
  <div>
    大萨达撒大撒
    <footer-nav v-bind:class="{'isIndex':IsNowPage}"></footer-nav>
  </div>
  
</template>

<script>
  import FooterNav from '../../components/footer.vue'
  export default{
    components:{
      FooterNav
    },
    
    data(){
      return {
        IsNowPage : true
      }
    }
  }
</script>
