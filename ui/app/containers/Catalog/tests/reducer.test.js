
import { fromJS } from 'immutable';
import catalogReducer from '../reducer';

describe('catalogReducer', () => {
  it('returns the initial state', () => {
    expect(catalogReducer(undefined, {})).toEqual(fromJS({}));
  });
});
