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

export async function PostBookCharactor(res) {
    return await axios.post(`${ApiUrl}/book/${res.id}/charactor`, res)    
}

export async function PutBookCharactor(res) {
    return await axios.put(`${ApiUrl}/book/${res.id}/charactor`, res)    
}

export async function GetCharactorContentByCId(id) {
    return await axios.get(`${ApiUrl}/charactor/${id}`)    
}

export async function GetCharactorContentById(id) {
    return await axios.get(`${ApiUrl}/charactor-content/${id}`)    
}

export async function PostCharactorContent(res) {
    return await axios.post(`${ApiUrl}/charactor/${res.id}`, res)    
}

export async function PutCharactorContent(res) {
    return await axios.post(`${ApiUrl}/charactor/${res.cid}/${res.id}`, res)    
}