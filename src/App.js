import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cart from './Cart';
import SignIn from './SignIn';
import CreateAccount from './CreateAccount';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/cart">
            <Header />
            <Cart />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/createaccount">
            <CreateAccount />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
