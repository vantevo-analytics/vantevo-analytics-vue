import VantevoAnalytics from 'vantevo-analytics-tracker';
const VantevoPlugin = function (context, inject) {
    const moduleOptions = '<%= serialize(options) %>';
    const { vantevo, enableTracker, enableTrackFiles, enableOutboundLinks } = VantevoAnalytics(moduleOptions);
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
export default VantevoPlugin;
//# sourceMappingURL=vantevo.client.js.map