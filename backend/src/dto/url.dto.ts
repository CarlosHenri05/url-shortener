import { ApiProperty } from '@nestjs/swagger';
import { IsUrl } from 'class-validator';

export class RequestUrlDto {
  @IsUrl()
  @ApiProperty({ example: 'https://example.com' })
  originalUrl: string;
}

export class ResponseUrlDto {
  @ApiProperty({ example: 'http://short.ly/abc123' })
  shortUrl: string;
}
