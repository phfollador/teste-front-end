window.onload = checaAuth;

function checaAuth(){
  if(sessionStorage.getItem('token') != null){
    var userList = document.getElementById('userList');
    axios.get("https://reqres.in/api/users?page=1")
    .then(function(response){
      apiData = response.data;
      users = apiData.data;
      users.map(
        (user) =>
          (userList.innerHTML += `<div class="userBox"> <button class="editButton"> <img src="./assets/icon-edit.svg" alt="Editar" /></button>
          <img class="userImg" src="${user.avatar}" alt="Foto de ${user.first_name} ${user.last_name}"/> <p style="font-family: Helvetica;">${user.first_name} ${user.last_name}</p>
          <span style="font-family: Helvetica;">${user.email}</span> </div>`)
      );
    }) 
    .then(function(){
      userList.innerHTML += `<footer><p style="font-family: Helvetica;">Mostrando ${apiData.per_page} de ${apiData.total}</p></footer>`;
    });
  } else{
    alert("Usuário digitado não pode ser autenticado, faça o login com um nome e senha de usuários válidos para acessar essa página!");
    window.location.href = "./index.html";
  }
}