import debug from 'debug';
var CryptoJS = require("crypto-js");
import axios from 'axios';

export default class lineBot {

  constructor ({ apiUrl, channelAccessToken, timeout  }) {
    this.lineApi = axios.create({
      baseURL: apiUrl,
      timeout: timeout,
      headers: {
        "Content-Type": 'application/json',
        'Authorization': `Bearer ${channelAccessToken}`
      }
    });
  }


  async reply({ events }) {
    try {
      for(let event of events) {
        const userMsg =  event.message.text;
        let result =  await this.lineApi.post('/message/reply', {
          replyToken: event.replyToken,
          messages: [{
            "type":"text",
            "text": `get message "${userMsg}"`,
          }, {
            "type": "image",
            "originalContentUrl": "https://unsplash.it/300/300/?random",
            "previewImageUrl": "https://unsplash.it/300/300/?random"
          }, {
            "type": "template",
            "altText": "this is a buttons template",
            "template": {
                "type": "buttons",
                "thumbnailImageUrl": "https://unsplash.it/300/300/?random",
                "title": "Menu",
                "text": "Please select",
                "actions": [
                    {
                      "type": "postback",
                      "label": "Buy",
                      "data": "action=buy&itemid=123"
                    },
                    {
                      "type": "postback",
                      "label": "Add to cart",
                      "data": "action=add&itemid=123"
                    },
                    {
                      "type": "uri",
                      "label": "View detail",
                      "uri": "http://example.com/page/123"
                    }
                ]
            }
          }]
        });
        console.log(result);
      }
    } catch (e) {
      throw e;
    }
  }
}
