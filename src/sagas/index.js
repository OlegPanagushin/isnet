import { takeLatest, put, call, fork } from "redux-saga/effects";
import { delay } from "redux-saga";
import * as consts from "../constants";
import { fetchData, register, income } from "../services/data";

function* loadAppFlow() {
  const data = yield call(fetchData);
  yield put({ type: consts.GOT_USERS, users: data.users });
  yield put({ type: consts.GOT_LINKS, links: data.links });
  yield put({ type: consts.GOT_PRODUCTS, products: data.products });
}

function* registerLoop() {
  //while (true) {
  yield call(register, 3, 5, 5);
  const data = yield call(fetchData);
  yield put({ type: consts.GOT_USERS, users: data.users });
  yield put({ type: consts.GOT_LINKS, links: data.links });
  //   if (data.users.length < 100) yield call(delay, 5000);
  //   else break;
  // }
}

function* incomeLoop() {
  while (true) {
    yield call(income);
    const data = yield call(fetchData);
    yield put({ type: consts.GOT_USERS, users: data.users });
    yield call(delay, 1000);
  }
}

function* simulationFlow() {
  yield fork(registerLoop);
  //yield fork(incomeLoop);
}

export default function* rootSaga() {
  yield takeLatest(consts.LOAD_APP, loadAppFlow);
  yield takeLatest(consts.START_SIMULATION, simulationFlow);
}
