<template>
  <loading :active.sync="isLoading"
  :can-cancel="false"
  :is-full-page="isFullPage"></loading>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

  export default {
    data(){
      return {

      }
    },
    components:{
      Loading
    },
    props:{
      isLoading:{type:Boolean, default:false},
      isFullPage:{type:Boolean, default:true}
    },
    methods: {

    }
  }
</script>
