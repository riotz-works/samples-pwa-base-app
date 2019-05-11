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
        <a @click="addTada" class="button--action">🎉 {{ tada }}</a>
        <a @click="addSparkles" class="button--action">✨ {{ sparkles }}</a>
        <a @click="addThumbsup" class="button--action">👍 {{ thumbsup }}</a>
        <a @click="addHeart" class="button--action">🧡 {{ heart }}</a>
        <a @click="clear" class="button--grey">Clear</a>
      </div>
    </div>
  </section>
</template>


<script lang="ts">
import Vue from 'vue'
import Logo from '~/components/Logo.vue'

export default Vue.extend({
  components: {
    Logo
  },
  data() {
    return {
      tada: 0,
      sparkles: 0,
      thumbsup: 0,
      heart: 0
    }
  },
  computed: {
    counter(): number {
      return this.tada + this.sparkles + this.thumbsup + this.heart
    }
  },
  methods: {
    addTada: function(): void {
      this.tada++
    },
    addSparkles: function(): void {
      this.sparkles++
    },
    addThumbsup: function(): void {
      this.thumbsup++
    },
    addHeart: function(): void {
      this.heart++
    },
    clear: function(): void {
      this.tada = 0
      this.sparkles = 0
      this.thumbsup = 0
      this.heart = 0
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

.button--action {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b70d0;
  color: #3b70d0;
  text-decoration: none;
  padding: 10px 10px;
  cursor: pointer;
}

.button--action:hover {
  color: #fff;
  background-color: #3b70d0;
}
</style>
