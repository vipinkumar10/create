import "./App.css";
import Header from "./components/Header";
import { Modal, Button } from "react-bootstrap";
import Galleries from "./components/Galleries";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Venue from "./components/Venue";
import Services from "./components/Services";
import Editing from "./components/Editing";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        {/* <main>
          <section> */}
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/about" exact component={About}/> */}

          <Route path="/galleries" exact component={Galleries} />
          <Route path="/venue" exact component={Venue} />
          <Route path="/services" exact component={Services} />
          <Route path="/editing" exact component={Editing} />
        </Switch>
        {/* </section>
        </main> */}
      </Router>
      <Footer />
    </div>
  );
}

export default App;
