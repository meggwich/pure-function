const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common.config.cjs');

const productionConfig = require('./webpack.production.config.cjs');

const developmentConfig = require('./webpack.development.config.cjs');

module.exports = (env) => {
    if (env.development) {
        return merge(commonConfig, developmentConfig);
    }
    return merge(commonConfig, productionConfig);
}