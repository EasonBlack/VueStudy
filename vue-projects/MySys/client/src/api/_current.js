import axios from 'axios';
import {ApiUrl} from './config.js';

export async function PostCurrent(obj) {
    return await axios.post(`${ApiUrl}/current`, obj)    
}

export async function PutCurrent(obj) {
    return await axios.put(`${ApiUrl}/current/${obj.ID}`, obj)    
}

export async function GetAfterPutCurrent(obj) {
    await axios.put(`${ApiUrl}/current/${obj.ID}`, obj) ;
    return await axios.get(`${ApiUrl}/current/${obj.ID}`)      
}

export async function GetCurrent(obj) {
    return await axios.get(`${ApiUrl}/current`)    
}

export async function GetCurrentById(obj) {
    return await axios.get(`${ApiUrl}/current/${obj.ID}`)    
}