"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.meta = void 0;
const { resolve } = require('path');
const defaultOptions = {
    excludePath: [],
    manualPageview: false,
    dev: false,
    outboundLinks: false,
    trackFiles: false,
    saveExtension: false
};
const VantevoModule = function (moduleOptions) {
    const options = Object.assign(Object.assign({}, defaultOptions), moduleOptions);
    this.addPlugin({
        src: resolve(__dirname, 'vantevo.client.js'),
        mode: 'client',
        fileName: 'vantevo.client.js',
        options: options,
    });
};
exports.default = VantevoModule;
exports.meta = require('../../package.json');
//# sourceMappingURL=vantevo.server.js.map