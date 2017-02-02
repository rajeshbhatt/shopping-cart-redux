/**
 * Created by bipinbhandari on 12/12/16.
 */

import { call, put, select, fork } from 'redux-saga/effects';
// import {generateMessage} from "../utils/formHelpers"
import request from './utils/request';
// import {loading} from "../preferences/actions";

export function* apiSaga(args, successAction, errorAction, successResponseCallback, errorResponseCallback) {
    try {
        // yield put(loading(true));

        const response = yield call(request, ...args);

        console.log("Response", response);

        if (successResponseCallback) successResponseCallback(response);

        if (successAction instanceof Array){
            yield successAction.map((s)=> put(s(response)));
        }else{
            yield put(successAction(response))
        }

    } catch(err) {
        console.warn("Error: ", err);
        if (!err || !err.response) return;
        const errCode = err.response.status;
        const responseContentType = err.response.headers.get("Content-Type");

        let details;
        if (responseContentType.indexOf("application/json")>-1){
            details = yield err.response.json();
            // details = generateMessage(details);
        }else
            details = yield err.response.text();

        if (errorResponseCallback) errorResponseCallback(errCode, details);

        if (errorAction instanceof Array)
            yield errorAction.map((s)=> put(s(errCode, details)));
        else
            yield put(errorAction(errCode, details))
    } finally {
        // yield put(loading(false))
    }
}
