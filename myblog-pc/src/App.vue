<template>
  <div id="app">
    <div class="container">
      <common-header/>
      <router-view/>
    </div>
      
  </div>
</template>

<script>
import CommonHeader from './components/CommonHeader.vue';
export default {
    components:{
      CommonHeader
    }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

/* css reset */
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
ul,
ol {
  list-style: none;
}

/* 能用样式 */
.container {
  width: 1200px;
  margin: 0 auto;

}
header {
  height: 50px;
  background: #cccccc;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
