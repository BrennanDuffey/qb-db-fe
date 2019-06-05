import { fetchWithCount, fetchWithOptions } from './apiCalls';
import { mockTossups } from '../mockData';

describe('apiCalls', () => {
  let mockCount;
  let mockSelectedCategories;

  beforeEach(() => {
    mockCount = 15;
    mockSelectedCategories = [19, 25]
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ tossups: mockTossups})
      });
    });
  });

  describe('fetchWithCount', () => {
    it('should be called with the correct pararms', () => {
      const expected = 'http://localhost:3000/api/v1/tossups/15';
      fetchWithCount(mockCount);
      expect(window.fetch).toHaveBeenCalledWith(expected)
    });

    it('should return correct response if ok', async () => {
      const result = await fetchWithCount(mockCount);
      expect(result.tossups).toEqual(mockTossups);
    });

    it('should return an error if status is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      })

      await expect(fetchWithCount(mockCount)).rejects.toEqual(Error('Hmm something went wrong please refresh the page'));
    });
  });

  describe('fetchWithOptions', () => {

  });
});