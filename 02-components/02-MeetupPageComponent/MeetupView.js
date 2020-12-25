import { MeetupCover } from './MeetupCover.js';
import { MeetupDescription } from './MeetupDescription.js';
import { MeetupAgenda } from './MeetupAgenda.js';
import { MeetupInfo } from './MeetupInfo.js';
import { getMeetupCoverLink } from './data.js';

export const MeetupView = {
  name: 'MeetupView',
  props: {
    meetup: {
      type: Object,
      required: true
    }
  },

  template: `
    <div>
      <!-- meetup cover -->
      <MeetupCover 
        :link="image"
        :title="meetup.title"
      />
      <div class="container">
        <div class="meetup">
          <div class="meetup__content">
            <h3>Описание</h3>
            <!-- meetup description -->
            <MeetupDescription :description="meetup.description" />
            <h3>Программа</h3>
            <!-- meetup agenda -->
            <MeetupAgenda :agenda="meetup.agenda" />
          </div>
          <div class="meetup__aside">
            <!-- meetup info -->
            <MeetupInfo 
              :organizer="organizer"
              :place="place"
              :date="date"
            />
          </div>
        </div>
      </div>
    </div>`,
  computed: {
    image () {
      return this.meetup.imageId ?  `https://course-vue.javascript.ru/api/images/${this.meetup.imageId}` : ''
    },
    date () {
      return new Date(this.meetup.date)
    },
    organizer () {
      return this.meetup.organizer ? this.meetup.organizer : ''
    },
    place () {
      return this.meetup.place ? this.meetup.place : ''
    }
  },
  components: {
    MeetupCover,
    MeetupDescription,
    MeetupAgenda,
    MeetupInfo
  }
};
