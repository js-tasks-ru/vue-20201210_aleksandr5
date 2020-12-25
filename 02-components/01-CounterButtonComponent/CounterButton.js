export const CounterButton = {
  // Шаблон потребуется отредактировать
  template: '<button type="button" @click="addCount">{{count}}</button>',
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
