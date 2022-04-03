import { Controller, Get, Headers, HttpException, Query } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ListAttendeeEventsByUserIdService } from 'src/modules/attendees/context/listAttendeeEventsByUser/listAttendeeEventsByUser.service';

//@UseGuards(JwtAuthGuard)
@ApiTags('attendees')
@Controller('/list')
export class ListAttendeeEventsByUserIdController {
  constructor(
    private listAttendeeEventsByUserIdService: ListAttendeeEventsByUserIdService,
    private jwtService: JwtService,
  ) {}

  @Get('/user')
  @ApiOkResponse({
    description: 'A list all attendees CONFIRMED events will be returned',
  })
  public async handle(
    @Headers('Authorization') auth: string,
    @Query('status') status: string,
  ) {
    try {
      const token = auth.split(' ')[1];
      const payload = this.jwtService.decode(token);
      const userId = payload['userId'];
      return await this.listAttendeeEventsByUserIdService.execute({
        userId,
        status,
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
