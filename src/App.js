import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

import Navbar from './components/layout/Navbar';
import {Footer} from './components/layout/Footer'
import Container from './components/layout/Container';

import Home  from './components/pages/Home';
import Cadastro from './components/pages/Cadastro';
import Catalogo from './components/pages/Catalogo';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      
      <Container customClass='min-height'>
        
        <Routes>
            <Route exact path='/'  element={<Home />}></Route>
            <Route exact path='/Cadastro'  element={<Cadastro />}></Route>
            <Route exact path='/Catalogo'  element={<Catalogo />}></Route>
                
        </Routes>
      </Container>

      <Footer />
    </Router>
    </div>
  );
}

export default App;
