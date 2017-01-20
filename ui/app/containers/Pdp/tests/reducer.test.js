
import { fromJS } from 'immutable';
import pdpReducer from '../reducer';

describe('pdpReducer', () => {
  it('returns the initial state', () => {
    expect(pdpReducer(undefined, {})).toEqual(fromJS({}));
  });
});
