import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component'
import { TableComponent } from './table/table.component';
import { EInfoComponent } from './e-info/e-info.component';

const routes: Routes = [
  {path: 'Form-component', component:FormComponent},
  {path:'Table-Component', component:TableComponent},
  {path:'Einfo-Component', component:EInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
