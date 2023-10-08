import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import About from './components/About'
import Home from './components/Home'
import NotFound from './components/NotFound'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/about" component={About} />
      <Route exact path="/bad-path" component={NotFound} />
      <Redirect to="/bad-path" />
    </Switch>
  </BrowserRouter>
)

export default App
