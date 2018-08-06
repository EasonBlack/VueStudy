import axios from 'axios';


export async function GetSectionByBook(obj) {
    return await axios.get(`${ApiUrl}/book/${obj.bookId}/section`)    
}

export async function GetContentBySection(obj) {
    return await axios.get(`${ApiUrl}/book-section/${obj.sectionId}/content`)    
}

export async function PostContentBySection(obj) {
    return await axios.post(`${ApiUrl}/book-section/${obj.sectionId}/content`, obj)    
}
