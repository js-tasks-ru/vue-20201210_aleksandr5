<template>
  <div>
    <button type="button" @click="addCount">{{count}}</button>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      default: 0
    }
  },
  methods: {
    addCount () {
      this.$emit('increment', this.count + 1)
    }
  },
  model: {
    prop: 'count',
    event: 'increment'
  }
};
</script>

<style></style>
