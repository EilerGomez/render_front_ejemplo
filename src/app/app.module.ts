import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './Service/login.service';
import { ManagerHomepageComponent } from './manager-homepage/manager-homepage.component';
import { NavbarComponent } from './navbar/navbar.component'
import { UsuariosService } from './Service/usuarios.service';
import { SucursalesService } from './Service/sucursales.service';
import { AreaBodegaComponent } from './area-bodega/area-bodega.component';
import { EspacioBodegaComponent } from './area-bodega/espacio-bodega/espacio-bodega.component';
import { ComprasComponent } from './area-bodega/compras/compras.component';
import { ComprasService } from './Service/compras.service';
import { ProductosService } from './Service/productos.service';
import { CajasService } from './Service/cajas.service';
import { ClientesService } from './Service/clientes.service';
import { VentasService } from './Service/ventas.service';
import { TarjetasService } from './Service/tarjetas.service';
import { SolicitudesTarjetasService } from './Service/solicitudes-tarjetas.service';
import { ReportesService } from './Service/reportes.service';
import { AreatablesComponent } from './areatables/areatables.component';
import { EstapciotablesComponent } from './areatables/estapciotables/estapciotables.component';
import { ServiciotableService } from './Service/serviciotable.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ManagerHomepageComponent,
    NavbarComponent,
    AreaBodegaComponent,
    EspacioBodegaComponent,
    ComprasComponent,
    AreatablesComponent,
    EstapciotablesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ LoginService,SucursalesService,
  UsuariosService, ComprasService,ProductosService,CajasService,ClientesService,
  VentasService,TarjetasService, SolicitudesTarjetasService,ReportesService, ServiciotableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
