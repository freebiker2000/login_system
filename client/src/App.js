import React, { useEffect } from 'react';
import AppNavbar from './component/App.navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingList from './component/ShoppingList';
import { Provider } from 'react-redux';
import store from './redux/store';
import ItemModal from './component/ItemModal';
import { Container } from 'reactstrap';
import { loadUser } from './redux/action/authAction';

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
