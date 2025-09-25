
//* Para acceder a elementos del DOM, 
//* siempre es mediante el -> document.
//todo .getElementById()
//todo .querySelector()
//todo .querySelectorAll()

const formEl = document.querySelector("form");
const divEl = document.querySelector(".message")

//* Agregando evento al elemento
//* Recibe 2 parametros
//todo 1. Tipo de evento
//todo 2. una función callback, que efecto va a desencadenar
formEl.addEventListener("submit", (event)=>{
    event.preventDefault();
    divEl.innerHTML = "";
    // const name = event.target.elements["name"].value;
    // const email = event.target.elements["email"].value;
    // const password = event.target.elements["idpassword"].value;
    const formData = new FormData(formEl);
    const arrayData = [...formData];
    const objectData = Object.fromEntries(arrayData);
    if(!checkPasswords(objectData.password, objectData.confirmpassword)){
        renderError("Las contraseñas no coinciden")
        return;
    };
    localStorage.setItem(objectData.email,JSON.stringify(objectData));
    
      // Verificar que todos los campos están completos
  if (checkAllData(objectData)) {
    formEl.reset();
    renderSuccess("Te has registrado exitosamente");
    setTimeout(() =>{
    window.location.href ="./pages/login.html"
  }, 3000)
  } else {
    renderError("Todos los campos son obligatorios");
  }
  
});

    const checkPasswords = (password, confirmPassword) => password === confirmPassword
    // Verifica que todos los campos tengan valor no vacío
    const checkAllData = (data) => {
    return Object.values(data).every((value) => value && value.trim() !== "");
    };
    const renderError = (message) => {
    const alert = 
    `<div class="alert alert-danger" role="alert">
    ${message}
    </div> `;
    divEl.insertAdjacentHTML("afterbegin", alert)
}

const renderSuccess = (message) => {
    const alert = 
    `<div class="alert alert-success" role="alert">
    ${message}
    </div> `;
    
    divEl.insertAdjacentHTML("afterend", alert)
}