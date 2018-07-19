import axios from 'axios';

let btnLogin = document.getElementById("btnLogin");
btnLogin.addEventListener('click', ()=>{
    let txtName =  document.getElementById("txtName").value;
    let txtPassword =  document.getElementById("txtPassword").value;
    axios.post(`${ApiUrl}/user`, {
        name: txtName,
        password: txtPassword
    })
    .then(res=>{
        if(res.data) {
            location.href = 'index.html';
        }
    })
})