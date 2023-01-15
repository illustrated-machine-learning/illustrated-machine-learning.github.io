import './App.css';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';

let showNav = false;

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
