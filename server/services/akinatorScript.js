export default class akinatorScript {

  async getMessage(events) {
    for (let event of events) {
      const userMsg =  event.message.text;
      const replyToken = event.replyToken;
    }
  }

  async start() {
    try {

    } catch (e) {
      throw e;
    }
  }
}
