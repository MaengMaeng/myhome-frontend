<template>
<v-layout wrap align-center justify-center row fill-height>
  <v-flex xs12 ma-5 text-xs-left>
    <fieldset>
      <legend>TITLE</legend>
      <div style="margin:0px 16px">
        <v-text-field xs12 label="제목을 입력해 주세요." v-model='title'></v-text-field>
      </div>
    </fieldset>
    <fieldset style="min-height:500px;">
      <legend>CONTENT</legend>
      <div style="margin:16px; min-height:500px">
        <v-flex xs12>
          <v-textarea solo rows="24" auto-grow flat light label="내용을 입력해주세요." v-model='content'></v-textarea>
        </v-flex>
      </div>
    </fieldset>
    <v-layout wrap>
      <v-flex xs9>
        <fieldset style="margin-left:4px; height:100%">
          <legend>Files</legend>
          <div style="margin:0px 16px">
            <v-text-field xs12 label="파일을 선택해 주세요."></v-text-field>
          </div>
        </fieldset>
      </v-flex>

      <v-flex xs3 wrap>
        <fieldset style="margin-left:4px; height:100%">
          <legend>Category</legend>
          <div style="margin:16px;">
            <v-radio-group v-model="category">
              <v-radio label="gong" color="primary" value="true"></v-radio>
              <v-radio label="normal" color="error" value="false"></v-radio>
            </v-radio-group>
          </div>
        </fieldset>
      </v-flex>
    </v-layout>


    <div style="text-align:center;" id="write-btn">
      <v-btn class="v-btn theme--dark" @click="insertBoard">확인</v-btn>
      <v-btn class="v-btn theme--dark" @click="goBoardList">취소</v-btn>
    </div>
    <Loading :isLoading="isLoading" />
  </v-flex>
</v-layout>
</template>

<script>
import Loading from '@/components/Loading';

export default {
  name: 'BoardWritePage',
  data() {
    return {
      title: "",
      content: "",
      category: "true",
      isLoading: false,
    }
  },
  components: {
    Loading
  },
  methods: {
    insertBoard(){
      this.isLoading = true;

      var config = {
        b_category:(this.category == "true") ? 0 : 1,
        b_content:this.content,
        b_title:this.title,
        b_writer:this.$store.state.user.u_mail,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'dataType':"jsonp"
        }
      };

      // this.axios.post("http://168.188.125.194:8080/insertBoard", config)
      this.axios.post("http://ec2-52-79-126-1.ap-northeast-2.compute.amazonaws.com:8080/insertBoard", config)
        .then((response) => {
          this.isLoading = false;

          alert("작성되었습니다.")

          console.log(response.data)
          this.goBoardList();

        })
        .catch((error) => {
          console.log(error)
        })
    },
    goBoardList(){
      this.$router.push("boardlist")
    }
  }
}
</script>

<style media="screen">

</style>
