import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createGlobalStyle } from 'styled-components'
import BottomNavbar from './components/BottomNavbar/BottomNavbar';
import SearchSection from './components/SearchSection/SearchSection';
import TopNavbar from './components/TopNavbar/TopNavbar';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <TopNavbar />
      <SearchSection />
      <BottomNavbar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  
`