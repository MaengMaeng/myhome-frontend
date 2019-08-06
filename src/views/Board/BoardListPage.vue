<template>
<v-layout wrap>
  <v-flex xs12 ma-5>
    <BoardList :boardList="boardList"></BoardList>
  </v-flex>
  <v-flex xs12 text-xs-center>
    <v-pagination v-model="page" :length="length" :total-visible="totalVisible"></v-pagination>
  </v-flex>
  <v-layout pa-5 justify-center>
    <v-flex xs3 text-xs-center>
        <v-text-field hide-details prepend-icon="search"></v-text-field>
    </v-flex>
    <v-btn>검색</v-btn>
    <v-btn to="boardwrite">글쓰기</v-btn>
  </v-layout>
</v-layout>
</template>

<script>
import BoardList from '@/components/BoardList'

export default {
  name: 'Products',
  data() {
    return {
      boardList: [],
      page: 1,
      length: 200,
      totalVisible: 7
    }
  },
  components: {
    BoardList
  },
  created() {
    var config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'dataType': "jsonp"
      }
    };

    var page = this.page - 1;
    // this.axios.get("http://ec2-52-79-126-1.ap-northeast-2.compute.amazonaws.com:8080/getBoardListByPage?page_num=" + page, config)
      this.axios.get("http://168.188.125.194:8080/getBoardListByPage?page_num=" + page, config)
      .then((response) => {
        this.boardList = response.data;
        this.axios.get("http://168.188.125.194:8080/getBoardTotalPageNum")
        .then(res => {
          this.length = res.data;
        })
      })
      .catch((error) => {
        console.log(error)
      })
  },
  watch:{
    page(){
      var config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'dataType': "jsonp"
        }
      };

      var page = this.page - 1;
      // this.axios.get("http://ec2-52-79-126-1.ap-northeast-2.compute.amazonaws.com:8080/getBoardListByPage?page_num=" + page, config)
        this.axios.get("http://168.188.125.194:8080/getBoardListByPage?page_num=" + page, config)
        .then((response) => {
          this.boardList = response.data;
        })
        .catch((error) => {
          console.log(error)
        })
    }
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
