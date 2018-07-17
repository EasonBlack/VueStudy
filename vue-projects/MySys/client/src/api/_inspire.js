import axios from 'axios';

export async function GetInspire(obj) {
    return await axios.get(`${ApiUrl}/inspire`, {params:obj})
}

export async function PostInspire(obj) {
    return await axios.post(`${ApiUrl}/inspire`, obj)    
}

export async function PutInspire(obj) {
    return await axios.put(`${ApiUrl}/inspire/${obj.id}`, obj)    
}


