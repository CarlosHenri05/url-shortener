import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Url } from './models/url.models';
import { Model } from 'mongoose';
import { UrlAlreadyShortened } from './utils/generic-errors';
import { nanoid } from 'nanoid';

@Injectable()
export class UrlService {
  constructor(@InjectModel(Url.name) private readonly urlModel: Model<Url>) {}

  async createShortUrl(url: { originalUrl: string }): Promise<Url> {
    const { originalUrl } = url;

    let findingUrl = await this.urlModel.findOne({ originalUrl: originalUrl });

    if (findingUrl) {
      throw new UrlAlreadyShortened(
        'UrlShortenedError',
        'Url was already shortened and saved in DB!',
      );
    }

    try {
      const shortUrl = nanoid(10);

      let newUrl = new this.urlModel({
        originalUrl: originalUrl,
        shortUrl: shortUrl,
      }).save();

      return newUrl;
    } catch (error) {
      console.error('Error :' + error);
      throw error;
    }
  }
}
