import {request} from "./require";

// export function userFindingMail(uMail) {
//   return request({
//     url:'/user/finding',
//     method:'post',
//     params: {
//       uMail
//     }
//   })
// }

export function userJudgeMail(userJudgeMail) {
  return request({
    url: '/user/finding',
    method: 'get',
    params: {
      userJudgeMail
    }
  })
}

export function userAuthCode(userAuthCode) {
  return request({
    url: '/user/finding',
    method: 'post',
    params: {
      userAuthCode
    }
  })
}

// export function userChangeSuccess(userChangeSuccess) {
//   return request({
//     url: '/user/finding',
//     method: 'get',
//     params: {
//       userChangeSuccess
//     }
//   })
// }