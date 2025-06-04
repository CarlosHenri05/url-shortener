export class UrlAlreadyShortened extends Error {
  message: string;
  cause: any;

  constructor(message, cause) {
    super(message, cause);
  }
}
