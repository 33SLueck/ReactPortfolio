
import './App.css';
import ScrollButton from './components/ScrollButton';
import {TopNav} from './components/TopNav';
import { Home , About, Contact, Services } from './components/pages';
import { BrowserRouter } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">  
    <BrowserRouter>
      <TopNav/>
      <Home/>
      <Services/>
      <About/>
      <Contact/>
      <ScrollButton/>
      </BrowserRouter>
    </div>
  );
}

export default App;
