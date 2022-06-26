export default class Args {
  static parse(argString: string[]): Option {
    const ret = argString.map((arg, i, args) => {
      return this.parseOption(arg, i, args);
    });
    let logging: any = false;
    let port: any;
    let directory: any;
    for (let [k, v] of Object.entries(ret)) {
      if (k === "-l") logging = v;
      if (k === "-p") port = v;
      if (k === "-d") directory = v;
    }
    const isLoggingOption = new Option(logging, port, directory);
    return isLoggingOption;
  }

  static parseOption(arg: string, index: number, args: string[]) {
    let value;
    if (arg === "-l") {
      value = true;
    }
    if (arg === "-p") {
      const index = args.indexOf(arg);
      value = parseInt(args[index + 1]);
    }
    if (arg === "-d") {
      const index = args.indexOf(arg);
      value = args[index + 1];
    }
    return value !== undefined ? { arg: value } : null;
  }
}

class Option {
  _logging: boolean;
  _port: number;

  constructor(logging: boolean = true, port: number, directory?: string) {
    this._logging = logging;
    this._port = port;
  }

  logging() {
    return this._logging;
  }

  port() {
    return this._port;
  }

  directory() {
    return this.directory;
  }

  group() {
    return this.group;
  }
  decimals() {
    return this.decimals;
  }
}
