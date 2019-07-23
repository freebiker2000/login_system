import React from 'react';
import AppNavbar from './component/App.navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingList from './component/ShoppingList';
import { Provider } from 'react-redux';
import store from './redux/store';
import ItemModal from './component/ItemModal';
import { Container } from 'reactstrap';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container>
          <ItemModal />
          <ShoppingList />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
