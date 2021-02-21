import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Landing from './component/landing/landing';
import ShareStory from './component/shareStory/shareStory';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Route path = '/' exact strict component = { Landing } />
        <Route path = '/sharestory' exact strict component = { ShareStory} />
      </div>
    </Router>
  );
}

export default App;
