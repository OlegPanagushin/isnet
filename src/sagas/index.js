import { takeLatest, put } from "redux-saga/effects";
import * as consts from "../constants";
import links from "../services/Links";
import users from "../services/Users";
import products from "../services/Products";

function* loadAppFlow() {
  yield put({ type: consts.GOT_USERS, users });
  yield put({ type: consts.GOT_PRODUCTS, products });
  yield put({ type: consts.GOT_LINKS, links });
}

export default function* authWatcher() {
  yield takeLatest(consts.LOAD_APP, loadAppFlow);
}
