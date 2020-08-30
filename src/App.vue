<template>
  <div class="jumbotron">
    <div class="container">
      <Loading/>
      <div class="row">
        <div v-if="alert.message"></div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import Loading from "./components/Loading";

export default {
  name: 'App',
  components: {Loading},
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

<style lang="scss">
  @import "~@/css/main.scss";
  *{
    padding: 0;
    margin: 0;
  }
  .row{
    padding: 0 30px 0 30px;
    font-family: "MoMA";
    font-weight: 100;
  }
#app {
  font-family: "MoMA";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
