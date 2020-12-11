import { agendaItemTitles, agendaItemIcons } from './data.js';

export const MeetupAgendaItem = {
  name: 'MeetupAgendaItem',
  props: {
    item: Object
  },
  template: `
    <div class="meetup-agenda__item">
      <div class="meetup-agenda__item-col">
        <img class="icon" alt="icon" :src="icon" />
      </div>
      <div class="meetup-agenda__item-col">{{ item.startsAt }} - {{ item.endsAt }}</div>
      <div class="meetup-agenda__item-col">
        <h5 class="meetup-agenda__title">{{ title }}</h5>
        <p>
          <span>{{ item.speaker }}</span>
          <span class="meetup-agenda__dot"></span>
          <span class="meetup-agenda__lang">{{ item.language }}</span>
        </p>
        <p>{{ item.description }}</p>
      </div>
    </div>`,
  computed: {
    title () {
      return this.item.title ? this.item.title : agendaItemTitles[this.item.type]
    },
    icon () {
      return `/assets/icons/icon-${agendaItemIcons[this.item.type]}.svg`
    }
  }
};
