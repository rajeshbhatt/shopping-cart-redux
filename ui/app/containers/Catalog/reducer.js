/*
 *
 * Catalog reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_FAILURE
} from './constants';

const initialState = fromJS({});

function catalogReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:{
        return state;
    }

    case LOAD_PRODUCTS:{
      return state.set('loading',true)
                  .set('products',null);
    }
    case LOAD_PRODUCTS_SUCCESS : {
      console.log('state',state);
      console.log('state afeter',state.set('loading',false));
      return state.set('products',action.products.products);
    }
    default:
      return state;
  }
}

export default catalogReducer;
