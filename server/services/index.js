import config from '../config/init';
import LineService from './lineBot';

export default class Services {
  constructor() {
    this.lineBot = new LineService();
  }
}
