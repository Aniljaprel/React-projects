
import './App.css';
import Header from './common/header/Header'
import Pages from './pages/Pages';
import {
  BrowserRouter as
  Router,
  Switch,
  Route,
  BrowserRouter} from "react-router-dom";

function App() {
  return (
    <>
<BrowserRouter>
      <Router>
        <Header />
        <Switch>
          
            <Route path="/" exact >
            <Pages/>

          </Route>

        </Switch>
      </Router>
      </BrowserRouter>
    </>
  );
}

export default App;
