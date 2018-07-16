import axios from 'axios';

export async function GetCategory(type) {
    return await axios.get(`${ApiUrl}/category/${type}`)    
}

export async function PostCategory(obj) {
    return await axios.post(`${ApiUrl}/category`, obj)    
}