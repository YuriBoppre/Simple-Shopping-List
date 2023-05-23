import './App.css';
import { useState } from 'react';
import InputList from './components/Input/InputList';
import ShoppingList from './components/ShoppingList/ShoppingList';

function App() {
  const [input, setInput] = useState('');
  const [listProd, setListProd] = useState([]);

  return (
    <div className="container">
      <header>
        <div className="d-flex align-items-center pb-3 mb-4 border-bottom">
          <span className="fs-4">Lista de compras</span>
        </div>
      </header>

      <main>
        <ShoppingList listProd={listProd} />
        <InputList
          listProd={listProd}
          setListProd={setListProd}
          input={input}
          setInput={setInput}
        />
      </main>
    </div>
  );
}

export default App;
