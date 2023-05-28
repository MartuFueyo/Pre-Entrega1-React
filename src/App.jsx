import './App.css';
import Footer from './Componets/Footer';
import Header from './Componets/Header';
import ItemListContainer from './Componets/ItemListContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <ItemListContainer />
      <Footer />
    </div>
  );
}

export default App;
