import * as actions from '../actions';
import { mockTossups } from '../utils/mockData';

describe('actions', () => {
  describe('setTossups', () => {
    it('should have a type of SET_TOSSUPS', () => {
      const expected = 'SET_TOSSUPS';
      const result = actions.setTossups(mockTossups);
      expect(result.type).toEqual(expected);
    }); 

    it('should have a payload of tossups', () => {
      const expected = mockTossups;
      const result = actions.setTossups(mockTossups);
      expect(result.tossups).toEqual(expected);
    });
  });

  describe('toggleLoading', () => {
    it('should create an object with a type of TOGGLE_LOADING', () => {
      const expected = { type: 'TOGGLE_LOADING' };
      const result = actions.toggleLoading();
      expect(result).toEqual(expected);
    });

  });
});
