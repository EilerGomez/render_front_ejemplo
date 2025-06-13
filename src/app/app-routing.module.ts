import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { ManagerHomepageComponent } from './manager-homepage/manager-homepage.component'
import { AreaBodegaComponent } from './area-bodega/area-bodega.component';
import { ComprasComponent } from './area-bodega/compras/compras.component';

const routes: Routes = [

  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: ManagerHomepageComponent },
  
  { path: 'login', component: LoginComponent },

  {path:'areaBodega',component:AreaBodegaComponent,
    children:[
      {path:'compras', component:ComprasComponent},
    ]
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
