import { Plugin } from '@nuxt/types'
import VantevoAnalytics from 'vantevo-analytics-tracker'


const VantevoPlugin: Plugin = function (context, inject) {
  const moduleOptions = '<%= serialize(options) %>' as  any;
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