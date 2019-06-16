<template>
  <section class="container">
    <div>
      <logo v-bind:counter="counter" />
      <h1 class="title">
        pwa-base-app
      </h1>
      <h2 class="subtitle">
        My majestic Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >GitHub</a>
      </div>
      <div class="actions">
        <emoji-button v-for="e in emojis" :key="e" :emoji="e" />
        <a @click="clear" class="button--grey">Clear</a>
      </div>
    </div>
  </section>
</template>


<script lang="ts">
import Vue from 'vue'
import EmojiButton from '~/components/EmojiButton.vue'
import Logo from '~/components/Logo.vue'

export default Vue.extend({
  components: {
    Logo,
    EmojiButton
  },
  data() {
    return {
      emojis: [ '🎉', '✨', '👍', '🧡' ]
    }
  },
  computed: {
    counter(): number {
      return 0
    }
  },
  methods: {
    clear: function(): void {
    }
  }
})
</script>


<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links, .actions {
  padding-top: 15px;
}
</style>
