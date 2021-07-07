import React from "react";
import Home from "./pages/Home";
import GlobalStyle from "./components/GlobalStyling";
//pages components

import { Route } from "react-router";
import Nav from "./components/Nav";
function App() {
 
  return (
    <div className="App">
      <GlobalStyle/>
    <Route path={["/game/:id","/"]}>
      <Nav/>
      <Home/>
      </Route>
    </div>
  );
}

export default App;
