/**
 * Created by chenxiaobo on 2018/11/29.
 */
import {getUser} from '../services/global';
export default {
  namespace: 'basicLayout',
  state: {
    loginInfo: {
      userName:"sniper",
      age:"30",

    },
  },
  effects: {
    * query ({ payload = {} }, { call, put }) {
      // 获取用户列表，赋值给 userList
      // 使用 axios 或者 ajax 请求后台返回数据


      const {data} = yield call(getUser);
      console.log(data)
     // if(data.code===1000){
        yield put({ type: 'save', payload: { data: data }});
     // }
    }
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        loginInfo: action,
      };
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({
            type: 'query',
            payload: {},
          });
        }
      });
    },
  },
}

