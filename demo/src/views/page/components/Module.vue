<template>
  <div>
    <div class="test">{{ a }}</div>
  </div>
</template>

<script>
import tool from '../../../utils/tool.js';
export default {
  data() {
    return {
      a: 'module1',
      tool,
    };
  },
};
</script>

<style scoped>
.test {
  font-size: 18px;
}
</style>
