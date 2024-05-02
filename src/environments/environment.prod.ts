import { Config } from './config.interface';

import { CONFIG_COMMON } from './config.common';

export const environment: Config = {
  production: true,
  ...CONFIG_COMMON,
};
