import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';

import { EventRepo } from '../../repositories/events.repository';
import { UserMood } from 'src/shared/entities/userMoods.entity';
import { MoodActivity } from 'src/shared/entities/moodsActivities.entity';
import { QueryFiltersRequest } from 'src/shared/dtos/shared/queryFilters.dto';

@Injectable()
export class ListEventsByUserInterestsService {
  constructor(
    @Inject('USER_MOOD_REPOSITORY')
    private userMoodRepository: Repository<UserMood>,
    @Inject('MOOD_ACTIVITY_REPOSITORY')
    private moodActivityRepository: Repository<MoodActivity>,
    private repository: EventRepo,
  ) {}

  async execute(userId: string, filters?: QueryFiltersRequest) {
    let take = 0;
    let skip = 0;
    if (filters) {
      take = Number(filters?.take);
      skip = Number(filters?.skip);
    }

    const activities = [];

    const userMood = await this.userMoodRepository.findOne({
      where: { userId },
      order: {
        createdAt: 'DESC',
      },
    });

    if (userMood) {
      const moodActivities = await this.moodActivityRepository.find({
        where: {
          moodId: userMood.moodId,
        },
      });

      moodActivities.forEach((moodActivity) => {
        activities.push(moodActivity.activityId);
      });
    }

    const events = await this.repository.listEventsByUserInterests(
      userId,
      activities,
      take,
      skip,
    );
    if (events.length < 1) throw new NotFoundException('No event found');
    return events;
  }
}
