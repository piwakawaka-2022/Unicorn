import request from 'superagent'

export function fetchWishes() {
  return request.get('/api/v1/wishes').then((res) => res.body)
}
