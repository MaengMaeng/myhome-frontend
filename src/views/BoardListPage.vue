<template>
  <v-layout wrap>
    <v-flex xs12 ma-5>
      <BoardList :boardList="boardList"></BoardList>
      <v-btn to="boardwrite">글쓰기</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import BoardList from '@/components/BoardList'

  export default {
    name: 'Products',
    data(){
      return{
        boardList:[]
      }
    },
    components: {
      BoardList
    },
    created(){
      var config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'dataType':"jsonp"
        }
      };

      this.axios.get("http://ec2-52-79-126-1.ap-northeast-2.compute.amazonaws.com:8080/getBoardListByPage?page_num=0", config)
      // this.axios.get("http://168.188.125.194:8080/getBoardListByPage?page_num=0", config)
        .then((response) => {
          this.boardList = response.data;
        })
        .catch((error) => {
          console.log(error)
        })
    },
    methods: {

    }
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
