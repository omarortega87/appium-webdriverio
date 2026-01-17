import { config as baseConfig } from './wdio.conf'
export const config = {
  ...baseConfig,
  capabilities: [
    {
      platformName: 'Android',
      'appium:deviceName': 'emulator-5554',
      'appium:platformVersion': '13.0',
      'appium:automationName': 'UiAutomator2',
      'appium:app': './apps/android.apk',
      'appium:autoGrantPermissions': true
    }
  ]
}
