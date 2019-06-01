const tossupsReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_TOSSUPS':
      return action.tossups;
    default:
      return state;
  }
}

export default tossupsReducer