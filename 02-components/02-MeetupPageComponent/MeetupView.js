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
        :image="image"
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
              :organizer="meetup.organizer"
              :place="meetup.place"
              :date="meetup.date"
            />
          </div>
        </div>
      </div>
    </div>`,
  computed: {
    image () {
      return getMeetupCoverLink(this.meetup)
    }
  },
  components: {
    MeetupCover,
    MeetupDescription,
    MeetupAgenda,
    MeetupInfo
  }
};
