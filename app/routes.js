import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import About from './components/About';
import Spotlight from './components/Spotlight';
import PhotoGallery from './components/PhotoGallery';
import KickStartApp from './containers/KickStartApp';
import KickStartForm from './containers/KickStartForm';
import CommentsComp from './components/CommentsComp'
import Login from './components/forms/Login'
import Dsr from './components/forms/Dsr'
import Navitri from './components/forms/Navitri'
import Mypage from './components/forms/myPage'
import KnowledgeManagement from './components/KnowledgeManagement'

export default (
	<Router path="/" component={KickStartApp} history={browserHistory}>
		<IndexRoute component={Login} />
		<Route path="/about" component={About} />
		<Route path="/dsr" component={Dsr} />
		<Route path="/myPage" component={Mypage} />
		<Route path="/login" component={Login} />
		<Route path="/Spotlight" component={Spotlight} />
		<Route path="/Navitri" component={Navitri} />
		<Route path="/view/:id" component={CommentsComp} />
		<Route path="/PhotoGallery" component={PhotoGallery} />
		<Route path="/RegistrationForm" component={KickStartForm} />
		<Route path="/KnowledgeManagement" component={KnowledgeManagement} />

	</Router>
);
