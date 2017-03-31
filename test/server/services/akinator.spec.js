import AkinatorService from '../../../server/services/akinator';
import debug from 'debug';
describe('about akinator service', () => {
  let akinator, session, signature;
  before(async(done) => {
    try {
      akinator = new AkinatorService({
        apiUrl: 'http://api-cn1.akinator.com/ws',
      });
      done();
    } catch (e) {
      done(e);
    }
  });

  it('get new session', async(done) => {
    try {
      const result = await akinator.newSession();
      session = result.parameters.identification.session;
      signature = result.parameters.identification.signature;
      debug('dev')(result);
      done();
    } catch (e) {
      done(e);
    }
  });

  it('send ans', async(done) => {
    try {
      const result = await akinator.sendAnswer({
        session,
        signature,
        step: 0,
        answer: 0,
      });
      debug('dev')(JSON.stringify(result, null, 2));
      done();
    } catch (e) {
      done(e);
    }
  });
});
