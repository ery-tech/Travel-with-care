import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { RequestComponent } from './components/request/request/request.component';
import { ResponseComponent } from './components/response/response/response.component';

const routes: Routes = [

  {path:'',
  component: HomeComponent},
  {path:'request',
  component: RequestComponent},
  {path:'response',
  component:ResponseComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
