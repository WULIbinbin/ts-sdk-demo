import Lib from "../lib/index";

test("install sdk success", () => {
  const params = {
    domain: "https://www.baidu.com",
    appid: "wx123456789",
  };
  const sdk = new Lib(params);
  console.log(sdk);
  
  expect(sdk.sayHi()).toBe('HI')

  sdk.sayHiAsync().then(res=>{
    expect(res).toBe('HI')
  })
});
