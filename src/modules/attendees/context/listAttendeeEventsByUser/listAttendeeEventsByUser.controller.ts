import { Controller, Get, HttpException, Query, Request } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ListAttendeeEventsByUserResponseDTO } from '../../../../shared/dtos/attendees/listAttendeeEventsByUserResponse.dto';
import { ApiCommomDecorators } from '../../../../shared/decorators/globalDoc.decorator';
import { RequestDTO } from '../../../../shared/dtos/shared/request.dto';
import { ListAttendeeEventsByUserIdService } from './listAttendeeEventsByUser.service';
import { AttendeeStatusDTO } from 'src/shared/dtos/attendees/attendeeStatus.dto';

@ApiTags('attendees')
@Controller('/list')
export class ListAttendeeEventsByUserIdController {
  constructor(
    private listAttendeeEventsByUserIdService: ListAttendeeEventsByUserIdService,
  ) {}

  @Get('/user')
  @ApiOkResponse({
    description:
      'A list of all user events will be returned with the status passed',
    type: ListAttendeeEventsByUserResponseDTO,
  })
  @ApiCommomDecorators()
  public async handle(
    @Request() req: RequestDTO,
    @Query() dto: AttendeeStatusDTO,
  ) {
    try {
      const userId = req.user.userId;
      return await this.listAttendeeEventsByUserIdService.execute({
        userId,
        status: dto.status,
      });
    } catch (error) {
      console.log(error);
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
