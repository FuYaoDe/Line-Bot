import LineBotService from '../../../server/services/lineBot';
import debug from 'debug';
describe('about line service', () => {
  let lineBot;
  before(async(done) => {
    try {
      lineBot = new LineBotService({
        apiUrl: 'https://api.line.me/v2/bot/',
        channelAccessToken: config.channelAccessToken
      });
      done();
    } catch (e) {
      done(e);
    }
  });

  it('send event', async(done) => {
    try {
      await request.post('').send({
        events: [
          {
            replyToken: 'nHuyWiB7yP5Zw52FIkcQobQuGDXCTA',
            type: 'message',
            timestamp: 1462629479859,
            source: {
              type: 'user',
              userId: 'U206d25c2ea6bd87c17655609a1c37cb8',
            },
            message: {
              id: '325708',
              type: 'text',
              text: 'Hello, world',
            },
          },
        ],
      });
      done();
    } catch (e) {
      done(e);
    }
  })

  it('send reply', async(done) => {
    try {
      const result = await lineBot.reply({
        replyToken,
        messages: {
          type: 'text',
          text: 'Hello, world',
        },
      });
      debug('dev')(JSON.stringify(result, null, 2));
      done();
    } catch (e) {
      done(e);
    }
  });
});
