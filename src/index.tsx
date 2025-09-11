import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';

import { Header } from './components/Header.jsx';
import { Home } from './pages/Home/index.jsx';
import { NotFound } from './pages/_404.jsx';
import './style.css';
import { Order } from './pages/Order/index.js';
import { Checkout } from './pages/Checkout/index.js';

export function App() {
	return (
		<LocationProvider>
			<Header />
			<div>
				<Router>
					<Route path="/" component={Home} />
					<Route path='/order' component={Order} />
					<Route path='/checkout' component={Checkout} />
					<Route default component={NotFound} />
				</Router>
			</div>
		</LocationProvider>
	);
}

render(<App />, document.getElementById('app'));
