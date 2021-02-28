import { Switch, Route, Redirect } from "react-router-dom";
import Home from './pages/Home'

const PrivateRoute = ({path, children}) => (
  <Route path={ path }>
    { true ? children : <Redirect to="/" />}
  </Route>
)

export default function Interface() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
    </Switch>
  )
}
