import { Controller, Get, HttpException, Query, Request } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ApiCommomDecorators } from '../../../../shared/decorators/globalDoc.decorator';
import { EventAddressResponseDTO } from '../../../../shared/dtos/events/eventAddressResponse.dto';
import { RequestDTO } from '../../../../shared/dtos/shared/request.dto';
import { ListAttendeeEventsByUserIdService } from './listAttendeeEventsByUser.service';

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
