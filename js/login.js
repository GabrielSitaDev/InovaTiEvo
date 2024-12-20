const inputSenha = document.getElementById('pass')
const btnMostrar = document.getElementById('btnMostrar')
let mostrarsenha = false

btnMostrar.addEventListener('click', () => {
    if(!mostrarsenha){
        btnMostrar.classList.remove('fa-eye')
        btnMostrar.classList.add('fa-eye-slash')
        inputSenha.setAttribute('type','text')
        mostrarsenha = true
    } else {
        btnMostrar.classList.add('fa-eye')
        btnMostrar.classList.remove('fa-eye-slash')
        inputSenha.setAttribute('type','password')
        mostrarsenha = false
    }
})