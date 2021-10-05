import './App.css';
import HomePage from './Components/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
