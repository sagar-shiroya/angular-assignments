import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectiveComponent } from './directive/directive.component';
import { HomeComponent } from './home/home.component';
import { PipeComponent } from './pipe/pipe.component';

const routes: Routes = [
  {path: 'pipe-demo', component: PipeComponent},
  {path: 'directive-demo', component: DirectiveComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PipeComponent, DirectiveComponent, HomeComponent];
