import axios from 'axios';
import {ApiUrl} from './config.js';



export async function PostCollection(obj) {
    return await axios.post(`${ApiUrl}/collection`, obj)    
}

export async function GetCollection(obj) {
    return await axios.get(`${ApiUrl}/collection`, {params:obj})    
}