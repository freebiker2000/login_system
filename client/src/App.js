import React from 'react';
import AppNavbar from './component/App.navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingList from './component/ShoppingList';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <ShoppingList />
      </div>
    </Provider>
  );
}

export default App;
