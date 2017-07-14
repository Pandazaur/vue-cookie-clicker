<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
    import store from '@/vuex/store'

    export default {
      name: 'app',
      store,
      data () {
        return {
            delayMs: 1000
        }
      },
      computed: {
        producers: function () {
            return this.$store.state.producers
        }
      },
      mounted () {
          this.farmProducers()
      },
      methods: {
          farmProducers () {
            setInterval(() => {
                let cookieCount = 0

                for (let producer of this.producers) {
                    cookieCount += producer.cookiePerSeconds * producer.purchased
                }

                this.$store.commit('ADD_COOKIES', { cookies: cookieCount })

            }, this.delayMs)
          }
      }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Quicksand');
    @import url('https://fonts.googleapis.com/css?family=Oswald');

    #app {
        height: 100%;
        background: #fff;
        font-family: 'Quicksand', sans-serif;
        overflow: hidden;
    }

    h1 {
        font-size: 36px;
        font-weight: bold;
        line-height: 60px;
        color: #3e606f;
    }

    .btn-main {
        border: solid 3px #3e606f;
        background: transparent;
        color: #3e606f;
        padding: 15px 30px;
        font-size: 20px;
        border-radius: 9999px;
        transition: all .2s;
    }

    .btn-main:hover {
        background: #3e606f;
        color: white;
        padding: 15px 30px;
        font-size: 20px;
        border-radius: 9999px;
        cursor: pointer;
    }

    .scale-up {
        transform: scale(1.5);
    }
</style>
<style scoped>
  footer {
    background: #F0B67F;
    padding: 10px 5px;
    height: 20px;
  }
</style>

