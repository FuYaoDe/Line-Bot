import debug from 'debug';
import axios from 'axios';

export default class lineBot {

  constructor({ apiUrl, channelAccessToken, timeout }) {
    this.lineApi = axios.create({
      baseURL: apiUrl,
      timeout: timeout || 3000,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${channelAccessToken}`
      }
    });
  }

  async reply({ replyToken, messages }) {
    try {
      const result =  await this.lineApi.post('/message/reply', {
        replyToken,
        messages,
      });
      debug('dev')(result);
    } catch (e) {
      throw e;
    }
  }
}
