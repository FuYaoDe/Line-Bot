import debug from 'debug';
import { exec } from 'child-process-promise';

export default class lineBot {


  async call({ content, charset, showSymbol, showAttribute }) {
    try {
      charset = charset ? `-c ${charset}` : '-c utf8';
      showSymbol = showSymbol ? '' : '-I';
      showAttribute = showAttribute ? '-A' : '';

      const xdbsPath = await this.loadXDBDict();

      const cmd = `/usr/local/scws/bin/scws -i "${content}" -d ${xdbsPath}\
        ${charset} ${showSymbol} ${showAttribute}`;
      debug('dev')(cmd);
      const result = await exec(cmd)
      .then((cmdResult) => cmdResult)
      .catch((e) => { throw e; });
      const wordArray = result.stdout.split(' ');
      wordArray.pop();

      return {
        stdout: result.stdout,
        wordArray,
        ...this.getInfo(result.stderr),
      };
    } catch (e) {
      throw e;
    }
  }
}
