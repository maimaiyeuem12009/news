<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-field">
        <label for="firstName">FirstName</label>
        <input type="text" name="firstName" v-model="user.firstName"  @blur="$v.user.firstName.$touch()">
      </div>
      <div class="form-field">
        <label for="lastName">LastName</label>
        <input type="text" name="lastName" v-model="user.lastName" @blur="$v.user.lastName.$touch()">
      </div>
      <div class="form-field">
        <label for="username">Username</label>
        <input type="text" name="username" v-model="user.username" @blur="$v.user.username.$touch()">
      </div>
      <div class="form-field">
        <label for="password">Password</label>
        <input type="password" name="password" v-model="user.password"  @blur="$v.user.password.$touch()">
      </div>
      <p v-if="submitted && $v.$anyError" class="errorMessage">Please fill out the required field(s).</p>
      <p v-if="submitted && !$v.user.password.minLength">Password have to be at least 6 letters long</p>
      <div class="form-group">
        <button class="btn btn-primary" :disabled="status.registering">Register</button>
        <img v-show="status.registering" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
        <router-link to="/login" class="btn btn-link">Cancel</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import {required, minLength } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      user: {
        firstName: '',
        lastName: '',
        username: '',
        password: ''
      },
      submitted: false
    }
  },
  validations: {
    user: {
      firstName: {required},
      lastName: {required},
      username: {required},
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
