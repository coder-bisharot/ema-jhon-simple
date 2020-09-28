import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './Components/Review/Review';
import Manaje from './Manage/Manage';
import Footer from './Manage/Footer/Footer';
import Nomatch from './Components/Nomatch/Nomatch';
import ProductDetails from './Components/ProductDetails/ProductDetails';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/Shop">
          <Shop></Shop>
          </Route> 
          <Route path="/Review">
            <Review></Review>
          </Route>
          <Route path="/Manage">
           <Manaje></Manaje>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/Product/:key">
            <ProductDetails></ProductDetails>
          </Route>
          <Route path="/home">
            <Shop></Shop>
          </Route>
          
          <Route path="*">
            <Nomatch></Nomatch>
          </Route>
        </Switch>
      </Router> 
      <Footer></Footer>
    </div>
  );
}

export default App;
