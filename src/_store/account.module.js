import { userService} from "../_service";
import {router} from "../router";

const user = JSON.parse(localStorage.getItem('user'));
const state = user
  ? { status: { loggedIn: true}, user}
  : { status: {}, user: null};

const actions = {
  login({dispatch, commit}, {username,password}) {
    commit('loginRequest')

    userService.login(username, password)
      .then(
        user => {
          commit('loginSuccess', user);
          router.push("/")
        },
        error => {
          commit('loginFailure',error);
          dispatch('alert/error',error,{root: true})
        }
      )
  },
  logout({commit}){
    userService.logout()
    commit('logout')
  },
  register({dispatch, commit}, user){
    commit('registerRequest', user);

    userService.register(user)
      .then(
        user => {
          commit('registerSuccess',user)
          router.push('/login'),
          setTimeout(() => {
            dispatch('alert/success','Registration successful',{root: true})
          })
        },
        error => {
          commit('registerFailure', error);
          dispatch('alert/error',error,{root: true})
        }
      )

  }
}

const mutations = {
  loginRequest(state,user){
    state.status = {logging: true}
    state.user = user
  },
  loginSuccess(state, user){
    state.status = {loggedIn: true}
  },
  loginFailure(state){
    state.status = {},
    state.user = null
  },
  logout(state){
    state.status = {},
    state.user = null
  },
  registerRequest(state,user){
    state.status = {registering: true}
  },
  registerSuccess(state, user){
    state.status = {}
  },
  registerFailure(state, user){
    state.status = {}
  }
}

export const account = {
  namespaced: true,
  state,
  actions,
  mutations
}
