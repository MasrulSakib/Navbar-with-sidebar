import './App.css';
import Footer from './Footer/Footer';
import Navbar from './Header/Navbar';
import Home from './Layout/Home';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
