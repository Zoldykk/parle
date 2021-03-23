import {Route, BrowserRouter as Router} from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import './app.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Route path='/' exact component={Login}/>
        <Route path='/register' component={Register}/>
      </div>
    </Router>
  );
}

export default App;
