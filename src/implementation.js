'use strict';
var Path = require('path');
var Hapi = require('hapi');

var plugin = {};

var constructor = function (options) {
    plugin.options = options || {};
    return plugin;
};

plugin.sayHey = function (request, reply) {
    reply({text: 'hey'});
};

module.exports = constructor;




var server = new Hapi.Server({
    connections: {
        routes: {
            files: {
                relativeTo: Path.join(__dirname, 'public')
            }
        }
    }
});

