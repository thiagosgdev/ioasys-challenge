import { applyDecorators } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiInternalServerErrorResponse,
  ApiTooManyRequestsResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

export function ApiCommomDecorators() {
  return applyDecorators(
    ApiBearerAuth(),
    ApiUnauthorizedResponse({
      description: 'Returns a message and code if a invalid token is provided.',
    }),
    ApiTooManyRequestsResponse({
      description:
        'Too many request. Please wait a while before making more requests!',
    }),
    ApiInternalServerErrorResponse({
      description: 'Something went wrong. Please contact the API support',
    }),
  );
}
