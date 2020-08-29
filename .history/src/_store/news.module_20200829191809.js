import {newsService} from "../_service";

const state = {
  headline : {}
}

const actions = {
  getHeadline({commit},country){
    commit('getHeadlineRequest')

    newsService.getHeadline(country).then(

      /article => commit('getHeadlineSuccess',article),
      error => commit('getHeadlineFailure',error)*/
    )
  }
}

const mutations = {
  getHeadlineRequest(state){
    state.headline = {loading : true}
  },
  getHeadlineSuccess(state, news){
    state.headline = {articles : news}
  },
  getHeadlineFailure(state, error){
    state.headline = {error}
  }
}


export const news = {
  namespaced: true,
  state,
  actions,
  mutations
}

