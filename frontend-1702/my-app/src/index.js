import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Pages/Main';
import Noticias from './Pages/Noticias';
import Nosotros from './Pages/Nosotros';
import Article from "./Pages/Article";
import SimpleReactLightbox from 'simple-react-lightbox'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



ReactDOM.render(
  
  	<SimpleReactLightbox>

	  	<Router>
	  		<Switch>
		  		<Route exact path="/" component={Main} />
		   	 	<Route path="/nosotros" component={Nosotros} />
		   	 	<Route exact path="/noticias" component={Noticias} />
		   	 	<Route exact path="/noticias/:count" component={Noticias} />
		   	 	<Route exact path="/article/:id" component={Article} />
	   	 	</Switch>
	   	 </Router >
    </SimpleReactLightbox>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

