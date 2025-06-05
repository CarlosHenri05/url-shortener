import { Controller, Post, Get, Body, Query, Res } from '@nestjs/common';
import { RequestUrlDto, ResponseUrlDto } from './dto/url.dto';
import { UrlService } from './url.service';
import { Response } from 'express';

@Controller('/api')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Post('/shorten')
  async createShortUrl(
    @Body() body: RequestUrlDto,
  ): Promise<ResponseUrlDto | void> {
    return this.urlService.createShortUrl(body.originalUrl);
  }

  @Get('/shorten')
  async getShortUrl(@Query('shortUrl') shortUrl: string, @Res() res: Response) {
    const url = await this.urlService.getShortUrl(shortUrl);

    if (url) {
      return res.redirect(url.originalUrl);
    }

    return res.status(404).send('Url not found');
  }
}
