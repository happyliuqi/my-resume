import {fetch, baseUrl} from 'config/index'

export function loginUserNo (params) {
  return fetch(`${baseUrl}/root/login/checkMemberLogin`, params)
}
