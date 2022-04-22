import { Body, Controller, HttpException, Post, Request } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';

import { CreateUserDisabilityRequestDTO } from '../../../../shared/dtos/userDisabilities/createUserDisabilitiesRequest.dto';
import { ApiCommomDecorators } from '../../../../shared/decorators/globalDoc.decorator';
import { UserDisabilitieResponseDTO } from '../../../../shared/dtos/userDisabilities/userDisability.dto';
import { CreateUserDisabilitiesService } from './createUserDisabilities.service';

@ApiTags('users')
@Controller()
export class CreateUserDisabilitiesController {
  constructor(
    private createUserDisabilitiesService: CreateUserDisabilitiesService,
  ) {}

  @Post('/disabilities')
  @ApiCreatedResponse({
    description: 'The user disability created will be returned',
    type: [UserDisabilitieResponseDTO],
  })
  @ApiBadRequestResponse({
    description: 'This will be returned when a validation error happens',
  })
  @ApiCommomDecorators()
  public async handle(
    @Body() data: CreateUserDisabilityRequestDTO,
    @Request() req,
  ) {
    try {
      return await this.createUserDisabilitiesService.execute(
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
