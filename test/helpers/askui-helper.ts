import { UiControlClient } from 'askui';
import { before, after } from 'mocha';

let aui: UiControlClient;

before(async () => {

  // Build and connect the client
  aui = await UiControlClient.build({});

  await aui.connect();
});

after(async () => {
  if (aui) {
    await aui.disconnect();
  }
  
});

export { aui };