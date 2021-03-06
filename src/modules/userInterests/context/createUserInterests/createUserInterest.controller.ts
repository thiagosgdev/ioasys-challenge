import { Body, Controller, HttpException, Post, Request } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import { RequestDTO } from '../../../../shared/dtos/shared/request.dto';
import { ApiCommomDecorators } from '../../../../shared/decorators/globalDoc.decorator';
import { UserInterestRequestDTO } from '../../../../shared/dtos/userInterest/userInterestRequest.dto';
import { UserInterestResponseDTO } from '../../../../shared/dtos/userInterest/userInterest.dto';
import { CreateUserInterestService } from './createUserInterest.service';

@ApiTags('users')
@Controller()
export class CreateUserInterestController {
  constructor(private createUserInterestService: CreateUserInterestService) {}

  @Post('/interests')
  @ApiBearerAuth()
  @ApiCreatedResponse({
    description: 'The user interest created will be returned',
    type: UserInterestResponseDTO,
  })
  @ApiCommomDecorators()
  public async handle(
    @Request() req: RequestDTO,
    @Body() data: UserInterestRequestDTO,
  ) {
    try {
      return await this.createUserInterestService.execute(
        req.user.userId,
        data,
      );
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
