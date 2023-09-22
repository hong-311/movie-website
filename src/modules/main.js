//티빙 메인이미지 슬라이더를 관리할 리덕스 모듈

//1. 데이터 호출
import * as mainAPI from '../apis/main';

//1-2. 유틸호출 - 서브페이지 없는 구성
import { createPromiseThunk, reducerUtils, handleAsyncActions } from '../libs/asyncUtils';

//2. 액션이름
// 메인이미지 여러개 조회하기
const GET_MAINS = 'GET_MAINS'; // 요청 시작
const GET_MAINS_SUCCESS = 'GET_MAINS_SUCCESS'; // 요청 성공
const GET_MAINS_ERROR = 'GET_MAINS_ERROR'; // 요청 실패

//3. 액션생성함수
export const getMains = createPromiseThunk(GET_MAINS,mainAPI.getMains);

//4. 초기값 지정
const initialState = {
    mains: reducerUtils.initial()
}

//5. 리듀서 함수 선언
export default function mains(state = initialState, action){
    switch (action.type) {
        case GET_MAINS:
        case GET_MAINS_SUCCESS:
        case GET_MAINS_ERROR:
            return handleAsyncActions(GET_MAINS, 'mains', true)(state,action);
        default:
            return state;
    }
}