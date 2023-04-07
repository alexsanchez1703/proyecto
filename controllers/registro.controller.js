import { clientServices } from "../service/client-service.js";
const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", async(evento) => {
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    try {
        if(nombre && email) {
            clientServices.crearCliente(nombre,email)
            window.location.href = "../screens/registro_completado.html";
        }else{
            throw new Error();
        }
    } catch (error) {
        window.location.href = "../screens/error.html"
    }
    
});