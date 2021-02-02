import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Container} from 'react-bootstrap';

import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';


const App = () => {
  return (
    <Router>
      <Header />
      {/* py-3 is padding on the y-axis */}
      <main className='py-3'>
        <Container>
          {/* setting up a route that renders HomeScreen with an exact the url must be /   */}
          <Route path='/' component={HomeScreen} exact/>
          <Route path='/product/:id' component={ProductScreen} exact/>
          {/* adding a ? makes the id optional */}
          <Route path='/cart/:id?' component={CartScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
