import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from '../navigation/Navigation';
import Footer from './footer/Footer';
import Header from './header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import shopingReducer from '../../redux/reducers/reducer'

const store = createStore(shopingReducer);

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Navigation />
          <Footer />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
