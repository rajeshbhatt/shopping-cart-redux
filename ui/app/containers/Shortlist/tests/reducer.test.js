
import { fromJS } from 'immutable';
import shortlistReducer from '../reducer';

describe('shortlistReducer', () => {
  it('returns the initial state', () => {
    expect(shortlistReducer(undefined, {})).toEqual(fromJS({}));
  });
});
