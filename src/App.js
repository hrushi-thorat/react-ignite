import React from "react";
import Home from "./pages/Home";
import GlobalStyle from "./components/GlobalStyling";
//pages components


function App() {
 
  return (
    <div className="App">
      <GlobalStyle/>
      <h2>Ignite</h2>
      <Home/>
    </div>
  );
}

export default App;
