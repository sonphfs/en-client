
import { getToken } from '@/utils/auth'
import request from '@/utils/request'


export async function isAuthorized() {
    const hasToken = getToken()
    let isAuthorized = false
    if (hasToken) {
        await request({
            url: '/auth',
            method: 'get'
        }).then(() => {
            isAuthorized = true
        }).catch(() => {
            isAuthorized = false
        })
    }
    return isAuthorized
}
