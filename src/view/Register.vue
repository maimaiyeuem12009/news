<template>
  <div class="register">
    <h2>Register</h2>
    <form @submit.prevent="handleSubmit">
      <BaseInput label="FirstName" v-model="user.firstName"
                 type="text" @blur="$v.user.firstName.$touch()"></BaseInput>
      <BaseInput label="LastName" v-model="user.lastName"
                 type="text" @blur="$v.user.lastName.$touch()"></BaseInput>
      <BaseInput label="Username" v-model="user.username"
                 type="text" @blur="$v.user.username.$touch()"></BaseInput>
      <BaseInput label="Password" v-model="user.password"
                 type="password" @blur="$v.user.password.$touch()"></BaseInput>
      <BaseSelect label="Pick a Topic" v-model="user.topic"
                  :options="topics" @blur="$v.user.topic.$touch()"></BaseSelect>
      <p v-if="submitted && $v.$anyError" class="errorMessage">Please fill out the required field(s).</p>
      <p v-if="submitted && !$v.user.password.minLength">Password have to be at least 6 letters long</p>
      <div class="sumbit-group">
        <button class="btn" :disabled="status.registering">Register</button>
        <img v-show="status.registering" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
        <router-link to="/login" class="btn">Cancel</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import {required, minLength } from 'vuelidate/lib/validators'
import BaseInput from "../components/BaseInput";
import BaseSelect from "../components/BaseSelect";

export default {
  components: {BaseSelect, BaseInput},
  data () {
    return {
      user: {
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        topic:'',
      },
      submitted: false,
      topics : ["bitcoin", "apple", "earthquake", "animal"],

    }
  },
  validations: {
    user: {
      firstName: {required},
      lastName: {required},
      username: {required},
      topic: {required},
      password: {required,minLength: minLength(6)}
    }
  },
  computed: {
    ...mapState('account', ['status'])
  },
  methods: {
    ...mapActions('account', ['register']),
    handleSubmit(e) {
      this.submitted = true;
      if (!this.$v.$invalid){
          this.register(this.user);
      }
    }
  }
};
</script>
<style lang="scss">
.register{
  width: 500px;
  margin: 100px auto auto auto;

  h2{
    text-align: center;
    font-size: 50px;
    text-transform: capitalize;
    font-weight: 300;
    margin-bottom: 50px;
  }
  .sumbit-group{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    .btn{
      border: none;
      font-size: 40px;
      background-color: white;
      padding-bottom: 10px;

      &:after{
        display: block;
        margin-top: 5px;
        content: "";
        width: 0%;
        height: 10px;
        background-color: black;
        transition: width 0.35s ease-in;
      }

      &:hover:after{
        width: 100%;
      }
    }
  }

}

</style>
