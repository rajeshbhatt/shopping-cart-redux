import { createSelector } from 'reselect';

/**
 * Direct selector to the pdp state domain
 */
const selectPdpDomain = () => (state) => state.get('pdp');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Pdp
 */

const makeSelectPdp = () => createSelector(
  selectPdpDomain(),
  (substate) => substate.toJS()
);

export default makeSelectPdp;
export {
  selectPdpDomain,
};
