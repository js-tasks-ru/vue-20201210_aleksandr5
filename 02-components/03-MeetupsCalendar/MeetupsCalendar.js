export const MeetupsCalendar = {
  name: 'MeetupsCalendar',
  props: {
    meetups: {
      type: Array,
      required: true
    },
    default: () => []
  },
  template: `
  <div class="rangepicker">
    <div class="rangepicker__calendar">
      <div class="rangepicker__month-indicator">
        <div class="rangepicker__selector-controls">
          <button 
            class="rangepicker__selector-control-left"
            @click="monthPrev"
          ></button>
          <div>{{ currentDate }}</div>
          <button 
            class="rangepicker__selector-control-right"
            @click="monthNext"
          ></button>
        </div>
      </div>
      <div class="rangepicker__date-grid">
        <div 
          v-for="(day, index) of datepicker"
          :key="index" 
          class="rangepicker__cell"
          :class="{'rangepicker__cell_inactive': !day.carrentMonth}"
        >
          {{ day.number }}
          <a v-for="event of day.events" :key="event.id" class="rangepicker__event">{{ event.title }}</a>
        </div>
      </div>
    </div>
  </div>`,

  data () {
    return {
      date: new Date(),
    }
  },
  created () {
    this.date = new Date(this.date.setDate(1))
  },
  methods: {
    daysInMonth (month, year) {
      return 32 - new Date(year, month, 32).getDate();
    },
    setStartMonthDayOfWeek (month, year) {
      const date = new Date(year, month, 0)
      return date.getDay() - 1
    },
    monthPrev () {
      const prevMonth = this.currentMonth - 1
      this.date = new Date(this.date.setMonth(prevMonth));
    },
    monthNext () {
      let next = this.currentMonth + 1
      this.date = new Date(this.date.setMonth(next));
    }
  },
  computed: {
    currentMonth () {
      return this.date.getMonth()
    },
    currentYear () {
      return this.date.getFullYear()
    },
    currentDate () {
      return this.date.toLocaleString(navigator.language, {
        month: 'long',
        year: 'numeric',
      })
    }, 
    datepicker () {
      let datePicker = []
      let startIndent = this.setStartMonthDayOfWeek(this.currentMonth, this.currentYear)
      let prevMonthCountDay = this.daysInMonth(this.currentMonth - 1, this.currentYear)
      let days = this.daysInMonth(this.currentMonth, this.currentYear)
      let nextMonthCountDay = null
      for(let i = prevMonthCountDay - startIndent; i <= prevMonthCountDay; i++) {
        let day = {
          number: i,
          carrentMonth: false,
          events: []
        }
        datePicker.push(day)
      }
      for(let i = 1; i <= days; i++) {
        let day = {
          number: i,
          carrentMonth: true,
          events: []
        }
        this.meetups.forEach(element => {
          let eventDate = new Date(element.date)
          let eventYear = eventDate.getFullYear()
          let eventMonth = eventDate.getMonth()
          let eventDay = eventDate.getDate()
          if(eventMonth === this.currentMonth && eventDay === i) {
            day.events.push(element)
          }
        })
        datePicker.push(day)
      }
      nextMonthCountDay = 7 - (datePicker.length % 7)
      if (nextMonthCountDay < 7) {
        for(let i = 1; i <= nextMonthCountDay; i++) {
          let day = {
            number: i,
            carrentMonth: false,
            events: []
          }
          datePicker.push(day)
        }
      }
      return datePicker
    }
  }
};
