import {request} from "./require";

export function userLogin(uMail, uPwd) {
  return request({
    url: '/user/login',
    method: 'get',
    params: {
      uMail,
      uPwd
    }
  })
}