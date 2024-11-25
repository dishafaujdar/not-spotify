const { getDefaultConfig } = require('metro-config');

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    // Include 'mp3' in the assetExts to support MP3 files
    assetExts: ['mp3', 'jpg', 'png', 'svg', 'json', 'ttf'],  // Add 'mp3' to assetExts
  },
};
