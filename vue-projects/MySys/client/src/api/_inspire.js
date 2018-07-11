import axios from 'axios';
import {ApiUrl} from './config.js';

export async function GetInspire(obj) {
    return await axios.get(`${ApiUrl}/inspire`, obj)
}

export async function PostInspire(obj) {
    return await axios.post(`${ApiUrl}/inspire`, obj)    
}


