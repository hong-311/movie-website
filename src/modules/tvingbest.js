//티빙TOP20 리덕스모듈

//1. api데이터 호출
import * as tvingBestAPI from '../apis/tvingbest';

//2. 유틸로부터 함수호출 - 전체데이터관련, 각각데이터관련 모두 호출
import { 
    createPromiseThunk, 
    createPromiseThunkById, 
    reducerUtils, 
    handleAsyncActions, 
    handleAsyncActionsById 
} from '../libs/asyncUtils';

//3. 액션타입명 선정 - 전체데이터3개, 각각데이터3개
// 여러개 조회하기
const GET_TVINGBESTS = 'GET_TVINGBESTS'; // 요청 시작
const GET_TVINGBESTS_SUCCESS = 'GET_TVINGBESTS_SUCCESS'; // 요청 성공
const GET_TVINGBESTS_ERROR = 'GET_TVINGBESTS_ERROR'; // 요청 실패

// 하나 조회하기
const GET_TVINGBEST = 'GET_TVINGBEST';
const GET_TVINGBEST_SUCCESS = 'GET_TVINGBEST_SUCCESS';
const GET_TVINGBEST_ERROR = 'GET_TVINGBEST_ERROR';

//4. 액션생성함수 내보내기
export const getTvingBests = createPromiseThunk(GET_TVINGBESTS, tvingBestAPI.getTvingBests);
export const getTvingBest = createPromiseThunkById(GET_TVINGBEST, tvingBestAPI.getTvingBestById);

//5. 초기값 선언
const initialState = {
    tvingbests: reducerUtils.initial(),
    tvingbest: reducerUtils.initial()
}

//6. 리듀서 함수 선언
export default function tivingbests(state = initialState, action){
    switch (action.type){
        case GET_TVINGBESTS:
        case GET_TVINGBESTS_SUCCESS:
        case GET_TVINGBESTS_ERROR:
            return handleAsyncActions(GET_TVINGBESTS, 'tvingbests', true)(state, action);
        case GET_TVINGBEST:
        case GET_TVINGBEST_SUCCESS:
        case GET_TVINGBEST_ERROR:
            return handleAsyncActionsById(GET_TVINGBEST, 'tvingbest', true)(state, action);
        default:
            return state;
    }
}