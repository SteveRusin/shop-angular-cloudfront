import { Config } from './config.interface';

export const CONFIG_COMMON: Omit<Config, 'production'> = {
  apiEndpoints: {
    product: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
    order: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
    import: 'https://fsr1ooozpd.execute-api.eu-west-1.amazonaws.com/dev',
    bff: 'https://6qmq20mldk.execute-api.eu-west-1.amazonaws.com/dev/',
    cart: 'http://steverusin-card-api-dev3.eu-west-1.elasticbeanstalk.com/api',
  },
  apiEndpointsEnabled: {
    product: true,
    order: true,
    import: true,
    bff: true,
    cart: true,
  },
};
