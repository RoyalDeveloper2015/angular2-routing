import { provideRouter , RouterConfig } from '@angular/router';
import { Route1 } from './route1/route';
import { Route2 } from './route2/route';

const routes:RouterConfig = [
  {
    path: 'route1',
    component: Route1
  },
  {
    path: 'route2',
    component: Route2
  }
];

export const appRouterProviders = [
  provideRouter(routes)
]
