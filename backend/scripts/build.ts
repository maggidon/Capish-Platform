import logger from 'jet-logger';
import { exec, remove } from './common/utils';

(async () => {
  try {
    await remove('./dist/');
    await exec('npm run lint', './');
    await exec('tsc --project ./tsconfig.prod.json', './');

    logger.info('Build complete.');
  } catch (err) {
    logger.err(err);
    throw err;
  }
})();
