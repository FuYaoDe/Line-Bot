import Router from 'koa-router';
import { exec } from 'child-process-promise';
import debug from 'debug';
var CryptoJS = require("crypto-js");
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

    publicRoute.post('/api/line', async (ctx) => {
      try {
	      const { body } = ctx.request;
	      console.log(JSON.stringify(body, null, 2));

	      await services.lineBot.reply({
	        events: body.events,
	      });


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
