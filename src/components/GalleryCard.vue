<template>
<v-layout @click="imgur" py-4 h-100 mx-4 mt-4>
  <v-flex>
    <v-card>
      <v-img :src="imgSrc" height="400px">
      </v-img>

      <v-card-title>
        <div>
          <div class="headline">
            {{title}}
          </div>
          <div class="grey--text">
            {{writer}}
          </div>
        </div>
      </v-card-title>
    </v-card>
  </v-flex>
</v-layout>
</template>

<script>
export default {
  name: 'GalleryCard',
  data() {
    return {

    }
  },
  props: {
    imgSrc: {
      type: String,
      default: require('../assets/home-img/1.jpg')
    },
    title: {
      type: String,
      default: "title"
    },
    writer: {
      type: String,
      default: "writer"
    }
  },
  methods:{
    imgur(){
      var file = this.dataURLtoFile('../assets/home-img', '1.jpg');
      if(file != ''){
        var xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.open('POST', 'https://api.imgur.com/3/image/', false);
        xmlHttpRequest.setRequestHeader("Authorization", "Client-ID f2f5b063505622d");
        xmlHttpRequest.onreadystatechange = (function() {
          if (xmlHttpRequest.readyState == 4) {
            if (xmlHttpRequest.status == 200) {
              var result = JSON.parse(xmlHttpRequest.responseText);
              alert(result["data"]["link"])
            } else {
              alert(xmlHttpRequest.responseText); 
            }
          }
        }).bind(this);
        xmlHttpRequest.send(file);
      }
    },
    dataURLtoFile(dataurl, filename) {
      var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
      while(n--){
          u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, {type:mime});
    }
  }
}
</script>
