import request from '@/utils/request'

export function register(data) {
    return request({
        url: '/signup',
        method: 'post',
        data
    })
}