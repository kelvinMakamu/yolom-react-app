import React from 'react';
import '../styles/App.css';
import Header from './Header';
import ProductControl from './ProductControl';
import AboutUs from './AboutUs';
import Footer from './Footer';

function App(){
  return (
    <React.Fragment>
    	<div>
    		<Header/>
    		<ProductControl/>
    		<AboutUs/>
    		<Footer/>
    	</div>
    </React.Fragment>
  );
}

export default App;
