import { Options } from '@wdio/types'

export const config:Options.Testrunner = {
  runner: 'local',
  specs: ['./test/specs/**/*.ts'],
  maxInstances: 1,
  logLevel: 'info',
  framework: 'mocha',
  reporters: ['spec'],
  services: ['appium'],
  port: 4723,
  waitforTimeout: 10000,
  mochaOpts:{
    timeout: 60000
  }
};
