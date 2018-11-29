/**
 * Created by chenxiaobo on 2018/11/29.
 */
/**
 * Created by chenxiaobo on 2018/11/29.
 */
export default {
  namespace: 'basicLayout',
  state: {
    loginInfo: {
      userName:"sniper",
      age:"30",

    },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        list: action.data,
      };
    },
  },
  effects: {
    // *fetch(action, { put, call }) {
    //   const users = yield put(fetchUsers, action.data);
    //   yield put({ type: 'save', data: users });
    // },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          // dispatch({ type: 'fetch' });
        }
      });
    },
  },
}

