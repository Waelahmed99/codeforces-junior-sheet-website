import HomePage from './Components/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HandlePage from './Components/HandlePage/HandlePage';
import SheetPage from './Components/SheetPage';
import HandleModal from './Components/HomePage/HandleModal';

function App() {
  return (
    <div>
      <Router>

        <Switch>
          <Route path='/feed/:name' exact component={HandleModal} />
          <Route path='/:handle/:name' exact component={HandlePage} />
          <Route path="/:handle/feed/:name" exact component={SheetPage} />
          <Route path='/' component={HomePage} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
