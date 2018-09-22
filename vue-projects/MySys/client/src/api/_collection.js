import axios from 'axios';

export async function PostCollection(obj) {
    return await axios.post(`${ApiUrl}/collection`, obj)    
}

export async function GetCollection(obj) {
    return await axios.get(`${ApiUrl}/collection`, {params:obj})    
}

export async function GetCollectionById(id) {
    return await axios.get(`${ApiUrl}/collection/id/${id}`)    
}

export async function GetRandomCollection() {
    return await axios.get(`${ApiUrl}/collection/random/list`)    
}

export async function PutCollection(obj) {
    return await axios.put(`${ApiUrl}/collection/${obj.id}`, obj)    
}

export async function PatchCollectionTimes(id) {
    return await axios.patch(`${ApiUrl}/collection/times/${id}`)    
}