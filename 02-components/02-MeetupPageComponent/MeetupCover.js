export const MeetupCover = {
  props: {
    image: {
      type: String
    },
    title: {
      type: String,
      default: ""
    }
  },
  template: `<div class="meetup-cover" :style="image">
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,

};
