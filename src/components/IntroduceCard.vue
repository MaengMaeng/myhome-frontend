<template>
<v-layout ma-5>
  <v-flex>
    <v-card>
      <v-img :src="imgSrc" height="400px">
        <v-container fill-height row>
          <v-layout justify-end align-end>
            <strong class="display-1 font-weight-regular mr-4">{{name}}</strong>
          </v-layout>
        </v-container>
      </v-img>

      <v-card-text>
        <v-timeline
       align-top
       dense
     >
       <v-timeline-item v-for="i in timeline" xs12
         color="pink"
       >
        <v-container fill-height column>
          <v-layout>
            <v-flex>
              <strong>{{i.date}}</strong>
            </v-flex>
            <v-flex>
              <strong>{{i.title}}</strong>
              <div class="caption">{{i.desc}}</div>
            </v-flex>
          </v-layout>
        </v-container>

       </v-timeline-item>
     </v-timeline>
      </v-card-text>
    </v-card>
  </v-flex>
</v-layout>
</template>

<script>
export default {
  name:'IntroduceCard',
  data() {
    return {

    }
  },
  props: {
    imgSrc: {
      type: String,
      default: require('../assets/home-img/1.jpg')
    },
    name: {
      type: String,
      default: "이름"
    },
    timeline:{
        type: Array
    }
  }
}
</script>
