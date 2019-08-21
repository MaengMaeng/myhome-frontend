<template>
<v-layout wrap>
  <v-flex xs12 ma-5>
    <BoardList :boardList="boardList"></BoardList>
  </v-flex>
  <v-flex xs12 text-xs-center class="pag">
    <v-pagination color="#3db39e" v-model="page" :length="length" :total-visible="totalVisible"></v-pagination>
  </v-flex>
  <v-flex xs12>
    <div class="searchbar-total">
      <div class="searchbar-first">
        <v-select color="#3db39e" v-model="category" :items="items" :menu-props="{ top: true, offsetY: true }" label="Category"></v-select>
      </div>
      <div class="searchbar-second">
        <v-text-field color="#3db39e" xs12 label="검색어를 입력해 주세요." v-model='search'></v-text-field>
      </div>
      <div class="searchbar-third">
        <v-btn flat color="#3db39e" class="searchbar-btn" @click="" style="min-width:40px; padding:0px;"><v-icon>search</v-icon></v-btn>
        <v-btn flat color="#3db39e" class="searchbar-btn" to="boardwrite">글쓰기</v-btn>
      </div>
    </div>
  </v-flex>
</v-layout>
</template>

<script>
import BoardList from '@/components/BoardList'

export default {
  name: 'Products',
  data() {
    return {
      boardList: [],
      noticeList: [],

      page: 1,
      length: 200,
      totalVisible: 7,
      items: ['제목', '내용', '제목 + 내용', 'ID'],
      search: "",
      category: "",
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
    this.axios.get(this.$store.state.server_ip + "/getNoticeList", config)
      .then((response) => {
        this.noticeList = response.data;

        this.axios.get(this.$store.state.server_ip + "/getBoardListByPage?page_num=" + page, config)
          .then((response) => {
            this.boardList = this.noticeList.concat(response.data);
            this.axios.get(this.$store.state.server_ip + "/getBoardTotalPageNum")
              .then(res => {
                this.length = res.data;
              })
          })
      })
  },
  watch: {
    page() {
      var config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'dataType': "jsonp"
        }
      };

      var page = this.page - 1;
      this.axios.get(this.$store.state.server_ip + "/getBoardListByPage?page_num=" + page, config)
        .then((response) => {
          this.boardList = this.noticeList.concat(response.data);
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
.pag button{
  box-shadow:none;
  padding: 0px;
}

.searchbar-total {
  display: flex;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 20px;
  /* background-color: rgba(9,9,9,0.1); */
}

.searchbar-first {
  float: left;
  display: inline-block;
  margin: 5px;
  max-width: 150px;
}

.searchbar-second {
  float: left;
  display: inline-block;
  margin: 5px;
  width: 300px;
}

.searchbar-third {
  float: left;
  display: inline-block;
  margin: 5px 0px;
  vertical-align: center;
}

.searchbar-btn{
  border: 1px solid #3db39e;
  border-radius: 5px;

  font-family: 'Noto Sans', sans-serif;
  font-size: 14px !important;
  font-weight: bold !important;
}

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

/*
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
*/

</style>
