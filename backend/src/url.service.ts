import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Url } from './models/url.models';
import { Model } from 'mongoose';
import { nanoid } from 'nanoid';
import { UrlNotFound } from './utils/generic-errors';

@Injectable()
export class UrlService {
  constructor(@InjectModel(Url.name) private readonly urlModel: Model<Url>) {}

  async createShortUrl(originalUrl: string): Promise<Url> {
    let findingUrl = await this.urlModel.findOne({ originalUrl });

    if (findingUrl) {
      return findingUrl;
    }

    try {
      const shortUrl = nanoid(10);

      const newUrl = new this.urlModel({
        originalUrl: originalUrl,
        shortUrl: shortUrl,
      }).save();

      return newUrl;
    } catch (error) {
      console.error('Error :' + error);
      throw error;
    }
  }

  async getShortUrl(shortUrl: string): Promise<Url> {
    try {
      const model = await this.urlModel.findOne({ shortUrl: shortUrl });

      if (model) {
        return model;
      }

      throw new UrlNotFound(
        'Error url not found',
        'Url was not found in the database. Try again or use the post method first.',
      );
    } catch (error) {
      throw error;
    }
  }
}
