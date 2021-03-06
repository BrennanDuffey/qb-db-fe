import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import SplashPage from '../SplashPage';
import PageNotFound from '../PageNotFound';
import Controls from '../../containers/Controls';
import QuizContainer from '../../containers/QuizContainer';
import StudyContainer from '../../containers/StudyContainer';
import PropTypes from "prop-types";




function App() {
  return (
    <main className="app">
      <div className='header-section'>
        <header>
          <NavLink to='/' className='nav'>Home</NavLink>
          <NavLink to='/Controls' className='nav'>Controls</NavLink>
        </header>
      </div>
      <Switch>
        <Route exact path='/' component={SplashPage} />
        <Route exact path='/Controls' component={Controls} />
        <Route exact path='/Quiz' component={QuizContainer} />
        <Route exact path='/Study' component={StudyContainer} />
        <Route component={PageNotFound} />
      </Switch>
    </main>
  );
}

App.propTypes = {};

export default App;
