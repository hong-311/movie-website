import * as liveSeriesAPI from '../apis/liveseries';

import {
    createPromiseThunk,
    reducerUtils,
    handleAsyncActions,
} from '../libs/asyncUtils';

// 메인이미지 여러개 조회하기
const GET_LIVESERIES = 'GET_LIVESERIES'; // 요청 시작
const GET_LIVESERIES_SUCCESS = 'GET_LIVESERIES_SUCCESS'; // 요청 성공
const GET_LIVESERIES_ERROR = 'GET_LIVESERIES_ERROR'; // 요청 실패


export const getLiveSeries = createPromiseThunk(GET_LIVESERIES, liveSeriesAPI.getLiveSeries);

const initialState = {
    liveseries: reducerUtils.initial()
};

export default function liveSeries(state = initialState, action) {
    switch (action.type) {
        case GET_LIVESERIES:
        case GET_LIVESERIES_SUCCESS:
        case GET_LIVESERIES_ERROR:
          return handleAsyncActions(GET_LIVESERIES, 'liveseries', true)(state, action);
        default:
          return state;
    }
}