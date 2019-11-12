import React from 'react';
import { BrowserRouter, Switch , Route, Redirect } from 'react-router-dom';

import Layout from './Layout';
import Home from '../pages/Home';
import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';
import NotFound from '../pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/badges' component={Badges} />
          <Route exact path='/badges/new' component={BadgeNew} />
          <Route component={NotFound} />
          <Redirect from="*" to="/404" />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App;