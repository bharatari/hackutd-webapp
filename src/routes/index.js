import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import Schedule from './Schedule';
import Event from './Event';
import Announcements from './Announcements';
import Map from './Map';
import Social from './Social';
import NotFound from './NotFound/View';

export default (store) => (
  <Route path="/">
    <IndexRoute component={Schedule} />
    <Route path="/app/event/:id" component={Event} />
    <Route path="/app/announcements" component={Announcements} />
    <Route path="/app/map" component={Map} />
    <Route path="/app/social" component={Social} />
    <Route path="/app/404" component={NotFound} />
    <Redirect from="*" to="/app/404" />
  </Route>
);
