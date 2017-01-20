import { createSelector } from 'reselect';

/**
 * Direct selector to the catalog state domain
 */
const selectCatalogDomain = () => (state) => state.get('catalog');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Catalog
 */

const makeSelectCatalog = () => createSelector(
  selectCatalogDomain(),
  (substate) => substate.toJS()
);

export default makeSelectCatalog;
export {
  selectCatalogDomain,
};
