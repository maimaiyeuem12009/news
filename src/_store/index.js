import Vue from 'vue';
import Vuex from 'vuex'

import {alert} from "./alert.module";
import {users} from "./users.module";
import {account} from "./account.module";
import {news} from "./news.module";

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    alert,
    account,
    users,
    news
  }
})
