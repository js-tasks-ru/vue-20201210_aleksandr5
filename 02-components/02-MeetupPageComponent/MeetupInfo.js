export const MeetupInfo = {
  props: {
    organizer: {
      type: String,
      required: true
    },
    place: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    }
  },
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
        <time :datetime="dateMeetup.number">{{ dateMeetup.string }}</time>
      </li>
    </ul>`,
  computed: {
    dateMeetup () {
      let date = new Date(this.date)
      let day = date.getDate()
      let month = date.getMonth()
      let years = date.getFullYear()
      return {
        string: this.date.toLocaleString(navigator.language, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        number: this.date.toLocaleString(navigator.language, {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
        })
      };
    }
  }
};
