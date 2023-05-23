import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';
import Home from './components/pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      
      <Container>
        <Routes>
            <Route exact path='./'  element={<Home />}></Route>
                
        </Routes>
      </Container>

      <Footer />
    </Router>
    </div>
  );
}

export default App;
