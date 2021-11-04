import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import ChatRoom from './components/ChatRoom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <ChatRoom />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
