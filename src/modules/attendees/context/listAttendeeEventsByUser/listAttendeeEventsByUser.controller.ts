import { Controller, Get, HttpException, Query, Request } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ListAttendeeEventsByUserIdService } from 'src/modules/attendees/context/listAttendeeEventsByUser/listAttendeeEventsByUser.service';
import { EventRepo } from 'src/modules/events/repositories/events.repository';
import { ApiCommomDecorators } from 'src/shared/decorators/globalDoc.decorator';
import { EventAddressResponseDTO } from 'src/shared/dtos/events/eventAddressResponse.dto';
import { RequestDTO } from 'src/shared/dtos/shared/request.dto';

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
    type: EventAddressResponseDTO,
  })
  @ApiCommomDecorators()
  public async handle(
    @Request() req: RequestDTO,
    @Query('status') status: string,
  ) {
    try {
      const userId = req.user.userId;
      return await this.listAttendeeEventsByUserIdService.execute({
        userId,
        status,
      });
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
