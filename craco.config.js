const CracoAlias = require('craco-alias');

module.exports = ({ env }) => ({
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: 'jsconfig',
                baseUrl: './src'
            }
        }
    ]
});
