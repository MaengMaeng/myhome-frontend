<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex d-flex xs12 sm6 md4>
        <v-card color="purple" dark>
          <v-card-title primary class="title">Lorem</v-card-title>
          <v-card-text>{{ lorem }}</v-card-text>
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
              <v-flex
                v-for="n in 2"
                :key="n"
                d-flex
                xs12
              >
                <v-card
                  color="red lighten-2"
                  dark
                >
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
    data(){
      return{
        lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
      }
    },
    components: {},
    methods: {}
  }

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

</style>
