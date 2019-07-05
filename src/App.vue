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
import Home from './views/Home'
import Header from './components/Header'
import Footer from './components/Footer'

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
