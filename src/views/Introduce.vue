<template>
  <v-container>
    <v-layout wrap>
      <v-flex v-for="p in people" xs12 md6>
        <IntroduceCard :imgSrc="p.imgSrc" :name="p.name" :timeline="p.timeline"></IntroduceCard>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import IntroduceCard from '../components/IntroduceCard'

export default {
  name: 'Introduce',
  components:{
    IntroduceCard
  },
  data(){
    return{
      people:[
        {
          imgSrc:'https://avatars2.githubusercontent.com/u/30872599?s=460&v=4',
          name:"이상인",
          timeline:[
            {
              date:"2019-01",
              title:"우리의 시작",
              desc:"시작"
            },
            {
              date:"2019-02",
              title:"우리의 중간",
              desc:"중간"
            },
            {
              date:"2019-03",
              title:"우리의 마지막",
              desc:"마지막"
            }
          ]
        },
        {
          imgSrc:'https://avatars3.githubusercontent.com/u/31842031?s=460&v=4',
          name:"남궁명",
          timeline:[
            {
              date:"2019-01",
              title:"우리의 시작",
              desc:"시작"
            },
            {
              date:"2019-02",
              title:"우리의 중간",
              desc:"중간"
            },
            {
              date:"2019-03",
              title:"우리의 마지막",
              desc:"마지막"
            }
          ]
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<style media="screen">
#myhomeimg {
  padding: 30px;
}

.minititle {
  font-size: 20px;
  font-family: fatasy;
  font-weight: bold;
}

.content {
  font-size: 15px;
  font-family: fatasy;
  text-align: center;
}

.introduce_detail {
  width: 70%;
  display: inline-block;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  vertical-align: top;
  height: 512px;
}

.atom_container {
  border: 1px solid #999;
  margin: 10px;
  padding: 10px;
  border-radius: 15px;
}
</style>
