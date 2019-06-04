import React from 'react';
import { Route } from 'react-router-dom';
import SplashPage from '../SplashPage'
import Controls from '../../containers/Controls'



function App() {

const grabTossups = async () => {
  const response = await fetch('http://localhost:3000/api/v1/tossups/22&18/8/100');
  console.log('response', response)
  if (!response.ok) {
    throw Error('Error fetching tossups')
  }
  const tossups = await response.json()
  console.log(tossups)
}

  return (
    <main className="">
      <Route exact path='/' component={SplashPage} />
      <Route exact path='/Controls' component={Controls} />

      <button onClick={grabTossups}>Stuff </button>
    </main>
  );
}

export default App;
