import { WellnessTipsModule } from '../../modules/wellnessTips/wellnessTips.module';
import { ActivityModule } from '../../modules/activities/activities.module';
import { ActivityCategoriesModule } from '../../modules/activitiesCategories/activitiesCategories.module';
import { AddressModule } from '../../modules/addresses/address.module';
import { AttendeeModule } from '../../modules/attendees/attendees.module';
import { CategoriesModule } from '../../modules/categories/categories.module';
import { DisabilitiesModule } from '../../modules/disabilities/disabilities.module';
import { EventModule } from '../../modules/events/events.module';
import { MessageModule } from '../../modules/messages/message.module';
import { MessageTypeModule } from '../../modules/messagesTypes/messagesTypes.module';
import { MoodModule } from '../../modules/moods/moods.module';
import { UserInterestsModule } from '../../modules/userInterests/userInterests.module';
import { UserModule } from '../../modules/users/user.module';
import { UserDisabilitiesModule } from '../../modules/usersDisabilities/userDisabilities.module';
import { UserMoodModule } from '../../modules/usersMoods/userMoods.module';

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
  {
    path: '/disabilities',
    module: DisabilitiesModule,
  },
  {
    path: '/users',
    module: UserDisabilitiesModule,
  },
  {
    path: '/wellness',
    module: WellnessTipsModule,
  },
];
