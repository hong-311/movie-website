import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getParaTop } from '../modules/paratop';
import ParaTop from '../components/paramount/ParaTop';

function ParaTopContainer({ paraTopId }) {
    const { data, loading, error } = useSelector(
        state => state.paratops.paratop[paraTopId]
      ) || {
        loading: false,
        data: null,
        error: null
      };
      
    const dispatch = useDispatch();
    useEffect(() => {
        if (data) return;
        dispatch(getParaTop(paraTopId));
    }, [paraTopId, dispatch, data]);

    

    if(loading) return <div>로딩중...</div>;
    if(error) return <div>에러발생!</div>;
    if(!data) return null;
    return <ParaTop paratop={data} />;
}

export default ParaTopContainer;