/* eslint-disable no-unused-vars */
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PageLoader } from 'components/pageLoader';
import modules from 'views'
import { RouteGuard } from './routeConfig'

const PageNotFound = lazy(() => import('components/page404.component'))

export default function Routes() {
    return (
      <Router>
        <Suspense fallback={<PageLoader />}>
          <Switch>
            {
            modules?.map((module) => (
              <RouteGuard key={module.name} {...module.routeProps} />
            ))
          }

            <Route component={PageNotFound} />
          </Switch>
        </Suspense>
      </Router>
    );
}
