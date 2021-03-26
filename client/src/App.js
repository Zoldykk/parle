import {Route, BrowserRouter as Router} from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Route path='/' exact component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/home' component={Home}/>
      </div>
    </Router>
  );
}

export default App;