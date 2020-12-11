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
          <button class="rangepicker__selector-control-left"></button>
          <div>Июнь 2020</div>
          <button class="rangepicker__selector-control-right"></button>
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
          {{ index + 1 }}
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
    this.setcurrentMonth()
    this.setcurrentYears()
    this.daysInMonth(this.currentMonth, this.currentMonth)
    this.setStartMonthDayOfWeek()
    console.log('days', this.days)
    console.log('startMonthDayOfWeek', this.startMonthDayOfWeek)
  },
  methods: {
    setcurrentMonth () {
      const date = new Date()
      this.currentMonth = date.getMonth()
    },
    setcurrentYears () {
      const date = new Date()
      this.currentYear = date.getFullYear()
    },
    daysInMonth (iMonth, iYear) {
      this.days = 32 - new Date(iYear, iMonth, 32).getDate();
    },
    setStartMonthDayOfWeek () {
      const date = new Date(this.currentYear, this.currentMonth, 1)
      this.startMonthDayOfWeek = date.getDay() - 1
    }
  },
  computed: {
    datepicker () {
      let datePicker = []
      for(let i = 1; i <= this.days; i++) {
        let day = {
          carrentMonth: true,
          events: []
        }
        this.meetups.forEach(element => {
          let eventDate = new Date(element.date)
          let eventYear = eventDate.getFullYear()
          let eventMonth = eventDate.getMonth()
          let eventDay = eventDate.getDate()
          // console.log('eventDate', eventYear, eventMonth, eventDay)
          if(eventMonth === this.currentMonth && eventDay === i) {
            day.events.push(element)
          }
        })
        datePicker.push(day)
      }
      return datePicker
    }
  }

  // Пропсы

  // В качестве локального состояния требуется хранить что-то,
  // что позволит определить текущий показывающийся месяц.
  // Изначально должен показываться текущий месяц

  // Вычислимые свойства помогут как с получением списка дней, так и с выводом информации

  // Методы понадобятся для переключения между месяцами
};
