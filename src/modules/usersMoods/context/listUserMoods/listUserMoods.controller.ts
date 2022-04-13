import { Controller, Get, HttpException, Request } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ApiCommomDecorators } from '../../../../shared/decorators/globalDoc.decorator';
import { RequestDTO } from '../../../../shared/dtos/shared/request.dto';
import { UserMoodResponseDTO } from '../../../../shared/dtos/userMood/userMood.dto';
import { ListUserMoodsService } from './listUserMoods.service';

@ApiTags('users')
@Controller('/moods')
export class ListUserMoodsController {
  constructor(private listUserMoodsService: ListUserMoodsService) {}

  @Get('/list/:userId')
  @ApiOkResponse({
    description: 'A list of the user moods will be returned',
    type: UserMoodResponseDTO,
  })
  @ApiCommomDecorators()
  public async handle(@Request() req: RequestDTO) {
    try {
      const userId = req.user.userId;
      return await this.listUserMoodsService.execute(userId);
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
