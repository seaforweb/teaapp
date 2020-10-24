import {request} from "./require";

export function userJudgeMail(uMail) {
  return request({
    url: '/user/verifyCode',
    method: 'get',
    params: {
      uMail
    }
  })
}

export function userAuthCode(uMail, verifyCode, newPwd) {
  return request({
    url: '/user/reset',
    method: 'get',
    params: {
      uMail,
      verifyCode,
      newPwd
    }
  })
}
