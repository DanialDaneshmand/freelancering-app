import http from '../services/httpServices'

export function getOwnerProjectApi(){
    return http.get('/project/owner-projects').then(({data})=>data.data)
}