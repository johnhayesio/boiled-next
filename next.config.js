// Import packages
const path = require('path')

module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes packages that depend on fs/module module
    if (!isServer) {
      config.node = { fs: 'empty', module: 'empty' }
    }

    config.resolve.alias['components'] = path.join(__dirname, 'components')
    config.resolve.alias['common'] = path.join(__dirname, 'components', 'common')
    config.resolve.alias['consts'] = path.join(__dirname, 'consts')

    return config
  },
}
