import axios from 'axios';

export async function GetCategory(obj) {
    return await axios.get(`${ApiUrl}/category`, {params: obj})    
}

export async function PostCategory(obj) {
    return await axios.post(`${ApiUrl}/category`, obj)    
}