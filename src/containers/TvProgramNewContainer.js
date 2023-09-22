import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTvProgramNew } from '../modules/tvprogramnew';
import TvProgramNew from '../components/tv/TvProgramNew';

function TvProgramNewContainer({ tvProgramNewId }) {
    const { data, loading, error } = useSelector(
        state => state.tvprogramnews.tvprogramnew[tvProgramNewId]
      ) || {
        loading: false,
        data: null,
        error: null
      };
      
    const dispatch = useDispatch();
    useEffect(() => {
        if (data) return;
        dispatch(getTvProgramNew(tvProgramNewId));
    }, [tvProgramNewId, dispatch, data]);

    

    if(loading) return <div>로딩중...</div>;
    if(error) return <div>에러발생!</div>;
    if(!data) return null;
    return <TvProgramNew tvprogramnew={data} />;
}

export default TvProgramNewContainer;