export default class Args {
  static parse(argString: string[]): Option {
    // todo
    return null as any;
  }
}

class Option {
  constructor(logging: boolean, port: number, directory: string) {}

  logging() {
    return this.logging;
  }

  port() {
    return this.port;
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
