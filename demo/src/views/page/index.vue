<template>
  <div class="container">
    <template>{{a}}</template>
    <div class="nested">
      <Module></Module>
      <router-link to="/page2">page2</router-link>
    </div>
  </div>
</template>

<script>
import Module from './components/Module.vue';

export default {
  name: 'page',
  data() {
    return {
      a: 'page',
    };
  },
  components: {
    Module,
  },
};
</script>

<style scoped>
.container {
  color: red;
  .nested {
    font-size: 14px;
    color: var(--primary-color);
  }
}
</style>
