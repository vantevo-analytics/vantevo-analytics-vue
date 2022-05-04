"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vantevo_analytics_tracker_1 = require("vantevo-analytics-tracker");
const VantevoPlugin = function (context, inject) {
    const moduleOptions = '<%= serialize(options) %>';
    const { vantevo, enableTracker, enableTrackFiles, enableOutboundLinks } = (0, vantevo_analytics_tracker_1.default)(moduleOptions);
    // active automatic tracker
    if (!moduleOptions.manualPageview) {
        enableTracker();
    }
    // automatic track outbound links
    if (moduleOptions.outboundLinks) {
        enableOutboundLinks();
    }
    // automatic track files download
    if (moduleOptions.trackFiles) {
        enableTrackFiles();
    }
    inject('vantevo', {
        event: vantevo,
        enableTracker: enableTracker,
        enableOutboundLinks: enableOutboundLinks,
        enableTrackFiles: enableTrackFiles,
    });
};
exports.default = VantevoPlugin;
//# sourceMappingURL=vantevo.client.js.map