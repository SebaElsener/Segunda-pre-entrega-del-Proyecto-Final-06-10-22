import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemListContainer/ItemList/Item/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <header className='App-header'>
          <NavBar />
        </header>
        <Routes>
          <Route exact path='/' element={<ItemListContainer greeting={'¡Hola, bienvenido!'} />} />
          <Route exact path='/ItemListContainer' element={<ItemListContainer />} />
          <Route exact path='/Item/:id' element={<ItemDetailContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
