import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Head from './components/Head';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import Responses from './pages/Responses';
import ListPage from './pages/ListPage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AddResponse from './components/AddResponse';
import AddField from './components/AddField';


function App() {
  return (

    <BrowserRouter>
    <Head/>
    <Route path="/addResponse">
      <AddResponse/>
    </Route>
    <Route path="/addField">
      <AddField/>
    </Route>
    <Route path="/login">
      <Login/>
    </Route>
    <Route path="/signUp">
      <SignUp/>
    </Route>
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
