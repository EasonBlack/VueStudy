import axios from 'axios';
import {ApiUrl} from './config.js';

export async function GetCategory(type) {
    return await axios.get(`${ApiUrl}/category/${type}`)    
}

export async function PostCategory(obj) {
    return await axios.post(`${ApiUrl}/category`, obj)    
}