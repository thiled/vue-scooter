<template>
  <div class="container">
    <template>{{ a }}</template>
    <div class="nested">
      <Module class="b"></Module>
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
      a: 'page1',
    };
  },
  components: {
    Module,
  },
};
</script>

<style scoped lang="less">
.container {
  color: red;
  .nested {
    font-size: 14px;

    ::v-deep {
      .test {
        color: var(--primary-color);
      }
    }
  }
}
</style>
