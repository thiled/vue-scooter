<template>
  <div>
    <div>{{a}}</div>
    <img src="../../assets/img/avatar.png" alt />
    <Module></Module>
    <div class="bg"></div>
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
};
</script>

<style scoped>
img {
  width: 100px;
}
.bg {
  background: url('../../assets/img/avatar.png');
  width: 100px;
  height: 100px;
  background-size: cover;
}
</style>