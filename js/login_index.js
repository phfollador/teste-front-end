// PELA DOCUMENTAÇÃO DO AXIOS
function postRequest(){
    var email_usuario = document.getElementById("user_email").value;
    var senha_usuario = document.getElementById("user_senha").value;

    // AXIOS POST
    axios.post('https://reqres.in/api/login', {
        email: email_usuario,
        password: senha_usuario
    }).then(function(response){
        if(response['data']['token']){
            sessionStorage.setItem('token', Object.values(response['data']['token']));
            window.location.href = "./lista-usuarios.html";
        }else{
            alert("erro na requisição");
        }return response.data
    }).catch(function(error){
        alert("Não foi possível realizar o login. \n E-mail ou senha inválidos");
        console.log(error);
    })
}