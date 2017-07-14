import Vue from 'vue'
import Vuex from 'vuex'

import producers from '@/assets/js/producers'

Vue.use(Vuex)

const state = {
    producers: producers,
    cookies: 100000000000000
}

const mutations = {
    BUY_PRODUCER (state, { producerId }) {
        state.producers = state.producers.map(producer => {
            if (producer.id === producerId) {
                producer.purchased++
                state.cookies -= producer.price
                producer.price = 1.12 * producer.price
            }

            return producer
        })
    },
    CLICK_COOKIE (state) {
        state.cookies++
    },
    ADD_COOKIES (state, { cookies }) {
        state.cookies += cookies
    }
}

const actions = {}

const store = new Vuex.Store({
    state,
    mutations,
    actions
})

export default store