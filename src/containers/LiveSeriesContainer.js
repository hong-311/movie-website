import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LiveSeriesList from "../components/live/LiveSeriesList";
import { getLiveSeries } from "../modules/liveseries";
import LiveLoadingList from "../components/common/LiveLoadingList";
import Error from "../components/common/Error";

function LiveSeriesContainer() {
  const { data, loading, error } = useSelector((state) => state.liveseries.liveseries);
  const dispatch = useDispatch();

  console.log(data);

  // 컴포넌트 마운트 후 메인이미지 목록 요청
  useEffect(() => {
    dispatch(getLiveSeries());
  }, [dispatch]);

  if (loading && !data) return <LiveLoadingList />;
  if (error) return <Error />;
  if (!data) return null;
  return <LiveSeriesList liveseries={data} />;
}

export default LiveSeriesContainer;