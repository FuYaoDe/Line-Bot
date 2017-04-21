import LineService from './lineBot';

export default class Services {
  constructor() {
    this.lineBot = new LineService({
      apiUrl: 'https://api.line.me/v2/bot/',
      channelAccessToken: appConfig.channelAccessToken,
    });
  }
}
