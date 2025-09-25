const formLogin = document.getElementById("login")
const btnEl = document.getElementById("btnform")


formLogin.addEventListener("submit", (event) =>{
    event.preventDefault();
    const email = event.target.elements["email"].value;
    const password = event.target.elements["password"].value;
    const localData = getUserInfo(email)
    if(localData === undefined){
        btnEl.classList.remove("btn-primary");
        btnEl.classList.add("btn-danger");
        return
    }
    if(checkPasswords(localData, password)){
        btnEl.classList.remove("btn-primary")
        btnEl.classList.remove("btn-danger");
        btnEl.classList.add("btn-success")
        event.target.elements["password"].classList.remove("is-invalid");
        event.target.elements["password"].classList.add("is-valid");
        setTimeout(() =>{
            window.location.href="../pages/user.html"
        }, 3000)
    }else{
        event.target.elements["password"].classList.add("is-invalid");
        btnEl.classList.remove("btn-primary")
        btnEl.classList.add("btn-danger")
        return;
    }

});

const getUserInfo = (email) => {
    const data = localStorage.getItem(email);
    if(data === null) return;
    return JSON.parse(data);
}

const checkPasswords = ({password}, loginPassword) =>{
    return password === loginPassword;
}

