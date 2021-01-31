import Detalles from './Detallepersonaje.js';

let iifeGlobal = (()=>{

    let urlBase = "https://rickandmortyapi.com/api";
    let datos;

    let request = async (url) => {
        try {
            let respuesta = await fetch(url);
            datos = await respuesta.json();
            return datos; 
        } catch (error) {
           console.error(error); 
        }
    };

  
    let personajeID = async (id) => {
        try {
            let infoPersonaje = await request(`${urlBase}/character/${id}`);
            
            let usuarios = new Detalles(infoPersonaje.id, infoPersonaje.name, infoPersonaje.species, infoPersonaje.gender, infoPersonaje.origin);

            document.getElementById(`detallePersonaje-${infoPersonaje.id}`).innerHTML = usuarios.mostrarUsuario();

        } catch (error) {
           console.error(error); 
        }
    };

    return {
        llamandoUsuarios: async () => {
            let dataUsers = await request(`${urlBase}/character`);
            console.log(dataUsers);
            dataUsers.results.forEach(element => {
                detalles.innerHTML += `
                    <div>
                        <img src="${element.image}" alt="${element.id}">
                        <div id="detallePersonaje-${element.id}"> 
                           
                            ${personajeID(element.id)};
                        </div>
                    </div>
                `;
            });
            
        }
    }
})();

iifeGlobal.llamandoUsuarios()