<template>
  <div class="nested">
    <template>page</template>
    <Module></Module>
    <router-link to="/page2">page2</router-link>
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
  mounted() {
    console.log(this.a);
  },
};
</script>

<style>
div {
  color: red;
  .nested {
    font-size: 14px;
    color: var(--primary-color);
  }
}
</style>
