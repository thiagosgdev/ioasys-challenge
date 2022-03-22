import { Controller, Get, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import * as client from 'prom-client';

@Controller('metrics')
export class MetricsController {
  @Get()
  @ApiTags('utils')
  async check(@Res() res: Response) {
    const collectDefaultMetrics = client.collectDefaultMetrics;
    const Registry = client.Registry;
    const register = new Registry();
    collectDefaultMetrics({ register });
    res.set('Content-Type', client.register.contentType);
    return res.send(client.register.metrics());
  }
}
