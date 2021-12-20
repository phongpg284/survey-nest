import { Controller, Get, Logger, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';
const logger = new Logger('Error');

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  findAll(): string {
    return 'This action returns all cats';
  }
}
