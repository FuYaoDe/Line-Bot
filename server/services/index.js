import config from '../config/init';
import LineService from './lineBot';
import AkinatorService from './akinator';
import AkinatorScriptService from './akinatorScript';

export default class Services {
  constructor() {
    this.akinatorScript = new AkinatorScriptService();
    this.akinator = new AkinatorService({
      apiUrl: 'http://api-cn1.akinator.com/ws',
    });
    this.lineBot = new LineService({
      apiUrl: 'https://api.line.me/v2/bot/',
      channelAccessToken: config.channelAccessToken,
    });
  }
}
