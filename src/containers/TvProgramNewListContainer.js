import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TvProgramNewList from "../components/tv/TvProgramNewList";
import { getTvProgramNews } from "../modules/tvprogramnew";
import LoadingList from "../components/common/LoadingList";
import Error from "../components/common/Error";

function TvProgramNewListContainer() {
  const { data, loading, error } = useSelector((state) => state.tvprogramnews.tvprogramnews);
  const dispatch = useDispatch();

  // 컴포넌트 마운트 후 메인이미지 목록 요청
  useEffect(() => {
    dispatch(getTvProgramNews());
  }, [dispatch]);

  if (loading && !data) return <LoadingList />;
  if (error) return <Error />;
  if (!data) return null;
  return <TvProgramNewList tvprogramnews={data} />;
}

export default TvProgramNewListContainer;