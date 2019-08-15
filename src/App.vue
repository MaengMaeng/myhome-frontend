<template>
  <div>
    <Header/>
    <v-app>
      <v-content>
        <router-view/>
      </v-content>
    </v-app>
    <Footer/>
  </div>
</template>

<script>
import Home from '@/views/Home/Home'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'

export default {
  name: 'App',
  components: {
    Home,
    Header,
    Footer
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style media="screen">

</style>
