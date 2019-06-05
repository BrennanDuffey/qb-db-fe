import isLoadingReducer from './isLoadingReducer';
import * as actions from '../actions';

describe('isLoadingReducer', () => {
  it('should return the default state', () => {
    const expected = false;
    const result = isLoadingReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should be able to update state from default', () => {
    const expected = true;
    const result = isLoadingReducer(false, actions.toggleLoading());
    expect(result).toEqual(expected);
  });

  it('should be able to update state', () => {
    const expected = false;
    const result = isLoadingReducer(true, actions.toggleLoading());
    expect(result).toEqual(expected);
  });
});