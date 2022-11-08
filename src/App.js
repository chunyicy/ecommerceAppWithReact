import Nav from './components/Nav';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer';
import Books from './pages/Books';
import {books} from '../src/data'
import BookInfo from './pages/BookInfo';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Route path='/' exact component={Home}/>
        <Route path='/about' exact component={About}/>
        <Route path='/books' exact render={()=><Books books={books}/>}/>
        <Route path='/books/:id' render={()=><BookInfo books={books}/>}/>
        <Route path='/contact' exact component={Contact}/>

        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
