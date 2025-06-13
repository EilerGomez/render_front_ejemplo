import { Component, OnInit } from '@angular/core';
import { Compra } from 'src/app/Modelo/Compra';
import { ComprasService } from 'src/app/Service/compras.service';
import { Usuario } from 'src/app/Modelo/Usuario';
import { data, error } from 'jquery';
import { Producto } from 'src/app/Modelo/Producto';
import { ProductosService } from 'src/app/Service/productos.service';
import { ProdcutosCompra } from 'src/app/Modelo/ProductosCompra';
import { NgForm } from '@angular/forms';
import { MyTable } from 'src/app/Modelo/mytable';
import { ServiciotableService } from 'src/app/Service/serviciotable.service';
@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent {
  constructor(private servicioCompras:ComprasService, private servicioProductos:ProductosService,
    private serviceTable:ServiciotableService
  ){}
  compras!:Compra[]
  obj!:MyTable[]
nuevaPersona: MyTable = new MyTable(null, '', null, '');
  mostrarNuevaCompra:boolean=false;
  productos!:Producto[]

  precioProducto!:number
  cantidadProducto!:number
  productoSeleccionado!:any

  codigoNuevaCompra!:number

  productosNuevaCompra !:ProdcutosCompra[]

  totalNuevaCompra:number=0;

  codigoDetalleCompra!:number
  mostrarDetalles:boolean=false;

  ngOnInit():void{
    this.serviceTable.getTable().subscribe(data=>{
      this.obj=data;
      //this.traerProductos();
    }, error=>{
      console.log(error)
      
    })
  }
   guardar() {
    // Aquí va tu lógica para guardar (ejemplo con HTTP POST)
    this.serviceTable.postTable(this.nuevaPersona)
      .subscribe({
        next: (data:any) => {
          this.nuevaPersona.id=Number(data.id);
          alert('Persona guardada correctamente');
          this.obj.unshift(this.nuevaPersona); // Agrega la nueva persona a la tabla
          this.resetForm();
        },
        error: (err) => {
          console.error('Error al guardar:', err);
          alert('Error al guardar la persona');
        }
      });
  }

  resetForm() {
    this.nuevaPersona = {
      id:null,
      nombre: '',
      edad: null,
      parentesco: ''
    };
  }


  verDetalles(compra:Compra){
    this.mostrarDetalles=true;
    this.servicioProductos.getProductosNuevaCompra(compra.codigo,this.getRolDB()).subscribe(data=>{
      this.productosNuevaCompra=data
      this.codigoDetalleCompra=compra.codigo
      this.totalNuevaCompra=compra.total_compra
    })
  }

  filtrarCompras(filtro:string){
    console.log("filtro: " + filtro)
  }

  getRolDB(){
    let stringUser = localStorage.getItem('usuario');
    let usuario:Usuario = stringUser? JSON.parse(stringUser):null;
    let rol = usuario? usuario.rol:0;
    return rol;
  }
  getIDUser(){
    let stringUser = localStorage.getItem('usuario');
    let usuario:Usuario = stringUser? JSON.parse(stringUser):null;
    let rol = usuario? usuario.identificacion:0;
    return rol;
  }
  getSucursal(){
    let stringUser = localStorage.getItem('usuario');
    let usuario:Usuario = stringUser? JSON.parse(stringUser):null;
    let suc = usuario? usuario.sucursal:0;
    return suc;
  }

  nuevaCompra(){
    //hacer que se agregue una nueva compra
    this.productosNuevaCompra= []
    this.totalNuevaCompra=0;
    this.mostrarNuevaCompra=true;
    let compra = new Compra();
    compra.usuario=this.getIDUser();
    compra.sucursal=this.getSucursal();
    this.servicioCompras.nuevaCompra(compra,this.getRolDB()).subscribe(data=>{
      this.codigoNuevaCompra=data.codigo_compra;
      console.log(this.codigoNuevaCompra)
      
    },error=>{
      console.log(error)
    })
  }

  traerProductosNuevaCompra(idC:number){
    this.servicioProductos.getProductosNuevaCompra(idC,this.getRolDB()).subscribe(data=>{
      this.productosNuevaCompra=data;
    },error=>{
      console.log(error)
    })
  }

  agregarProductoACompra(nuevaCompraForm:NgForm) {
    let pc = new ProdcutosCompra(this.codigoNuevaCompra,parseInt(this.productoSeleccionado),this.cantidadProducto,this.precioProducto);
    this.servicioProductos.nuevoProductoCompra(pc,this.getRolDB()).subscribe(data=>{
      console.log(data);
      this.traerProductosNuevaCompra(this.codigoNuevaCompra);
      nuevaCompraForm.resetForm();
      this.totalNuevaCompra+=pc.cantidad*pc.precio_unitario;
      this.traerProductos();
    }, error=>{
      console.log(error)
      alert("No cuentas con el dinero sufuciente para realizar esta compra, por favor comunicate con el administrador")
    })
  }

  traerProductos(){
    this.servicioProductos.getProductosSucursal(this.getSucursal(),this.getRolDB()).subscribe(data=>{
      this.productos=data;
    }, error=>{
      console.log(error)
    })
  }

  dejarDeMostrarNuevaCompra(){
    this.mostrarNuevaCompra=false;
    if(this.totalNuevaCompra==0){
      //eliminar la compra
      this.servicioCompras.deleteCompra(this.getRolDB(),this.codigoNuevaCompra).subscribe(data=>{
        console.log("compra eliminada");
        this.ngOnInit();
      })
    }else{
      this.ngOnInit();
    }
  }

  cancelarCompra(){
    this.servicioCompras.cancelarCompra(this.getRolDB(),this.codigoNuevaCompra).subscribe(data=>{
      alert("Se la cancelado al compra!");
      this.mostrarNuevaCompra=false;
      this.ngOnInit();
    }, error=>{
      console.log(error);
    })
  }
  



}
