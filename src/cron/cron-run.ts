import * as cron from 'node-cron';

import {clearUnusedCarts} from './clear-unused-carts';

export const cronJobRun = () => {
  cron.schedule('* * * * *', async () => {
    console.log('CRON RUN');

    await clearUnusedCarts();

    console.log('CRON STOP');
  });
};
