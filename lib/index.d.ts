interface IConfig {
    domain: string;
    appid: string;
}
export default class Sdk {
    config: any;
    constructor(config: IConfig);
    sayHi(): string;
    sayHiAsync(): Promise<unknown>;
}
export {};
