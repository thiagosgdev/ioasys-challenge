import { ActivityModule } from 'src/modules/activities/activities.module';
import { ActivityCategoriesModule } from 'src/modules/activitiesCategories/activitiesCategories.module';
import { AddressModule } from 'src/modules/addresses/address.module';
import { AttendeeModule } from 'src/modules/attendees/attendees.module';
import { CategoriesModule } from 'src/modules/categories/categories.module';
import { EventModule } from 'src/modules/events/events.module';
import { MessageModule } from 'src/modules/messages/message.module';
import { MessageTypeModule } from 'src/modules/messagesTypes/messagesTypes.module';
import { MoodModule } from 'src/modules/moods/moods.module';
import { UserInterestsModule } from 'src/modules/userInterests/userInterests.module';
import { UserModule } from 'src/modules/users/user.module';
import { UserMoodModule } from 'src/modules/usersMoods/userMoods.module';

export const routerConfig = [
  {
    path: '/users',
    module: UserModule,
  },
  {
    path: '/messages',
    module: MessageModule,
  },
  {
    path: '/messages',
    module: MessageTypeModule,
  },
  {
    path: '/activities',
    module: ActivityModule,
  },
  {
    path: '/activities',
    module: ActivityCategoriesModule,
  },
  {
    path: '/moods',
    module: MoodModule,
  },
  {
    path: '/addresses',
    module: AddressModule,
  },
  {
    path: '/events',
    module: EventModule,
  },
  {
    path: '/users',
    module: UserInterestsModule,
  },
  {
    path: '/categories',
    module: CategoriesModule,
  },
  {
    path: '/users',
    module: UserMoodModule,
  },
  {
    path: '/events/attendees',
    module: AttendeeModule,
  },
];
