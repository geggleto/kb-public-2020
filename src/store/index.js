import Vue from 'vue'
import Vuex from 'vuex'
import Bus from '../infrastructure/bus';
import axios from 'axios';

axios.defaults.withCredentials = true

const API_BASE = process.env.API_BASE || 'http://localhost:8081';

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    API_BASE,
    account: null,
    bp: null,
    suits: [
    ],
    skillRegistry: [
      {
        id: 1,
        name: 'Smack',
        type: 'physical',
        multiplier: 1,
        cooldown: 50
      },
      {
        id: 2,
        name: 'Catball',
        type: 'magic',
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
    ],
    dojo: {
      '1' : null,
      '2' : null,
      '3' : null,
    }
  },
  getters: {
    dojo: state => state.dojo,
    apiBase: state => state.API_BASE,
    bp: state => state.bp,
    suits: state => state.suits,
    isIdInSuits: state => (id) => {
      for(let b of state.suits) {
        if (b.id === id) {
          return true;
        }
      }
      return false;
    },
    getSuit: state => (id) => {
      let result = state.suits.filter( (t) => { return id === ""+t.id });

      if (result.length > 0) {
        return result.pop();
      }

      return null;
    },
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
      Bus.dispatch('KittyRecruited', {id:id});
      state.suits.push({
        id : id,
        item_hat : null,
        item_armor: null,
        item_weapon: null,
        skill1: 1,
        skill2: 2,
        skill3: 3
      })

      writeState(state);
    },
    setDojoKitty(state, params) {
      state.dojo[params.position] = params.suit;
    },
    setSuits(state, suits) {
      if (suits) {
        for (let s of suits) {
          state.suits.push(s);
        }
      }
    },
    setBp(state, bp) {
      state.bp = parseInt(bp);
    }
  },
  actions: {
    getKittiesFromCk({state}, params) {
      let offset = params.offset || 0;
      return axios.get(`${API_BASE}/kitties/${state.account}&offset=${offset}`);
    }
  },
  modules: {
  },
  plugins: [ /*vuexLocal.plugin */]
});

Bus.addListener('SelectedAccount', async (evt) => {
  store.commit('setAccount', evt.account);

  axios.post(`${API_BASE}/identity/${evt.account}`).then( (resp) => {
    return axios.get(`${API_BASE}/identity`).then(resp => resp.data);
  }).then((me) => {
    store.commit('setBp', me.payload.bp);
    store.commit('setSuits', me.payload.suits);
  }).catch((err) => console.error(err));
});

function writeState(state) {
  axios.put(`${API_BASE}/data`, {
    bp: state.bp,
    suits: state.suits
  });
}

export default store;