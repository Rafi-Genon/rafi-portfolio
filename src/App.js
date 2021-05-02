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

        </Switch>
      </Router>
    </>
  );
}

export default App;
