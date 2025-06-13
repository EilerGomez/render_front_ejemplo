export class MyTable{
    id!:number | null
    nombre!:string
    edad!:number | null
    parentesco!:string
    constructor(id:number|null, nombre:string, edad:number|null, parentesco:string){
        this.id=id
        this.nombre=nombre
        this.edad=edad
        this.parentesco=parentesco
    }
}