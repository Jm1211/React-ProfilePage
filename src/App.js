
import './app.css';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
  

  return (
    <div className="app">
      <Header/>
      <div id='portfolio'>
      <Projects/>
      </div>
      <Footer/>
      
    </div>
  );
}

export default App;
