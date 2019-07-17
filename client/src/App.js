import React from 'react';
import AppNavbar from './component/App.navbar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ShoppingList from './component/ShoppingList';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <ShoppingList />
    </div>
  );
}

export default App;
