import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Landing from './component/landing/landing';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Route path = '/' component = { Landing } />
      </div>
    </Router>
  );
}

export default App;
