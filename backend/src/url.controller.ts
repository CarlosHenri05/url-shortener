import { Controller, Post, Get } from '@nestjs/common';
import { RequestUrlDto, ResponseUrlDto } from './dto/url.dto';
import { InjectModel } from '@nestjs/mongoose';
import { UrlService } from './url.service';

@Controller('api')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Post('/shorten')
  createShortUrl(body: RequestUrlDto): Promise<void> {
    return this.urlService.createShortUrl(body.getOriginalUrl());
  }

  @Get('/shorten')
  getShortUrl(body: RequestUrlDto): Promise<ResponseUrlDto> {
    return this.urlService.getShortUrl(body.getOriginalUrl());
  }
}
