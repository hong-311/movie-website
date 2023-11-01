//1. axios호출
import axios from "axios";

//2. axios를 통해서 데이터 전체를 얻는 함수 내보내기
export const getParaTops = async () => {
    const response = await axios.get('http://ehfpal311.dothome.co.kr/data.json');
    return response.data.paratop;
}

//3. axios를 통해서 데이터 한개한개를 얻는 함수 내보내기
export const getParaTopById = async id => {
    const response = await axios.get('http://ehfpal311.dothome.co.kr/data.json');
    return response.data.paratop[id-1];
}
