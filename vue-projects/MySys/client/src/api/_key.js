import axios from 'axios';
import {ApiUrl} from './config.js';

export async function GetKey(type) {
    return await axios.get(`${ApiUrl}/key/${type}`)    
}

export async function PostKey(obj) {
    return await axios.post(`${ApiUrl}/key`, obj)    
}

export async function PostKeyList(obj) {
    return await axios.post(`${ApiUrl}/keylist`, obj)    
}



export async function DeleteKey(obj) {
    return await axios.delete(`${ApiUrl}/key/${obj.id}`)    
}
