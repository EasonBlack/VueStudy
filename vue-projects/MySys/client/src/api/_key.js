import axios from 'axios';

export async function GetKey() {
    return await axios.get(`${ApiUrl}/key`)    
}

export async function PostKey(obj) {
    return await axios.post(`${ApiUrl}/key`, obj)    
}

export async function PostKeyList(obj) {
    return await axios.post(`${ApiUrl}/keylist`, obj)    
}


