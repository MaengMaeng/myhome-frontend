<template>
<v-layout wrap align-center justify-center row fill-height>
  <v-flex xs12 text-xs-left>
    <v-img src="https://source.unsplash.com/random" aspect-ratio="1.7">
      <v-layout wrap pa-5 fill-height>
        <v-flex v-if="board != null" pa-5 ma-5 white xs12>
          <h1><span style="color:red;" v-if="board.board.b_category == 0">[공지] </span>{{board.board.b_title}}</h1>
          <h3 style="text-align:right;color:grey;">작성자 : {{board.board.b_writer}}</h3>
          <v-divider></v-divider>
          <h3 style="text-align:right;color:grey;">{{board.board.b_wdate}}</h3>
          <v-divider dark></v-divider>
          <div class="content-field">
            <h3>{{board.board.b_content}}</h3>
          </div>
          <div style="text-align:center;">
            <div style="text-align:right;">
              <h3>Views : {{board.board.b_views}} &nbsp;&nbsp;&nbsp; Likes : {{board.board.b_like}}</h3>
            </div>
            <v-divider></v-divider>
            <v-layout wrap>
              <v-flex xs1 text-xs-left>
                <h2>Comments</h2>
              </v-flex>

              <v-flex xs12 v-for="comment in board.comments">
                <CommentCard :comment="comment"/>
              </v-flex>
            </v-layout>
            <v-layout wrap justify-center>
              <v-flex xs9>
                <v-textarea style="border:1px solid black;" solo rows="4" no-resize flat light label="내용을 입력해주세요." v-model='comment'></v-textarea>
              </v-flex>
              <v-btn @click="writeComment">댓글 달기</v-btn>
            </v-layout>

            <v-btn class="v-btn theme--dark" @click="goBoardList">목록</v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-img>
  </v-flex>
  <Loading :isLoading="isLoading" />
</v-layout>
</template>

<script>
import Loading from '@/components/Loading';
import CommentCard from '@/components/CommentCard';
import Time from '@/services/Time'
export default {
  name: 'BoardDetailPage',
  data() {
    return {
      board: null,
      comment: null,
      isLoading: false,
    }
  },
  components: {
    Loading,
    CommentCard,
    Time
  },
  created() {
    this.isLoading = true;

    this.getBoard();
  },
  computed:{
    form(){
      return {
        c_bnumber: this.$route.params.id * 1,
        c_content: this.comment,
        c_writer: this.$store.state.user.u_mail,
        c_wdate: Time.getFullDate(),
        headers: {
          'Access-Control-Allow-Origin': '*',
          'dataType': "jsonp"
        }
      }
    }
  },
  methods: {
    goBoardList() {
      this.$router.go(-1);
    },

    chechValid(){

    },
    getBoard(){
      var config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'dataType': "jsonp"
        }
      };

      this.axios.get("http://168.188.125.194:8080/getBoardDetailByBoardNum?b_number=" + this.$route.params.id, config)
        // this.axios.post("http://ec2-52-79-126-1.ap-northeast-2.compute.amazonaws.com:8080/insertBoard", config)
        .then((response) => {
          // console.log(response.data);
          this.board = response.data;
          this.isLoading = false;
        })
        .catch((error) => {
          console.log(error)
        })
    },

    writeComment(){
      console.log(this.form)
      this.axios.post("http://168.188.125.194:8080/insertComment", this.form)
        // this.axios.post("http://ec2-52-79-126-1.ap-northeast-2.compute.amazonaws.com:8080/insertBoard", config)
        .then((response) => {
          // console.log(response.data)

          this.getBoard();

        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style media="screen">
.content-field {
  min-height: 500px;
}
</style>
