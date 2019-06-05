import tossupsReducer from './tossupsReducer';
import * as actions from '../actions';
import { mockTossup, mockTossups } from '../utils/mockData';

describe('tossupsReducer', () => {
  it('should return the default state', () => {
    const expected = [];
    const result = tossupsReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should be able to update state from default', () => {
    const expected = true;
    const result = tossupsReducer(false, actions.toggleLoading());
    expect(result).toEqual(expected);
  });

  it('should be able to update state', () => {
    const expected = false;
    const result = tossupsReducer(true, actions.toggleLoading());
    expect(result).toEqual(expected);
  });
});