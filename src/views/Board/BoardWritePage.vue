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
          <Editor ref="editor"/>
        </v-flex>
      </div>
    </fieldset>
    <v-layout wrap>
      <v-flex xs9>
        <fieldset style="margin-left:4px; height:100%">
          <legend>Files</legend>
          <div style="margin:0px 16px">
            <ImageLoader ref="il" />
          </div>
        </fieldset>
      </v-flex>

      <v-flex xs3 wrap>
        <fieldset style="margin-left:4px; height:100%">
          <legend>Category</legend>
          <div style="margin:16px;">
            <v-radio-group v-model="category">
              <v-radio label="일반" color="primary" value="1"></v-radio>
              <v-radio label="공지" color="error" value="0"></v-radio>
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
import Time from '@/services/Time';
import Loading from '@/components/common/Loading';
import ImageLoader from '@/components/common/ImageLoader';
import Editor from '@/components/common/EditorForWrite'

export default {
  name: 'BoardWritePage',
  components: {
    Loading,
    ImageLoader,
    Time,
    Editor
  },
  data() {
    return {
      title: "",
      category: "1",
      isLoading: false,
    }
  },
  created(){
    if(!this.$session.has("user")){
      alert("로그인 해주세요.");
      this.$router.go(-1);
    }
  },
  watch:{
      category(v){
        console.log(v);
      }
  },
  methods: {
    async insertBoard() {
      if(this.title == ""){
        alert("제목을 입력해 주세요.");
        return;
      }
      this.isLoading = true;
      var config = {
        b_category: this.category,
        b_content: this.$refs.editor.getContent(),
        b_title: this.title,
        b_writer: this.$session.get("user").u_mail,
        b_wdate:Time.getFullDate(),
        attachments: [await this.$refs.il.getImageUrl()],
        headers: {
          'Access-Control-Allow-Origin': '*',
          'dataType': "jsonp"
        }
      };
      console.log(config.attachments);

      this.axios.post(this.$store.state.server_ip + "/insertBoard", config)
        .then((response) => {
          this.isLoading = false;

          alert("작성되었습니다.")

          var user = this.$session.get("user");
          user.u_boards++;
          this.$session.set("user", user);
          
          this.goBoardList();
        })
        .catch((error) => {
          console.log(error)
          alert("글을 확인해 주세요.")
          this.isLoading = false;
        })
    },
    goBoardList() {
      this.$router.go(-1);
    }
  }
}
</script>

<style media="screen">

</style>
