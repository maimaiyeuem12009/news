<template>
  <div class="login">
    <h2>Login</h2>
    <form class="" @submit.prevent="handleSubmit">
      <BaseInput label="Username" v-model="username"
                 type="text" ></BaseInput>
      <BaseInput label="Password" v-model="password"
                 type="password" ></BaseInput>
      <div class="sumbit-group">
        <button class="btn" :disabled="status.loggingIn">Login</button>
        <img v-show="status.loggingIn" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
        <router-link to="/register" class="btn">Register</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import BaseInput from "../components/BaseInput";

export default {
  components: {BaseInput},
  data () {
    return {
      username: '',
      password: '',
      submitted: false
    }
  },
  computed: {
    ...mapState('account', ['status'])
  },
  created () {
    // reset login status
    this.logout();
  },
  methods: {
    ...mapActions('account', ['login', 'logout']),
    handleSubmit (e) {
      this.submitted = true;
      const { username, password } = this;
      if (username && password) {
        this.login({ username, password })
      }
    }
  }
};
</script>
<style scoped lang="scss">
.login{
  width: 500px;
  margin: 100px auto auto auto;

  h2{
    text-align: center;
    font-size: 50px;
    text-transform: capitalize;
    font-weight: 300;
    margin-bottom: 50px;
  }
  .sumbit-group {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    .btn {
      border: none;
      font-size: 40px;
      background-color: white;
      padding-bottom: 10px;

      &:after {
        display: block;
        margin-top: 5px;
        content: "";
        width: 0%;
        height: 10px;
        background-color: black;
        transition: width 0.35s ease-in;
      }

      &:hover:after {
        width: 100%;
      }
    }
  }
}


</style>
