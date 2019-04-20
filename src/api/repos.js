import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/repos',
    method: 'get',
    params: query
  })
}

export function createRepo(data) {
  return request({
    url: '/repos',
    method: 'post',
    data
  })
}

export function updateRepo(data) {
  return request({
    url: '/repos/' + data.id,
    method: 'put',
    data
  })
}

export function deleteRepo(id) {
  return request({
    url: '/repos/' + id,
    method: 'delete'
  })
}
