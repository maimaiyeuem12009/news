const state = {
  type : null,
  message : null
}

const actions = {
  success({commit}, message){
    commit()
  }
}

const mutations = {
  success(state, message){
    state.type = 'alert-success';
    state.message = message
  },
  error(state, message){
    state.type = 'alert-error';
    state.message = message
  },
  clear(state){
    state.type = null
    state.message = null
  }

}

export const account = {
  namespaced: true,
  state,
  actions,
  mutations
}
