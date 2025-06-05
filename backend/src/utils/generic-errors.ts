export class UrlNotFound extends Error {
  message: string;
  cause: any;

  constructor(message, cause) {
    super(message, cause);
  }
}
