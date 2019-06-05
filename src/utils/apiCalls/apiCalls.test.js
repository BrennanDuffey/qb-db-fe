import { fetchWithCount, fetchWithOptions } from './apiCalls';
import { mockTossups } from '../mockData';

describe('apiCalls', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockTossups)
      })
    })
  })

  describe('fetchWithCount', () => {
    it('should be called with the correct pararms', () => {
      const mockCount = 15;
      const expected = 'http://localhost:3000/api/v1/tossups/15';
      fetchWithCount(mockCount);
      expect(window.fetch).toHaveBeenCalledWith(expected)
    });
  });

  describe('fetchWithCount', () => {

  });
});