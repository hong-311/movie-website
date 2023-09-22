//티빙TOP20 데이터를 호출할 axios처리 문서

//1. axios호출
import axios from "axios";

//2. axios를 통해서 데이터 전체를 얻는 함수 내보내기
export const getTvingBests = async () => {
    const response = await axios.get('http://localhost:4000/tvingbest');
    return response.data;
}

//3. axios를 통해서 데이터 한개한개를 얻는 함수 내보내기
export const getTvingBestById = async id => {
    const response = await axios.get(`http://localhost:4000/tvingbest/${id}`);
    return response.data;
}