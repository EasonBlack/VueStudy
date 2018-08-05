import axios from 'axios';


export async function GetContentByBook() {
    return await axios.get(`${ApiUrl}/book`)    
}
