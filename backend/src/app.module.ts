import { Module } from '@nestjs/common';
import { UrlService } from './url.service';
import { UrlController } from './url.controller';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { Url, urlSchema } from './models/url.models';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:example@localhost:27017'), // for local development, just testing
    MongooseModule.forFeature([{ name: Url.name, schema: urlSchema }]),
  ],
  controllers: [UrlController],
  providers: [UrlService],
})
export class AppModule {}
