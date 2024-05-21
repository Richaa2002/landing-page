import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';


function App() {
  const haggu = "Aniket";
  
  return (
    <div>
      <Header />
      <Home />
      {10+20}<br/>
      {haggu}<br/>
      asdfansdsf
      <Home/>
      <Footer />
      
    </div>
  );
}

export default App;
