import { monthNames } from './data.js';

export const MeetupInfo = {
  props: ['organizer', 'place', 'date'],
  template: `<ul class="info-list">
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{ organizer }}
      </li>
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{ place }}
      </li>
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time :datetime="dateMeetup.number">{{ dateMeetup.string | uppercase }}</time>
      </li>
    </ul>`,
  computed: {
    dateMeetup () {
      let date = new Date(this.date)
      let day = date.getDate()
      let month = date.getMonth()
      let years = date.getFullYear()
      return {
        string: `${this.getDay(day)} ${this.getMonthName(month)} ${years}`,
        number: `${years}-${11}-${this.getDay(day)}`
      };
    }
  },
  methods: {
    getMonthName (monthIndex, length = 3) {
      let month = monthNames[monthIndex] + ''
      return month.substring(0, length)
    },
    getDay (day) {
      return day < 10 ? '0' + day : day
    }
  },
  filters: {
    uppercase: function(v) {
      return v.toLowerCase();
    }
  }
};
