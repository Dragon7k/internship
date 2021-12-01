import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Head from './components/Head';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import Responses from './pages/Responses';
import ListPage from './pages/ListPage';


function App() {
  return (
    <BrowserRouter>
    <Head/>
    <Route path="/responses">
      <Responses/>
    </Route>
    <Route path="/fields">
      <ListPage/>
    </Route>
    </BrowserRouter>
  );
}

export default App;
