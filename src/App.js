
import './App.css';
import IndexPage from './IndexPage';
import LoginPage from './Login/LoginPage';
import RegisterPage from './Login/RegisterPage';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      
       <Switch>
         {/*homepage*/}
           <Route path = '/' component = {IndexPage} exact />
         {/*prospectivePages*/}
           <Route path = "/login" component = {LoginPage} />
           <Route path = "/register" component = {RegisterPage} />
           </Switch>
           </Router>
  );
}

export default App;
