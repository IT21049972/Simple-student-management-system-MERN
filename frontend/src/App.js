//import logo from './logo.svg';

import './App.css';
import Header from './components/Header';
import AddStudent from './components/AddStudent';
import {BrowserRouter as Router, Route} from "react-router-dom";
import AllStudents from './components/AllStudents';


function App() {
  return (
    <Router>
    <div>
      <Header/>
      <Route path="/" exact component={AllStudents} />
      <Route path="/add" exact component={AddStudent} />

    </div>
    </Router>
  );
}

export default App;
