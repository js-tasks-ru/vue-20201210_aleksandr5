export const MeetupCover = {
  props: {
    link: {
      type: String
    },
    title: {
      type: String,
      default: ""
    }
  },
  computed: {
    image () {
      return this.link ? {
        '--bg-url' : `url('${this.link}')`
      } : ''
    }
  },
  template: `<div class="meetup-cover" :style="image">
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,

};
