

<template>
  <h3 class="text-lg truncate uppercase tracking-wider text-red-900">
    <Slider />
    <VideoCard />
  </h3>
</template>
<script >
import Slider from "../components/Slider.vue";
import VideoCard from "../components/VideoCard.vue";
export default {
  name: "home",
  components: { Slider, VideoCard },
  data() {
    return {};
  },
};
</script>
<style scoped>
</style>
