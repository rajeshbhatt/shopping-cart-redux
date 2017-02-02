import { take, call, put, select, fork } from 'redux-saga/effects';
import {takeLatest} from "redux-saga";
import { apiSaga} from './../../sagas';
import {loadProductsSuccess, loadProductsFailure} from './actions';
import {LOAD_PRODUCTS} from './constants';

// Individual exports for testing
export function* defaultSaga() {
  // See example in containers/HomePage/sagas.js
}

export function* loadProducts(){
  console.log('before call............');
  const url = `/api/catalog`;
  yield apiSaga([url,{
    method: 'GET'
  }],loadProductsSuccess, loadProductsFailure)
}

export function* loadWatcher(){
  console.log('inosde loadWatcher',LOAD_PRODUCTS);
  yield fork(takeLatest, LOAD_PRODUCTS, loadProducts);
}

export function* load(){
  console.log('i am in loadProducts saga');
  yield fork(loadWatcher);
}

// All sagas to be loaded
export default [
  defaultSaga,
  load
];
