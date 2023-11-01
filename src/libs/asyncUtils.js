// Promise에 기반한 Thunk를 만들어주는 함수
export const createPromiseThunk = (type, promiseCreator) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

    return param => async dispatch => {
      // 요청 시작
      dispatch({ type, param });
      try {
        // 결과물의 이름을 payload 라는 이름으로 통일
        const payload = await promiseCreator(param);
        dispatch({ type: SUCCESS, payload }); // 성공
      } catch (e) {
        dispatch({ type: ERROR, payload: e, error: true }); // 실패
      }
    };
};

// 리듀서에서 사용 할 수 있는 여러 유틸 함수
export const reducerUtils = {
    // 초기 상태
    initial: (initialData = null) => ({
      loading: false,
      data: initialData,
      error: null
    }),

    // 로딩중
    loading: (prevState = null) => ({
      loading: true,
      data: prevState,
      error: null
    }),

    // 성공 상태
    success: payload => ({
      loading: false,
      data: payload,
      error: null
    }),

    // 실패 상태
    error: error => ({
      loading: false,
      data: null,
      error: error
    })
};


// 비동기 관련 액션들을 처리하는 리듀서
// type 은 액션의 타입, key 는 상태의 key (예: posts, post)
export const handleAsyncActions = (type, key, keepData = false) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
    return (state, action) => {
      switch (action.type) {
        case type:
          return {
            ...state,
            [key]: reducerUtils.loading(keepData ? state[key].data : null)
          };
        case SUCCESS:
          return {
            ...state,
            [key]: reducerUtils.success(action.payload)
          };
        case ERROR:
          return {
            ...state,
            [key]: reducerUtils.error(action.payload)
          };
        default:
          return state;
      }
    };
};

// 특정 id를 처리하는 thunk함수
const defaultIdSelector = param => param;
export const createPromiseThunkById = (
  type, 
  promiseCreator,
  idSelector = defaultIdSelector
) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];


  return param => async dispatch => {
    const id = idSelector(param);
    // 요청 시작
    dispatch({ type, meta: id });
    try {
      const payload = await promiseCreator(param);
      dispatch({ type: SUCCESS, payload, meta: id }); // 성공
    } catch (e) {
      dispatch({ type: ERROR, payload: e, error: true, meta: id }); // 실패
    }
  };
};

// id별로 처리하는 유틸함수
export const handleAsyncActionsById = (type, key, keepData = false) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return (state, action) => {
    const id = action.meta;
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: {
            ...state[key],
            [id]: reducerUtils.loading(
              // state[key][id]가 만들어져있지 않을 수도 있으니까 유효성을 먼저 검사 후 data 조회
              keepData ? state[key][id] && state[key][id].data : null
            )
          }
        };
      case SUCCESS:
        return {
          ...state,
          [key]: {
            ...state[key],
            [id]: reducerUtils.success(action.payload)
          }
        };
      case ERROR:
        return {
          ...state,
          [key]: {
            ...state[key],
            [id]: reducerUtils.error(action.payload)
          }
        };
      default:
        return state;
    }
  };
};