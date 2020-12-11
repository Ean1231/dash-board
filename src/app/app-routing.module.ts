import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AddComponent } from './add/add.component';
import { TimelineComponent } from './timeline/timeline.component'

const routes: Routes = [
  { path:"", component:HomeComponent },
  { path: "contact", component: ContactComponent },
  { path: "add", component: AddComponent },
  { path: 'home', component: HomeComponent },
  { path: 'timeline', component: TimelineComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
