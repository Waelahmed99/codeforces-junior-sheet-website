import HomePage from './Components/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HandlePage from './Components/HandlePage/HandlePage';

function App() {
  return (
    <div>
      <Router>

        <Switch>
          <Route path='/:handle' exact component={HandlePage} />
          <Route path='/' component={HomePage} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
