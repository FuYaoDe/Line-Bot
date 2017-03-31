import axios from 'axios';
export default class akinator {

  constructor({ apiUrl, timeout }) {
    this.akinatorApi = axios.create({
      baseURL: apiUrl,
      timeout: timeout || 3000,
    });
  }

  async newSession() {
    try {
      const result = await this.akinatorApi.get('/new_session', {
        params: {
          partner: 1,
        },
      });
      return result.data;
    } catch (e) {
      throw e;
    }
  }

  async sendAnswer({ session, signature, step, answer }) {
    try {
      const result = await this.akinatorApi.get('/answer', {
        params: {
          session,
          signature,
          step,
          answer,
        },
      });
      return result.data;
    } catch (e) {
      throw e;
    }
  }
}
