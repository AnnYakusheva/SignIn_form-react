import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { legacy_createStore } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './redux/reducers/rootReducer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const store = legacy_createStore(
  rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path='*' element={<App/>}></Route>
      </Routes>
    </Provider>
  </BrowserRouter>
</React.StrictMode>
);
