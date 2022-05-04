const { resolve } = require('path');
import { Module, NuxtVantevoOptions } from '@nuxt/types'

const defaultOptions = {
  excludePath: [],
  manualPageview: false,
  dev: false,
  outboundLinks: false,
  trackFiles: false,
  saveExtension: false
}

const VantevoModule: Module<NuxtVantevoOptions> = function (moduleOptions) {
  const options = {
    ...defaultOptions,
    ...moduleOptions
  }

  this.addPlugin({
    src: resolve(__dirname, 'vantevo.client.js'),
    mode: 'client',
    fileName: 'vantevo.client.js',
    options: options,
  });

}


export default VantevoModule;

export const meta = require('../../package.json');
