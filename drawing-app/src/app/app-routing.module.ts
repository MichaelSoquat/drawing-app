import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrawingComponent } from './drawing/drawing.component';

const routes: Routes = [
  { path: '', component: DrawingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
