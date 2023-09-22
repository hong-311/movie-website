//루트 리듀서
import { combineReducers } from "redux";

//관련 리듀서 호출
import mains from "./main";
import tvingbests from "./tvingbest";
import paratops from "./paratop";
import movietops from "./movietop";
import liveseries from "./liveseries";
import tvprogramnews from "./tvprogramnew";

//루트리듀서 함수 생성
const rootReducer = combineReducers({
    mains,
    tvingbests,
    paratops,
    movietops,
    liveseries,
    tvprogramnews
});

//내보내기
export default rootReducer;