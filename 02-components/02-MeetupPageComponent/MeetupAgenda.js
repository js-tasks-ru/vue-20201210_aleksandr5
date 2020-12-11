import { MeetupAgendaItem } from './MeetupAgendaItem.js';

export const MeetupAgenda = {
  name: 'MeetupAgenda',
  props: {
    agenda: {
      type: Array,
      default: () => {}
    }
  },
  template: `
    <div class="meetup-agenda">
      <MeetupAgendaItem v-for="item of agenda" :key="item.id" :item="item" />
    </div>`,
  components: {
    MeetupAgendaItem
  }  
};
