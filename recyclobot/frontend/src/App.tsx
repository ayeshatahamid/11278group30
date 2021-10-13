import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// pages
import { Home, Tutorial } from "./pages";
// components
// import { Menu } from "./components";

function App() {
  return (
    <BrowserRouter>
      {/* <Menu /> */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tutorial" exact component={Tutorial} />
        {/* <Route path="/about" exact component={About} />
		<Route path="/projects" exact component={Projects} />
    <Route path="*" component={NotFound} /> */}
      </Switch>
    </BrowserRouter>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
