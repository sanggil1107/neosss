import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Register } from './index';

const Router = () => (
	<Switch>
		{/* <Route exact path="/" component={Home} /> */}
		<Route path="/Register" component={Register} />
	</Switch>
);

export default Router;