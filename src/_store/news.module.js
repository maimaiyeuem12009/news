import {newsService} from "../_service";


const state = {
  headline : {},
  topic : {}
}

const actions = {
  getHeadline({commit},country){
    commit('getHeadlineRequest')

    newsService.getHeadline(country).then(

      articles => {
        commit('getHeadlineSuccess',articles.filter(article => article.urlToImage));
      },
      error => commit('getHeadlineFailure',error)
    )
  },
  getTopic({commit},topic){
    commit('getTopicRequest')

    newsService.getNewByTopic(topic).then(

      articles => {
        commit('getTopicSuccess',articles.filter(article => article.urlToImage));
      },
      error => commit('getTopicFailure',error)
    )
  },

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
  },
  getTopicRequest(state){
    state.topic = {loading : true}
  },
  getTopicSuccess(state, news){
    console.log(news[0])
    state.topic = {articles : news}
  },
  getTopicFailure(state, error){
    state.topic = {error}
  }
}


export const news = {
  namespaced: true,
  state,
  actions,
  mutations
}

