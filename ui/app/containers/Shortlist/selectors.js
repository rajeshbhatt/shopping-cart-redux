import { createSelector } from 'reselect';

/**
 * Direct selector to the shortlist state domain
 */
const selectShortlistDomain = () => (state) => state.get('shortlist');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Shortlist
 */

const makeSelectShortlist = () => createSelector(
  selectShortlistDomain(),
  (substate) => substate.toJS()
);

export default makeSelectShortlist;
export {
  selectShortlistDomain,
};
