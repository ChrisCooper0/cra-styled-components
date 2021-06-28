import { Navbar, Footer } from "./components";
import Home from "./pages/HomePage/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/portfolio" exact component={Portfolio}></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
