import { Controller, Get, HttpException, Param } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ApiCommomDecorators } from 'src/shared/decorators/globalDoc.decorator';
import { UserDisabilitieResponseDTO } from 'src/shared/dtos/userDisabilities/userDisability.dto';
import { ListUserDisabilitiesByUserIdService } from 'src/modules/usersDisabilities/context/listUserDisabilitiesByUserId/listUserDisabilitiesByUserId.service';

@ApiTags('users')
@Controller('/disabilities')
export class ListUserDisabilitiesByUserIdController {
  constructor(
    private listUserDisabilitiesByUserIdService: ListUserDisabilitiesByUserIdService,
  ) {}

  @Get('/list/:userId')
  @ApiOkResponse({
    description: 'A list of the user disabilities will be returned',
    type: UserDisabilitieResponseDTO,
  })
  @ApiCommomDecorators()
  public async handle(@Param('userId') userId: string) {
    try {
      return await this.listUserDisabilitiesByUserIdService.execute(userId);
    } catch (error) {
      throw new HttpException(
        error.response.message,
        error.response.statusCode,
      );
    }
  }
}
