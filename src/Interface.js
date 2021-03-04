import { Switch, Route, Redirect } from "react-router-dom";
import Header from './components/Header'
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from './pages/Home'

const PrivateRoute = ({path, children}) => (
  <Route path={ path }>
    { true ? children : <Redirect to="/" />}
  </Route>
)

export default function Interface() {
  return (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  </>
  )
}
