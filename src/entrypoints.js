'use strict';

module.exports = function (server, plugin) {

    server.route({
        method: 'GET',
        path: '/{filename}',
        directory: {
            path: plugin.options.path
        },
        handler: {
            file: function (request) {
                return request.params.filename;
            }
        }
    });

};
