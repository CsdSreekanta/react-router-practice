import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import Contact from './components/Contact/Contact';
import {Routes, Route} from 'react-router-dom'
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
<Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/friends' element={<Friends></Friends>}></Route>
      <Route path='/about' element={<Contact></Contact>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>

    </Routes>
    </div>
  );
}

export default App;
