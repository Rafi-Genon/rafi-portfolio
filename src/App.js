import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import NavbarMain from './Components/NavabarMain/NavbarMain';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Resume from './Components/Resume/Resume';
import Blog from './Components/Blog/Blog';
import WhatIDO from './Components/WhatIDo/WhatIDO';

function App() {
  return (
    <>
      <Router>
        <NavbarMain />
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/projects">
            <Projects />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/iDo">
            <WhatIDO></WhatIDO>
          </Route>
          
          <Route path="/blog">
            <Blog></Blog>
          </Route>

          <Route path="/resume">
            <Resume></Resume>
          </Route>

        </Switch>
      </Router>
    </>
  );
}

export default App;
