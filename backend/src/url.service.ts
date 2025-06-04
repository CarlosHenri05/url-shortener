import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Url } from './models/url.models';
import { Model } from 'mongoose';
import { nanoid } from 'nanoid';

@Injectable()
export class UrlService {
  constructor(@InjectModel(Url.name) private readonly urlModel: Model<Url>) {}

  async createShortUrl(originalUrl: string): Promise<void> {
    let findingUrl = await this.urlModel.findOne({ originalUrl: originalUrl });

    if (findingUrl) {
      await this.getShortUrl(originalUrl);
    }

    try {
      const shortUrl = nanoid(10);

      let newUrl = new this.urlModel({
        originalUrl: originalUrl,
        shortUrl: shortUrl,
      }).save();
    } catch (error) {
      console.error('Error :' + error);
      throw error;
    }
  }

  async getShortUrl(originalUrl: string): Promise<Url> {
    try {
      let getUrl = await this.urlModel.findOne({
        where: { originalUrl: originalUrl },
      });

      return <Url>getUrl;
    } catch (error) {
      console.error('Error: ' + error);
      throw error;
    }
  }
}
