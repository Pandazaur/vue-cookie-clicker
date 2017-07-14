<template>
  <div class="content">
    <div class="head">
      <h1>Welcome to Vue Cookie Clicker</h1>
      <span class="subtitle">a cookie clicker clone developped with Vue.js and Vuex</span>
      <div class="action">
        <router-link to="/game">
          <button class="btn btn-main">Let's get some cookies !</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
    export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .content {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: space-around;
      //height: calc(100% - 20px);
      height: 100%;
      text-align: center;
    }

    .subtitle {
      color: #193441;
    }

    .action {
      padding: 50px 0px;
    }
</style>
