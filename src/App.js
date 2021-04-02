
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import AddProducts from './Components/AddProducts/AddProducts';
import { createContext, useEffect, useState } from 'react';
import ManageProducts from './Components/ManageProducts/ManageProducts';
import CheckOut from './Components/CheckOut/CheckOut';
import LogIn from './Components/LogIn/LogIn';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Orders from './Components/Orders/Orders';
import NoMatch from './Components/NoMatch/NoMatch';

export const ShopContext = createContext();
export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    photo: '',
  });


  const [cakeShop, setCakeShop] = useState([]);
  useEffect(() => {
    fetch('https://lychee-custard-54199.herokuapp.com/cakeShop')
      .then(res => res.json())
      .then(data => setCakeShop(data))
  }, [])
  return (
    <UserContext.Provider value={[user, setUser]}>
      <ShopContext.Provider value={[cakeShop, setCakeShop]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Header />
              <Home />
            </Route>
            <Route path="/home">
              <Header />
              <Home />
            </Route>
            <PrivateRoute path="/addProducts">
              <AddProducts />
            </PrivateRoute>
            <Route path="/manageProducts">
              <ManageProducts />
            </Route>
            <PrivateRoute path="/cakeShop/:id">
              <Header /> 
              <CheckOut />
            </PrivateRoute>
            <Route path="/login">
              <LogIn />
            </Route>
            <PrivateRoute path="/orders">
              <Orders />
            </PrivateRoute>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Router>

      </ShopContext.Provider>

    </UserContext.Provider>

  );
}

export default App;
