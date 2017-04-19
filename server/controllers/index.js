import Router from 'koa-router';
import { exec } from 'child-process-promise';
import debug from 'debug';
import config from '../config/init';
import axios from 'axios';

const lineApi = axios.create({
  baseURL: 'https://api.line.me/v2/bot/',
  timeout: 3000,
  headers: {
    "Content-Type": 'application/json',
    'Authorization': `Bearer ${config.channelAccessToken}`
  }
});

export default class Routes {

  constructor(app) {
    const router = new Router();
    this.router = router;
    this.app = app;
  }

  setupPublicRoute() {
    const app = this.app;
    const publicRoute = new Router();

    publicRoute.get('/', async (ctx) => {
      try {
        ctx.body = {
          meaasge: 'Hello Line bot!!',
          data: {},
        };
      } catch (e) {
        throw e;
      }
    });

    publicRoute.post('/api/line', async (ctx) => {
      try {
        const { body } = ctx.request;
        debug('dev')(JSON.stringify(body, null, 2));
        await services.akinatorScript.getMessage(body.events);
        ctx.body = {
          meaasge: 'reply finish',
          data: {},
        };
      } catch (e) {
        throw e;
      }
    });

    app.use(publicRoute.middleware());
  }

  setupAppRoute() {
    this.app.use(this.router.middleware());
  }
}
