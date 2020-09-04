<template>
  <div>
    <template>module</template>
  </div>
</template>

<script>
import tool from '../../../utils/tool.js';
export default {
  data() {
    return {
      a: 'module',
    };
  },
  mounted() {
    console.log(this.a, tool);
  },
};
</script>

<style>
</style>