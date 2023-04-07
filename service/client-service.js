const listaClientes = () => fetch("http://localhost:3000/perfil").then ((respuesta) => respuesta.json()); 

const crearCliente = (nombre,email) => {
    return fetch("http://localhost:3000/perfil", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nombre,email,id: uuid.v4()}),
    });
};
const eliminarCLiente = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "DELETE",
    }) 
}
const detalleCliente = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`).then( (respuesta) => respuesta.json())
}
const actulizarCliente = (nombre,email,id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({nombre,email}),
    })
    .then( respuesta => respuesta)
    .catch( err => console.log(err));
}
export const clientServices = {
    listaClientes,
    crearCliente,
    eliminarCLiente,
    detalleCliente,
    actulizarCliente,
}









         


