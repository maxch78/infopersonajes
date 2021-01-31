import Usuarios from './usuarios.js';

export default class Detalles extends Usuarios {
    constructor(id, name, species, gender, origin){
        super(id)
        this._species = species;
        let _name = name;
        this._gender = gender;
        this._origin = origin;

        this.getFirstName = () => _name;
    }

    get name(){
        return this.getFirstName();
    }
    get gender(){ 
        return this._gender; 
    }
    get species(){ 
        return this._species
    }
    get origin(){
        return this._origin;
    }

    mostrarUsuario(){
        return `
        <ul>
        <li>ID:  ${this.id}</li>
        <li>Nombre:  ${this.name}</li>
        <li>Especie: ${this.species}</li>
        <li>Genero:${this.gender}</li>
        
    </ul>
        `;
    }
}