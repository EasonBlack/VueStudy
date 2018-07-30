import axios from 'axios';

export async function GetDaily() {
    return await axios.get(`${ApiUrl}/daily`)    
}

export async function PostDaily(obj) {
    return await axios.post(`${ApiUrl}/daily`, obj)    
}