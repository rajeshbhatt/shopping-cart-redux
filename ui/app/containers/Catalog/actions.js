/*
 *
 * Catalog actions
 *
 */

import {
  DEFAULT_ACTION,
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_FAILURE
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function loadProducts(){
  return {
    type: LOAD_PRODUCTS
  }
}
export function loadProductsSuccess(products){
  console.log('products loaded....',products);
  return {
    type: LOAD_PRODUCTS_SUCCESS,
    products
  }
}

export function loadProductsFailure(){
  return {
    type: LOAD_PRODUCTS_FAILURE,
    error
  }
}
