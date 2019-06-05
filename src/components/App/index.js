import React from 'react';
import { Route } from 'react-router-dom';
import SplashPage from '../SplashPage';
import Controls from '../../containers/Controls';
import QuizContainer from '../../containers/QuizContainer';
import StudyContainer from '../../containers/StudyContainer';
import PropTypes from "prop-types";




function App() {
  return (
    <main className="">
      <button>Stuff </button>
      <Route exact path='/' component={SplashPage} />
      <Route exact path='/Controls' component={Controls} />
      <Route exact path='/Quiz' component={QuizContainer} />
      <Route exact path='/Study' component={StudyContainer} />
    </main>
  );
}

App.propTypes = {};

export default App;
