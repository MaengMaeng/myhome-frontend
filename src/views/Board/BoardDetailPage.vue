<template>
<v-layout wrap align-center justify-center row fill-height>
  <!-- <v-flex xs12 text-xs-left> -->
    <SelectModal v-if="showModal===true" v-on:close="showModal=false;" v-on:submit="deleteBoard()"/>
    <v-flex v-if="board" pa-5 ma-5 white xs12>
      <h1><span class="number" v-if="board.board.b_category == 0">공지</span>&nbsp;{{board.board.b_title}}</h1>
      <div style="text-align:right;color:grey;">
        <span>작성자 : {{board.board.b_writer}}</span>
        &nbsp;
        &nbsp;
        <span>{{board.board.b_wdate}}</span>
      </div>
      <div style="width:100%; border-bottom: 1px dashed grey;"></div>
      <v-divider dark></v-divider>
      <div class="myboard-only">
        <v-img @click="modifyBoard" :src='require("@/assets/common-img/modify.jpg")' style="width:20px; height:20px; display:inline-block; margin:8px;"/>
        <v-img @click="doShowModal" :src='require("@/assets/common-img/delete.jpg")' style="width:20px; height:20px; display:inline-block; margin:8px;"/>
      </div>
      <div class="content-field">
        <Editor :content="board.board.b_content"/>
        <div>
         <v-img style="width:500px" v-if="attachment != null" :src="attachment.a_file"></v-img>
        </div>
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
        <v-layout wrap row ma-2 align-left class="comment-write">
          <v-flex xs9 class="comment-content-text">
            <v-textarea counter solo auto-grow clearable flat label="내용을 입력해주세요." v-model='comment'></v-textarea>
          </v-flex>
            <v-layout id="btn-write-comment" align-center style="margin-left:4px;">
              <v-btn @click="writeComment" color="white" flat style="background:#aaa; width:100%; height:100%; margin:0px; border-radius:10px !important;">
                <span style="font-weight:bold; font-size:20px;">댓글쓰기</span>
              </v-btn>
            </v-layout>
        </v-layout>

        <v-btn class="v-btn theme--dark" @click="goBoardList">목록</v-btn>
      </div>
    </v-flex>
  <Loading :isLoading="isLoading" />
</v-layout>
</template>
<script>
import Loading from '@/components/common/Loading';
import CommentCard from '@/components/CommentCard';
import Time from '@/services/Time';
import Editor from '@/components/common/EditorForRead';
import SelectModal from '@/components/SelectModal';

export default {
  name: 'BoardDetailPage',
  data() {
    return {
      board: null,
      attachment:null,
      comment: null,
      isLoading: false,
      showModal:false
    }
  },
  components: {
    Loading,
    CommentCard,
    Time,
    Editor,
    SelectModal
  },
  created() {
    this.isLoading = true;
    this.getAttachment();
    this.getBoard();
  },
  computed:{
    form(){
      return {
        c_bnumber: this.$route.params.id * 1,
        c_content: this.comment,
        c_writer: this.$session.get("user").u_mail,
        c_wdate: Time.getFullDate(),
        headers: {
          'Access-Control-Allow-Origin': '*',
          'dataType': "jsonp"
        }
      }
    },
    deleteForm(){
      return {
        b_number:this.$route.params.id * 1,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'dataType': "jsonp"
        }
      }
    }
  },
  methods: {
    goBoardList() {
      this.$router.push('/boardlist');
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
      this.axios.get(this.$store.state.server_ip + "/getBoardDetailByBoardNum?b_number=" + this.$route.params.id, config)
        // this.axios.post("http://ec2-52-79-126-1.ap-northeast-2.compute.amazonaws.com:8080/insertBoard", config)
        .then((response) => {
          // console.log(response.data);
          this.board = response.data;
          this.isLoading = false;

          console.log(this.board)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getAttachment(){
      var config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'dataType': "jsonp"
        }
      };

      this.axios.get(this.$store.state.server_ip + "/getAttachmentListByBoardNum?b_number=" + this.$route.params.id, config)
        .then((response) => {
          this.attachment = response.data[0]; //일단 하나
          this.isLoading = false;
          console.log(this.attachment);
        })
        .catch((error) => {
          console.log(error)
        })
    },

    writeComment(){
      if(this.$session.has("user")){
        var form = this.form;
        console.log(form);

        if(form.c_content != "" && form.c_content != null){
          this.axios.post(this.$store.state.server_ip + "/insertComment", form)
          .then((response) => {
            if(response.data != ""){
              var user = this.$session.get("user");
              user.u_comments++;
              this.$session.set("user", user);

              this.getBoard();
            }
          })
          .catch((error) => {
            console.log(error)
          })
        }
        else{
          alert("코멘트를 입력해 주세요.")
        }
      }
      else{
        alert("로그인 해주세요.")
      }
    },

    modifyBoard(){
      console.log('hello');
    },

    doShowModal(){
      this.showModal = true;
    },
    deleteBoard(){
      var form = this.deleteForm;
      console.log(form);
      this.axios.post(this.$store.state.server_ip + "/deleteBoardByNum", form)
        .then((response) => {
          console.log(this.code);
        })
        .catch((error) => {
          console.log(error);
        })
      // location.href = '/boardlist';
    }
  }
}

</script>

<style media="screen">
.comment{
  margin: 10px;
  padding: 5px;
  border-radius: 15px;
  background: rgba(0,0,0,0.1);
}

.comment-write{
  margin: 10px;
  padding: 5px;
  border-radius: 15px;
  background: rgba(0,0,0,0.5);
}

.content-field {
  min-height: 500px;
}

.number{
  color:white;
  font-weight:900;
  border-radius:10px;
  border:rgb(82, 245, 166) 1px solid;
  background:rgb(82, 245, 166);
  padding:5px;
}

div.v-input__slot{
  background: rgba(0,0,0,0) !important;
}

.myboard-only{
  text-align: right;
}
.myboard-only-image{
  width:20px;
  height:20px;
  display:inline-block;
}

</style>
