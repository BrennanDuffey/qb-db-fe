import React from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom';

function App() {
  return (
    <Main className="">
      <Route exact path='/' component={SplashPage}/>
    </Main>
  );
}

export default App;
