import http from '../services/httpServices'

export function getOwnerProjectApi(){
    return http.get('/project/list').then(({data})=>data.data)
}

export function deleteOwnerProjectApi(id){
    return http.delete(`/project/${id}`).then(({data})=>data.data)
}

export function createProjectApi(data){
    return http.post(`/project/add`,data).then(({data})=>data.data)
}