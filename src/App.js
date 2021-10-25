import React, { useState } from "react";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BottomNavbar from "./components/BottomNavbar/BottomNavbar";
import SearchSection from "./components/SearchSection/SearchSection";
import TopNavbar from "./components/TopNavbar/TopNavbar";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home";
import ViewDetails from "./pages/ViewDetails/ViewDetails";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    window.addEventListener("onload", setLoading(false));
    return () => {
      window.removeEventListener("onload", setLoading(true));
    };
  }, []);

  const hundleScroll = () => {
    if (window.scrollY >= 400) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };



  useEffect(() => {
    window.addEventListener("scroll", hundleScroll);
    return () => {
      window.removeEventListener("scroll", hundleScroll);
    };
  }, []);

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <Router>
          <TopNavbar />
          <div className={navbar ? "fixed__Navbar" : ""}>
            <SearchSection />
            <BottomNavbar />
          </div>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/products/:id">
              <ViewDetails />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
          </Switch>
        </Router>
      )}
    </>
  );
}

export default App;
