import axios from 'axios';

export async function PostCollection(obj) {
   
    return await axios.post(`${ApiUrl}/collection`, obj)    
}

export async function GetCollection(obj) {
    return await axios.get(`${ApiUrl}/collection`, {params:obj})    
}

export async function PutCollection(obj) {
    console.log(obj)
    return await axios.put(`${ApiUrl}/collection/${obj.id}`, obj)    
}