interface IConfig {
  domain: string;
  appid: string;
}

export default class Sdk {
  config = null;

  constructor(config: IConfig) {
    this.config = config;
  }

  sayHi() {
    return "HI";
  }

  sayHiAsync() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("HI");
      }, 1000);
    });
  }
}
