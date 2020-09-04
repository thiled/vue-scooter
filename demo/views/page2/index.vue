<template>
  <div>
    <div>page2</div>
    <Module></Module>
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
</style>