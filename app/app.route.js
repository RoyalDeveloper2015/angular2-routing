"use strict";
var router_1 = require('@angular/router');
var route_1 = require('./route1/route');
var route_2 = require('./route2/route');
var routes = [
    {
        path: 'route1',
        component: route_1.Route1
    },
    {
        path: 'route2',
        component: route_2.Route2
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.route.js.map