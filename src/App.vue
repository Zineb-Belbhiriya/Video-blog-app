<template>
  <div class="app">
    <div class="app">
      <Header />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import Home from "./pages/Home.vue";
import Dashboard from "./pages/Dashboard.vue";
import Header from "./layout/Header.vue";
import Footer from "./layout/Footer.vue";
import AllVideo from "./pages/AllVideo.vue";
export default {
  name: "app",
  components: { Home, Header, Dashboard, Footer },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<style>
</style>
