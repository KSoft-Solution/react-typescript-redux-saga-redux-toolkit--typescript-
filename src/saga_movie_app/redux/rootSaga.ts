import { all } from "redux-saga/effects";
import moviesSagas from "../sagas/_movie_sagas";

function* rootSaga() {
  yield all([...moviesSagas]);
}

export default rootSaga;
