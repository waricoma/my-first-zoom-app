import './common/env';
import { expressServer } from './common/server';
// import { createConnection } from 'typeorm';

// const config = {
//   channelAccessToken: process.env.LINE_CH_ACCESS_TOKEN.toString(),
//   channelSecret: process.env.LINE_CH_SECRET.toString(),
// };

const port = parseInt(process.env.PORT);

/* createConnection().then(*/ (async (): Promise<void> => {
  await expressServer.setBodyParserOrLineSignatureParser(/* config */);
  // await expressServer.handleLineEv('/webhook/line/', config);
  await expressServer.setNotFoundPage();
  // await expressServer.setErrPage();
  await expressServer.listen(port);
})();
