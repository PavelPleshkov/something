import {
  Body,
  Controller,
  Get,
  // HttpCode,
  Param,
  Post,
  Query,
  // Req,
} from '@nestjs/common';
import type { Request } from 'express';
import { CreateLinkDto } from './createLink.dto';

@Controller('links')
export class LinksController {
  //http://localhost:3000/links
  // @Get()
  // // @Redirect('https://nestjs.com', 301)
  // // findAll(): string {
  // //   // findAll() {
  // //   return `This action return all links`;
  // //   // return { link: 'link1' };
  // // }
  // // findAll(@Req() request: Request): any {
  // //   // console.log('Get request');
  // //   return request;
  // // }
  // findAll(@Req() request: Request): string {
  //   return `This action returns all links`;
  // }

  @Get()
  async findAll(
    @Query('isInner') isInner: boolean,
    @Query('color') color: string,
  ) {
    return `This action returns all cats filtered by color: ${color} and isIner: ${isInner}`;
  }

  @Get(':id')
  //http://localhost:3000/links/4
  findOne(@Param() params: any): string {
    console.log(params.id);
    return `This action returns a #${params.id} link`;
  }
  // findOne(@Param('id') id: string): string {
  //   return `This action returns a #${id} link`;
  // }

  @Post()
  // @HttpCode(204)
  async create(@Body() createLinkDto: CreateLinkDto) {
    return `This action adds a new link`;
  }
}
