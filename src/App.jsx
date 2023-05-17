import './App.css';
import Header from "./componentes/Header"
import Body from "./componentes/Body"
import Footer from "./componentes/Footer"

function App() {
  return (
    <div className="App">
      <div className="Content">
        <Header/>
        <Body/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
