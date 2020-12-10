export const CounterButton = {
  // Шаблон потребуется отредактировать
  template: '<button type="button" @click="addCount">Increment</button>',
  props: {
    count: {
      type: Number,
      default: 0
    },
    value: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      number: this.value || this.count
    }
  },
  methods: {
    addCount () {
      this.number += 1

      // v-model по сути это v-bind value и событие input
      // по этому хотя мы явно и не передаем props value и не емитим собыие input это будет делаться автоматически
      this.$emit('increment', this.number)
      this.$emit('input', this.number)
    }
  }

  // Компонент должен иметь входной параметр

  // Компонент должен иметь модель

  // Шаблон лучше держать максимально простым, а логику выносить в методы
};
