/**
 * Created by chenxiaobo on 2018/12/1.
 */


import axios from 'axios';
import qs from 'qs';

export async function getUser() {
  return axios.get('/api/users')

}
