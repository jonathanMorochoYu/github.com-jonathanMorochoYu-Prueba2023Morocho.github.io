import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercadeComponent } from './page/acercade/acercade.component';
import { ContactoComponent } from './page/contacto/contacto.component';
import { MenuComponent } from './page/menu/menu.component';
import { TextoComponent } from './page/texto/texto.component';

const routes: Routes = [

{path:'contacto',component:ContactoComponent},
{path:'texto',component:TextoComponent},
{path:'acercade',component:AcercadeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
