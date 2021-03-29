import { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cart from './Cart';
import SignIn from './SignIn';
import CreateAccount from './CreateAccount';
import { connect } from 'react-redux';

function mapState(state) {
  return {
    basket: state.basket,
    user: state.user
  }
}
const mapDispatch = (dispatch) => {
  return {
      setBasket: (action) => dispatch(action),
      setUser: (action) => dispatch(action)
  }
}

function App(props) {
  const {user, setUser, basket, setBasket } = props;
  //pick basket from localstorage
  useEffect(() => {
    const localBasket = JSON.parse(localStorage.getItem('basket'))
    if(localBasket) {
      const action = {
        type: 'SET_BASKET',
        payload: localBasket
      }
      setBasket(action)
    }
  }, [setBasket])
  //set BASKET in local storage
  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basket))
  }, [basket])
  //pick user from localstorage
  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem('user'))
    if(localUser) {
      setUser({
        type: 'SET_USER',
        payload: localUser
      })
    }
  }, [setUser])
  //set USER in localstorage
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])

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

export default connect(mapState, mapDispatch)(App);
