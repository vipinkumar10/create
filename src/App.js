
import './App.css';
import Header from './components/Header';

import Galleries from './components/Galleries';
import Home from './components/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import Footer from './components/Footer';
import Venue from './components/Venue';
import Services from './components/Services';
import Editing from './components/Editing';
import Sidebar from './components/Sidebar';
function App() {
  return (
   <div className="App">
  
  <Router>
   <main>
    <section>
    <Header />
    
   
        <Switch>
        <Route path="/" exact component={Home}/>
        {/* <Route path="/about" exact component={About}/> */}
      
        <Route path="/galleries" exact component={Galleries}/>
     
        <Route path="/venue" exact component={Venue}/>
        <Route path="/services" exact component={Services}/>
        <Route path="/Editing" exact component={Editing}/>

      </Switch>
        
    </section>
    </main>
    </Router>
  <Footer /> 
</div>
  );
}

export default App;
