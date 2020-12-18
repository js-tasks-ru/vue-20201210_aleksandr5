import { daysOfWeek, monthNames } from './data.js';

export const MeetupsCalendar = {
  name: 'MeetupsCalendar',
  props: {
    meetups: Array,
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
          <div>{{ monthName }} 2020</div>
          <button 
            class="rangepicker__selector-control-right"
            @click="monthNext"
          ></button>
        </div>
      </div>
      <div class="rangepicker_week">
        <div 
          class="rangepicker_week-day"
          v-for="day of daysOfWeek"
          :key="day"
        >{{ day }}</div>
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
      daysOfWeek,
      monthNames,
      currentMonth: null,
      currentYear: null,
      days: null,
      startMonthDayOfWeek: null
    }
  },
  created () {
    this.initCurrentMonth()
    this.initCurrentYears()
    this.days = this.daysInMonth(this.currentMonth, this.currentYear)
    this.startMonthDayOfWeek = this.setStartMonthDayOfWeek(this.currentMonth, this.currentYear)
  },
  methods: {
    initCurrentMonth () {
      const date = new Date()
      this.currentMonth = date.getMonth()
    },
    initCurrentYears () {
      const date = new Date()
      this.currentYear = date.getFullYear()
    },
    daysInMonth (month, year) {
      return 32 - new Date(year, month, 32).getDate();
    },
    setStartMonthDayOfWeek (month, year) {
      const date = new Date(year, month, 0)
      return date.getDay() - 1
    },
    monthPrev () {
      const prevMonth = this.currentMonth - 1
      this.currentMonth = prevMonth
      this.days = this.daysInMonth(this.currentMonth, this.currentYear)
    },
    monthNext () {
      const nextMonth = this.currentMonth + 1
      this.currentMonth = nextMonth
      this.days = this.daysInMonth(this.currentMonth, this.currentYear)
    }
  },
  computed: {
    monthName () {
      return monthNames[this.currentMonth > 11 ? this.currentMonth - 12 : this.currentMonth  ]
    },
    datepicker () {
      let datePicker = []
      let startIndent = this.setStartMonthDayOfWeek(this.currentMonth, this.currentYear)
      let prevMonthCountDay = this.daysInMonth(this.currentMonth - 1, this.currentYear)
      let nextMonthCountDay = null
      for(let i = prevMonthCountDay - startIndent; i <= prevMonthCountDay; i++) {
        let day = {
          number: i,
          carrentMonth: false,
          events: []
        }
        datePicker.push(day)
      }
      for(let i = 1; i <= this.days; i++) {
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
      for(let i = 1; i <= nextMonthCountDay; i++) {
        let day = {
          number: i,
          carrentMonth: false,
          events: []
        }
        datePicker.push(day)
      }
      return datePicker
    }
  }
};
