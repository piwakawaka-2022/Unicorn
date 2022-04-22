import request from 'superagent'

export function fetchWishes() {
  return request.get('/api/v1/wishes').then((res) => res.body)
}

export function saveWishes(dataForm) {
  return request
    .post('/api/v1/wishes')
    .send(dataForm)
    .then((res) => res.body)
}

// post to api/v1/wishes
