import React from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createGlobalStyle } from 'styled-components'
import BottomNavbar from './components/BottomNavbar/BottomNavbar';
import SearchSection from './components/SearchSection/SearchSection';
import TopNavbar from './components/TopNavbar/TopNavbar';
import { selectedProducts } from './features/products/ProductsSlice';
import Home from './pages/Home';
import ViewDetails from './pages/ViewDetails/ViewDetails';

function App() {
  const { user } = useSelector(selectedProducts);

  return (
    <>
    {user ? (
      <Router>
      <TopNavbar />
      <SearchSection />
      <BottomNavbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products/:id">
          <ViewDetails />
        </Route>
      </Switch>
    </Router>
    ) : 'No User'}
    
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  
`