import HomePage from './Components/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProblemsPage from './Components/ProblemsPage';

function App() {
  return (
    <div>
      <Router>

        <Switch>
          <Route path='/handle/:handle' exact component={ProblemsPage} />
          <Route path='/' component={HomePage} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
