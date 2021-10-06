import './App.css';
import HomePage from './Components/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HandlePage from './Components/HandlePage';

function App() {
  return (
    <div>
      <Router>

        <Switch>
          <Route path='/handle' exact component={HandlePage} />
          <Route path='/handle/:handle' exact component={HomePage} />
          <Route path='/' component={HomePage} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
