import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { ComponentThreeComponent } from './component-three/component-three.component';

const routes: Routes = [
  { path: '', component: ComponentOneComponent },
  { path: 'ComponentTwoComponent', component: ComponentTwoComponent },
  { path: 'ComponentThreeComponent', component: ComponentThreeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
