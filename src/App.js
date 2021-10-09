import HomePage from './Components/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SheetsPage from './Components/SheetsPage/SheetsPage';

function App() {
  return (
    <div>
      <Router>

        <Switch>
          <Route path='/handle/:handle' exact component={SheetsPage} />
          <Route path='/' component={HomePage} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
