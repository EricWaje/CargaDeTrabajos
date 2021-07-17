import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import { UserProvider } from './context/UserContext';
import Login from './pages/Login/index';
import Home from './pages/Home/Home';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Proyectos from './components/Proyectos/Proyectos';

function App() {
  return (
    <>
      <UserProvider>
        <Router>
          <PrivateRoute exact path="/home" component={Home} />
          <Route exact path="/proyectos" component={Proyectos} />
          <Route exact path="/" component={Login} />
        </Router>
      </UserProvider>
    </>
  );
}

export default App;
