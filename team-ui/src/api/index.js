import request from '@/utils/request'
export function getIndexData(){
    return request({
        url: '/project/index',
        method: 'get'
    })
}