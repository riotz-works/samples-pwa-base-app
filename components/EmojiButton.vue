<template>
  <a @click="add" class="button--action">{{ emoji }} {{ counter }}</a>
</template>


<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    emoji: String
  },
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    add: function(): void {
      this.counter++
    }
  }
})
</script>


<style scoped>
.button--action {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b70d0;
  color: #3b70d0;
  text-decoration: none;
  margin: 0 2px;
  padding: 10px 10px;
  cursor: pointer;
}

.button--action:hover {
  color: #fff;
  background-color: #3b70d0;
}
</style>
