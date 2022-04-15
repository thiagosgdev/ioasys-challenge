import { Body, Controller, HttpException, Post, Request } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import { RequestDTO } from '../../../../shared/dtos/shared/request.dto';
import { ApiCommomDecorators } from '../../../../shared/decorators/globalDoc.decorator';
import { UserInterestRequestDTO } from '../../../../shared/dtos/userInterest/userInterestRequest.dto';
import { CreateUserInterestService } from './createUserInterest.service';

@ApiTags('users')
@Controller()
export class CreateUserInterestController {
  constructor(private createUserInterestService: CreateUserInterestService) {}

  @Post('/interests')
  @ApiBearerAuth()
  @ApiCreatedResponse({
    description: 'The user interest created will be returned',
  })
  @ApiCommomDecorators()
  public async handle(
    @Body() data: UserInterestRequestDTO,
    @Request() req: RequestDTO,
  ) {
    try {
      const userId = req.user.userId;
      return await this.createUserInterestService.execute(userId, data);
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
