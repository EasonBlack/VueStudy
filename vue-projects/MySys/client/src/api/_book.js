import axios from 'axios';

export async function GetBook() {
    return await axios.get(`${ApiUrl}/book`)    
}

export async function GetBookById(id) {
    return await axios.get(`${ApiUrl}/book/${id}`)    
}


export async function GetBookCharactors(id) {
    return await axios.get(`${ApiUrl}/book/${id}/charactor`)    
}