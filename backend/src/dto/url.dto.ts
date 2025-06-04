export class RequestUrlDto {
  originalUrl: string;

  getOriginalUrl() {
    return this.originalUrl;
  }

  setOriginalUrl(originalUrl: string) {
    this.originalUrl = originalUrl;
  }
}

export class ResponseUrlDto {
  shortUrl: String;
}
