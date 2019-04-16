import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/collections',
    method: 'get',
    params: query
  })
}
