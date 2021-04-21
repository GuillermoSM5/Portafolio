import React from 'react';
import Layout from './Components/Layout/Layout';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';

function App() {
	return (
		<>
			<Layout>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/about' component={About} />
					<Route path='/projects' component={Projects} />
					<Route path='/skills' component={Skills} />
				</Switch>
			</Layout>
		</>
	);
}

export default App;
