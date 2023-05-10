import './App.css';
import Footer from './Componets/Footer';
import Header from './Componets/Header';
import ItemListContainer from './Componets/ItemListContainer';

function App() {
  return (
    <div>
      <Header />
      <ItemListContainer greeting={"Se vienen cosas Nuevas"}/>
      <Footer />
    </div>
  );
}

export default App;
