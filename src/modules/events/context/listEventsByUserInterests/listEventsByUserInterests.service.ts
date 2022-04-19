import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';

import { EventRepo } from '../../repositories/events.repository';
import { UserMood } from 'src/shared/entities/userMoods.entity';
import { MoodActivity } from 'src/shared/entities/moodsActivities.entity';

@Injectable()
export class ListEventsByUserInterestsService {
  constructor(
    @Inject('USER_MOOD_REPOSITORY')
    private userMoodRepository: Repository<UserMood>,
    @Inject('MOOD_ACTIVITY_REPOSITORY')
    private moodActivityRepository: Repository<MoodActivity>,
    private repository: EventRepo,
  ) {}

  async execute(userId: string) {
    const activities = [];
    console.log('USER ID');
    console.log(userId);
    const userMood = await this.userMoodRepository.findOne({
      where: { userId },
      order: {
        createdAt: 'DESC',
      },
    });
    console.log('USER MOOD');
    console.log(userMood);

    const moodActivities = await this.moodActivityRepository.find({
      where: {
        moodId: userMood.moodId,
      },
    });

    console.log('MOOD ACTIVITIES');
    console.log(moodActivities);

    moodActivities.forEach((moodActivity) => {
      activities.push(moodActivity.activityId);
    });

    console.log('ACTIVITIES');
    console.log(activities);

    const events = await this.repository.listEventsByUserInterests(
      userId,
      activities,
    );
    if (events.length < 1) throw new NotFoundException('No event found');
    return events;
  }
}
