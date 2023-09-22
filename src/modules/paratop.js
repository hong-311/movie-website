//파라마운트TOP20 리덕스 모듈

//1. api데이터 불러오기
import * as paraTopAPI from '../apis/paratop';

//2. 유틸로부터 함수 호출
import {
    createPromiseThunk,
    createPromiseThunkById,
    reducerUtils,
    handleAsyncActions,
    handleAsyncActionsById
} from '../libs/asyncUtils';

//3. 액션타입생성
// 여러개 조회하기
const GET_PARATOPS = 'GET_PARATOPS'; // 요청 시작
const GET_PARATOPS_SUCCESS = 'GET_PARATOPS_SUCCESS'; // 요청 성공
const GET_PARATOPS_ERROR = 'GET_PARATOPS_ERROR'; // 요청 실패

// 하나 조회하기
const GET_PARATOP = 'GET_PARATOP';
const GET_PARATOP_SUCCESS = 'GET_PARATOP_SUCCESS';
const GET_PARATOP_ERROR = 'GET_PARATOP_ERROR';

//4. 액션생성함수 생성 내보기
export const getParaTops = createPromiseThunk(GET_PARATOPS, paraTopAPI.getParaTops);
export const getParaTop = createPromiseThunkById(GET_PARATOP, paraTopAPI.getParaTopById);

//5. 초기값 지정
const initialState = {
    paratops: reducerUtils.initial(),
    paratop: reducerUtils.initial()
}

//6. 리듀서 생성해서 내보내기
export default function paratops(state = initialState, action) {
    switch (action.type) {
        case GET_PARATOPS:
        case GET_PARATOPS_SUCCESS:
        case GET_PARATOPS_ERROR:
            return handleAsyncActions(GET_PARATOPS, 'paratops', true)(state, action);
        case GET_PARATOP:
        case GET_PARATOP_SUCCESS:
        case GET_PARATOP_ERROR:
            return handleAsyncActionsById(GET_PARATOP, 'paratop', true)(state, action);
        default:
            return state;
    }
}