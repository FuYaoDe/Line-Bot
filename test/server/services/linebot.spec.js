import LineBotService from '../../../server/services/lineBot';
import debug from 'debug';
describe('about line service', () => {
  let lineBot;
  const replyToken = '79134c92e9e34927b11495987b9b827f';
  before(async(done) => {
    try {
      lineBot = new LineBotService({
        apiUrl: 'https://api.line.me/v2/bot/',
        channelAccessToken: appConfig.channelAccessToken
      });
      done();
    } catch (e) {
      done(e);
    }
  });

  it('send event', async(done) => {
    try {
      await request.post('/api/line').send({
        events: [
          {
            type: 'message',
            replyToken,
            source: {
              userId: 'U912faa27852eac5fec1335626d5bc17f',
              type: 'user',
            },
            timestamp: 1492798393026,
            message: {
              type: 'text',
              id: '5972882263864',
              text: 'hellow',
            },
          },
        ]
      });
      done();
    } catch (e) {
      done(e);
    }
  })

  it.skip('send reply', async(done) => {
    try {
      const result = await lineBot.reply({
        replyToken,
        messages: [{
          type: 'text',
          text: 'Hello, world',
        }],
      });
      debug('dev')(JSON.stringify(result, null, 2));
      done();
    } catch (e) {
      done(e);
    }
  });
});
