
<template>
  <div>
    <div>
      <span class="count">{{ count }}</span>
      <button @click="increment">Increment</button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        count: 0
      }
    },

    methods: {
      increment () {
        this.count++
      }
    }
  }

</script>

