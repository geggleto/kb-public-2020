import Vue from 'vue'
import Vuex from 'vuex'
import Bus from '../infrastructure/bus';
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

const API_BASE = process.env.API_BASE || 'http://localhost:8080';

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    account: null,
    bp: 100,
    suits: [
      {
        id : 66898,
        item_hat : null,
        item_armor: null,
        item_weapon: null,
        skill1: 1,
        skill2: 2,
        skill3: 3
      }
    ],
    skillRegistry: [
      {
        id: 1,
        name: 'Smack',
        type: 'non-magic-damage',
        multiplier: 1,
        cooldown: 50
      },
      {
        id: 2,
        name: 'Catball',
        type: 'magic-damage',
        multiplier: 1,
        cooldown: 50
      },
      {
        id: 3,
        name: 'Catnap',
        type: 'heal',
        multiplier: 1,
        cooldown: 100
      }
    ]
  },
  getters: {
    bp: state => state.bp,
    suits: state => state.suits,
    getSkill: state => (id) => {
      let result = state.skillRegistry.filter( (t) => { return id === t.id });

      if (result.length > 0) {
        return result.pop();
      }

      return null;
    }
  },
  mutations: {
    setAccount(state, account) {
      state.account = account;
    },
    addNewKitty(state, id) {
      state.suits.push({
        id : id,
        item_hat : null,
        item_armor: null,
        item_weapon: null,
        skill1: 1,
        skill2: 2,
        skill3: 3
      })
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
});

Bus.addListener('SelectedAccount', async (evt) => {
  store.commit('setAccount', evt.account);
});

export default store;