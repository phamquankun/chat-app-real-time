import './App.css';
import Login from './components/Login';
import ChatRoom from './components/ChatRoom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import AuthProvider from './Context/AuthProvider'
function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <ChatRoom />
          </Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
