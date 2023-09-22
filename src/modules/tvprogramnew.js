import * as tvProgramNewAPI from '../apis/tvprogramnew';

import {
    createPromiseThunk,
    reducerUtils,
    handleAsyncActions,
    createPromiseThunkById,
    handleAsyncActionsById
} from '../libs/asyncUtils';

// 메인이미지 여러개 조회하기
const GET_TVPROGRAMNEWS = 'GET_TVPROGRAMNEWS'; // 요청 시작
const GET_TVPROGRAMNEWS_SUCCESS = 'GET_TVPROGRAMNEWS_SUCCESS'; // 요청 성공
const GET_TVPROGRAMNEWS_ERROR = 'GET_TVPROGRAMNEWS_ERROR'; // 요청 실패

// 메인이미지 하나 조회하기
const GET_TVPROGRAMNEW = 'GET_TVPROGRAMNEW';
const GET_TVPROGRAMNEW_SUCCESS = 'GET_TVPROGRAMNEW_SUCCESS';
const GET_TVPROGRAMNEW_ERROR = 'GET_TVPROGRAMNEW_ERROR';

export const getTvProgramNews = createPromiseThunk(GET_TVPROGRAMNEWS, tvProgramNewAPI.getTvProgramNews);
export const getTvProgramNew = createPromiseThunkById(GET_TVPROGRAMNEW, tvProgramNewAPI.getTvProgramNewById);

const initialState = {
    tvprogramnews: reducerUtils.initial(),
    tvprogramnew: reducerUtils.initial()
};

export default function tvprogramnews(state = initialState, action) {
    switch (action.type) {
        case GET_TVPROGRAMNEWS:
        case GET_TVPROGRAMNEWS_SUCCESS:
        case GET_TVPROGRAMNEWS_ERROR:
          return handleAsyncActions(GET_TVPROGRAMNEWS, 'tvprogramnews', true)(state, action);
        case GET_TVPROGRAMNEW:
        case GET_TVPROGRAMNEW_SUCCESS:
        case GET_TVPROGRAMNEW_ERROR:
          return handleAsyncActionsById(GET_TVPROGRAMNEW, 'tvprogramnew', true)(state, action);
        default:
          return state;
    }
}