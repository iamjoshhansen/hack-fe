<template>
  <div id="app">
    <header>
      <span>Home Automation Control Kernel</span>
      <iconSocket v-if="connectedSocket" :connected="true" />
      <iconWifi v-else="connectedSocket" :connected="connectedWifi" />
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import socket from './socket';
import iconSocket from './icons/socket';
import iconWifi from './icons/wifi';

export default {
  name: 'app',
  components: {
    iconSocket,
    iconWifi,
  },
  data() {
    return {
      connectedSocket: false,
      connectedWifi: false,
    };
  },
  mounted() {
    socket
      .on('connect', () => {
        this.connectedSocket = true;
      })
      .on('disconnect', () => {
        this.connectedSocket = false;
      });
  },
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  margin: 20px;
}

header {
  margin: 0;
  padding: 0 16px 0 24px;
  background-color: #101010;
  color: #eee;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

header span {
  display: block;
  text-align: center;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding: 16px 0;
}
</style>
