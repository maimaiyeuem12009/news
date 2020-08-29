<template>
  <div class="jumbotron">
    <div class="container">
      <div class="row">
        Hello
        <div v-if="alert.message"></div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapState({
      alert: state => state.alert
    })
  },
  methods: {
    ...mapActions({
      clearAlert : 'alert/clear'
    })
  },
  watch: {
    $route (to,from){
      this.clearAlert()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
