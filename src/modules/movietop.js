//무비TOP 20에 대한 리덕스 모듈

//1. api데이터 호출
import * as movieTopAPI from '../apis/movietop';

//2. 유틸에서 함수 호출
import {
    createPromiseThunk,
    createPromiseThunkById,
    reducerUtils,
    handleAsyncActions,
    handleAsyncActionsById
} from '../libs/asyncUtils';

//3. 액션타입 지정
// 여러개 조회하기
const GET_MOVIETOPS = 'GET_MOVIETOPS'; // 요청 시작
const GET_MOVIETOPS_SUCCESS = 'GET_MOVIETOPS_SUCCESS'; // 요청 성공
const GET_MOVIETOPS_ERROR = 'GET_MOVIETOPS_ERROR'; // 요청 실패

// 하나 조회하기
const GET_MOVIETOP = 'GET_MOVIETOP';
const GET_MOVIETOP_SUCCESS = 'GET_MOVIETOP_SUCCESS';
const GET_MOVIETOP_ERROR = 'GET_MOVIETOP_ERROR';

//4. 액션생성함수 내보내기
export const getMovieTops = createPromiseThunk(GET_MOVIETOPS, movieTopAPI.getMovieTops);
export const getMovieTop = createPromiseThunkById(GET_MOVIETOP, movieTopAPI.getMovieTopById);

//5. 초기값 지정
const initialState = {
    movietops: reducerUtils.initial(),
    movietop: reducerUtils.initial()
}

//6. 리듀서 함수 생성 후 내보내기
export default function movietops(state = initialState, action){
    switch (action.type){
        case GET_MOVIETOPS:
        case GET_MOVIETOPS_SUCCESS:
        case GET_MOVIETOPS_ERROR:
            return handleAsyncActions(GET_MOVIETOPS, 'movietops', true)(state, action);
        case GET_MOVIETOP:    
        case GET_MOVIETOP_SUCCESS:    
        case GET_MOVIETOP_ERROR:
            return handleAsyncActionsById(GET_MOVIETOP, 'movietop', true)(state, action);
        default:
            return state;    
    }
}