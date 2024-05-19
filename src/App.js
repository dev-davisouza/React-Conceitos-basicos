import './App.css';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './pages/Home'
import Company from './pages/Company';
import Contact from './pages/Contact'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
/*
import Person from './components/Person';
import List from './components/List';
import Event from './components/Event';
import Form from './components/Form';
import Condition from './components/Condition';
import FWList from './components/FWLists';
import { useState } from 'react';
import Greet from './components/Greet';
import YourName from './components/YourName';
*/

function App() {
  /*
    function sum (a,b) {
      return a+b
    }

    // FrameWorks JS:
    const myItems = ['Angular', 'React', 'Vue']

    const [name, setName] = useState()

  return (
    <div className="App">
      <h1>My Project</h1>
      <p>{sum(1,4)}</p>

      <Person age="28" name="Davizinho" country="Brasil" gender="Depressivo" />

      <List />

      <Event />

      <Form />

      <Condition />

      <FWList Items={myItems}/>

      <FWList Items={[]}/>
      
      <YourName setName={setName} />

      <Greet name={name}/>
    </div>
  );
  */
  return (
    
    <Router>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/company' element={<Company/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>

      <Footer />
    </Router>
  )
}

export default App;
