//티빙TOP20 데이터를 호출할 axios처리 문서

//1. axios호출
import axios from "axios";

//2. axios를 통해서 데이터 전체를 얻는 함수 내보내기
//기존 api파일을 다른 이름으로 저장 후 주소변경, 함수명변경
export const getMovieTops = async () => {
    const response = await axios.get('http://localhost:4000/movietop');
    return response.data;
}

//3. axios를 통해서 데이터 한개한개를 얻는 함수 내보내기
export const getMovieTopById = async id => {
    const response = await axios.get(`http://localhost:4000/movietop/${id}`);
    return response.data;
}
