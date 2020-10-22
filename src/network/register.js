import {request} from "./require";
export function registerInfo(registerInfo) {
  return request({
    url: '/user/register',
    method: 'post',
    params: {
      registerInfo
    }
  })
}
