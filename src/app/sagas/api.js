import { put, call, takeLatest, all } from 'redux-saga/effects';

function* fetchQuestions() {
    yield put({ type: 'QUESTIONS_RECEIVING' });
    try {
        const res = yield call(fetch, 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
        const json = yield call([res, 'json'])
        yield put({ type: 'QUESTIONS_RECEIVED', payload: json.results });
        yield put({ type: 'CHANGE_QUESTION_COUNT', payload: json.results.length });
    }
    catch(e) {
        yield put({ type: 'QUESTIONS_NOT_RECEIVED', payload: e });
    }
   
}

function* actionWatcher() {
    yield takeLatest('START_EXAM', fetchQuestions)
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}