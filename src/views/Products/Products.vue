<template>
<v-container id="app" fluid grid-list-md>
  <v-layout row wrap>
    <v-flex d-flex xs12 sm6 md4  @mouseover="movemove()" @mouseleave="upHere = false">
      <v-card color="purple" dark>
        <v-card-title primary class="title">모아라얍 !</v-card-title>
        <v-card-text>
          모바일 프로그래밍 수업에서 열심히 만든 종이쿠폰 대체 애플리케이션<br>
          텀프 이후 사장됨.
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex d-flex xs12 sm6 md3>
      <v-layout row wrap>
        <v-flex d-flex>
          <v-card color="indigo" dark>
            <v-card-text>{{ lorem.slice(0, 70) }}</v-card-text>
          </v-card>
        </v-flex>
        <v-flex d-flex>
          <v-layout row wrap>
            <v-flex v-for="n in 2" :key="n" d-flex xs12>
              <v-card color="red lighten-2" dark>
                <v-card-text>{{ lorem.slice(0, 40) }}</v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex d-flex xs12 sm6 md2 child-flex>
      <v-card color="green lighten-2" dark>
        <v-card-text>{{ lorem.slice(0, 90) }}</v-card-text>
      </v-card>
    </v-flex>
    <v-flex d-flex xs12 sm6 md3>
      <v-card color="blue lighten-2" dark>
        <v-card-text>{{ lorem.slice(0, 100) }}</v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
  <h3>Hover us.</h3>
  <main>
    <app-child>
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/cartoonvideo2.jpg" />
    </app-child>
  <app-child>
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/cartoonvideo13.jpg" />
  </app-child>
  <app-child>
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/cartoonvideo14.jpeg" />
  </app-child>
  <app-child>
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/cartoonvideo5.jpg" />
  </app-child>
  </main>
</v-container>

  


<!-- <v-container fluid grid-list-md>
    <v-layout align-center justify-center wrap column>
      <v-flex xs12 ma-5 grey fill-height>
        <v-card blue fill-height>
          <v-card-title>a</v-card-title>
          <v-divider></v-divider>
          <v-card-text>b</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container> -->
  
</template>

<script>
export default {
  name: 'Products',
  data() {
    return {
      isShowing: false,
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`,
      temp: ""
    }
  },
  components: {
    appChild: Child
  },
  methods: {
    getTemp() {
      var config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'dataType':"jsonp"
        }
      };

      this.axios.get("http://ec2-52-79-126-1.ap-northeast-2.compute.amazonaws.com:8080/getPlan?p_number=1", config)
        .then((response) => {
          this.temp = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    movemove(){

    }
  },
  created() {
    this.getTemp()
  }
}
const Child = {
  template: '#childarea',
  props: ['isShowing'],
  methods: {
    toggleShow() {
      this.isShowing = !this.isShowing;
    }
  }
};

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



button {
  font-family: 'Bitter';
  background: #c62735;
  color: white;
  border: 0;
  padding: 5px 15px;
  margin: 0 10px;
  border-radius: 4px;
  outline: 0;
  cursor: pointer;
}

.img-contain {
  width: 250px;
  height: 160px;
  overflow: hidden;
}

img {
  width: 100%;
  transform-origin: 50% 50%;
  cursor: pointer;
  transform: scaleY(1) translateZ(0);
  margin: 5px;
}

main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.img-contain:hover .overlay {
  opacity: 1;
  background: hsla(50, 0%, 0%, 0.6);
  transition: 0.3s opacity ease-out;
}

.img-contain .overlay {
  position: absolute;
  z-index: 1000;
  display: block;
  width: 245px;
  height: 155px;
  margin: 5px;
  opacity: 0;
  overflow: hidden;
  transition: 0.3s opacity ease-in;
}

.overlay-text {
  margin-top: 40px;
}

h4 {
  margin: 0 0 15px;
}

.flip-enter-active {
  transition: all .2s cubic-bezier(0.55, 0.085, 0.68, 0.53); 
}

.flip-leave-active {
  transition: all .25s cubic-bezier(0.25, 0.46, 0.45, 0.94); 
}

.flip-enter, .flip-leave-to {
  transform: scaleY(0) translateZ(0);
  opacity: 0;
}
</style>
