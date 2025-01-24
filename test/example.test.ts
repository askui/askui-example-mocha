import { aui } from "./helpers/askui-helper";


describe('jest with askui', () => {
    //first test case for successful purchase flow
  it('Enter saucedemo with right credentials and then close the browser once entered', async () => {
      const standardUsername: string = 'standard_user';
      const password: string = 'secret_sauce';

      // await aui.execOnShell("start chrome").exec();
      // await aui.waitFor(333).exec();
      console.log('Entering saucedemo website URL');
      await aui.type("https://www.saucedemo.com/").exec();
      await aui.waitFor(333).exec();
      await aui.pressKey('enter').exec();  // enter the sauce demo website
      await aui.waitUntil(aui.expect().text('Swag Labs').exists()); 
      console.log('Entering Username');
      await aui.click().text("Username").exec();
      await aui.type(standardUsername).exec() // the username is entered here
      console.log('Entering Password');
      await aui.click().text("Password").exec();
      await aui.type(password).exec();
      await aui.waitFor(333).exec();
      await aui.pressKey('enter').exec();
      await aui.waitFor(333).exec();
      await aui.waitUntil(aui.expect().text('Products').exists()); 
      console.log('successfully entered website');
      console.log('Closing browser');
      await aui.waitFor(500).exec();
      await aui.pressKey('escape').exec();
      await aui.waitFor(500).exec();
      await aui.pressTwoKeys('alt','f4').exec();
      console.log('successfully closed chrome, end of process');
  });
});