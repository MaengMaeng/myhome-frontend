<template>
<v-content>
  <v-container fluid>
    <v-flex xs12 class="text-xs-center text-sm-center text-md-center text-lg-center">
      <img id="image" :src="img.imageUrl" height="150" v-if="img.imageUrl && !random" />
      <v-layout wrap>
        <v-text-field xs6 label="Selected Image" v-model='img.imageName' prepend-icon='attach_file'></v-text-field>
        <input type="file" style="display: none" ref="image" accept="image/*" @change="onFilePicked">
        <input id="url" type="text" style="display: none;">
        <v-btn v-if="random_picture" xs3 @click="onRandomPicked">Random Image</v-btn>
        <v-btn xs3 @click='pickFile'>Select Image</v-btn>
      </v-layout>
    </v-flex>
  </v-container>
</v-content>
</template>

<script>

export default {
  name: 'ImageUpload',
  components: {

  },
  data() {
    return {
      img: {
        title: "Image Upload",
        dialog: false,
        imageName: '',
        imageUrl: '',
        imageFile: ''
      },
      random:false,
      picture:false
    }
  },
  props:{
    random_picture:{
      type:Boolean, default:false
    },
    url:{
      type:String
    }
  },
  created(){

  },
  methods: {
    pickFile() {
      this.$refs.image.click()
    },

    onFilePicked(e) {
      const files = e.target.files
      if (files[0] !== undefined) {
        this.img.imageName = files[0].name
        if (this.img.imageName.lastIndexOf('.') <= 0) {
          return
        }
        const fr = new FileReader()
        fr.readAsDataURL(files[0])
        fr.addEventListener('load', () => {
          this.img.imageUrl = fr.result
          this.img.imageFile = files[0]
        })

        this.picture = true
        this.random = false
      } else {
        this.img.imageName = ''
        this.img.imageFile = ''
        this.img.imageUrl = ''
        this.picture = false
      }
    },

    onRandomPicked() {
      this.img.imageName = "Random Image"
      this.picture = true
      this.random = true
    },

    imgur() {
      var file = this.img.imageFile;
      if(file != ''){
        var xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.open('POST', 'https://api.imgur.com/3/image/', false);
        xmlHttpRequest.setRequestHeader("Authorization", "Client-ID f2f5b063505622d");
        xmlHttpRequest.onreadystatechange = (function() {
          if (xmlHttpRequest.readyState == 4) {
            if (xmlHttpRequest.status == 200) {
              var result = JSON.parse(xmlHttpRequest.responseText);
              this.img.imageUrl = result["data"]["link"]
            } else {
              console.log("upload failed");
            }
          }
        }).bind(this);
        xmlHttpRequest.send(file);
      }
    },

    getImageUrl(){
      this.imgur();
      return this.img.imageUrl
    },

    isRandom(){
      return {
        random:this.random,
        picture:this.picture
      }
    },

    setImage(url){
      this.img.imageName = url
      this.img.imageFile = ''
      this.img.imageUrl = url
      this.picture = true
    }
  }
}
</script>