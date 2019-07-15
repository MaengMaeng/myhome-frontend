<template>
  <v-layout wrap>
    <v-flex xs12 ma-5>
      <BoardList></BoardList>
    </v-flex>
  </v-layout>
</template>

<script>
import BoardList from '@/components/BoardList'

  export default {
    name: 'Products',
    data(){
      return{
        lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
      }
    },
    components: {
      BoardList
    },
    methods: {}
  }

</script>

<style media="screen">

  .nav-side {
    display: inline-block;
    color: white;
    width: 20%;
  }

  .li-title {
    padding: 12px;
    background: #456;
  }

  .li-title:hover {
    background-color: #999;
    cursor: pointer;
  }

  .container-product {
    padding: 1%;
  }
  .container-detail {
    width: 70%;
    display: inline-block;
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
    vertical-align: top;
    height: 512px;
  }
  .container-atom {
    padding: 10%;
    background: #456;
  }
  .ul-widthfree {
    width: 100%;
  }
  p {
    text-align: center;
  }
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
  }
  #mycontainer {
    background: #456;
  }

</style>
