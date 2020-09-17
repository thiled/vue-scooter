<template>
  <div>
    <div class="test">module</div>
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

<style scoped>
.test{
  font-size: 18px;
}
</style>