<template>
  <div>
    <div>page2</div>
    <img src="../../assets/img/avatar.png" alt />
    <Module></Module>
    <!-- <img src="../../assets/img/avatar.png" alt /> -->
    <div class="bg"></div>
    <!-- <div class="bg2"></div> -->
  </div>
</template>

<script>
import Module from '../../components/Module.vue';
export default {
  data() {
    return {
      a: 'page2',
    };
  },
  components: {
    Module,
  },
  mounted() {
    console.log(this.a);
  },
};
</script>

<style>
img {
  width: 100px;
}
.bg {
  background: url('../../assets/img/avatar.png');
  width: 100px;
  height: 100px;
  background-size: cover;
}
/* .bg2 {
  background: url('../../assets/img/avatar.png');
  width: 100px;
  height: 100px;
  background-size: cover;
} */
</style>