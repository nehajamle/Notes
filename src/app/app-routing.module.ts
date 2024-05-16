import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BoxmodelComponent } from './boxmodel/boxmodel.component';
import { ErrorComponent } from './error/error.component';
import { NotesComponent } from './notes/notes.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch: 'full' },
  { path: 'login', component:LoginComponent },
  {path:'boxmodel',component:BoxmodelComponent},
  {path:'error', component:ErrorComponent},
  {path:'notes', component:NotesComponent},
  { path: 'protected', component: LoginComponent, canActivate: [AuthGuard] },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }