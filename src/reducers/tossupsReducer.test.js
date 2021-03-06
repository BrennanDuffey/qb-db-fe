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
    const expected = mockTossups;
    const result = tossupsReducer([], actions.setTossups(mockTossups));
    expect(result).toEqual(expected);
  });

  it('should be able to update state', () => {
    const expected = [mockTossup];
    const result = tossupsReducer(mockTossups, actions.setTossups([mockTossup]));
    expect(result).toEqual(expected);
  });
});